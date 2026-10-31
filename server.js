const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();
const twilio = require('twilio');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT']
  }
});

app.set('trust proxy', 1);

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/partner', (req, res) => {
  res.sendFile(__dirname + '/partner.html');
});

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/admin.html');
});

// Twilio Credentials & Client Setup
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

const client = twilio(accountSid, authToken);

// 1. Send OTP Route (With Twilio Fallback for Testing)
app.post('/api/send-otp', async (req, res) => {
    const { phone } = req.body;
    try {
        const verification = await client.verify.v2.services(verifyServiceSid)
            .verifications
            .create({ to: `+91${phone}`, channel: 'sms' });
        
        res.json({ success: true, message: "OTP sent successfully via Twilio!" });
    } catch (error) {
        console.warn("Twilio trial exhausted/failed, switching to Mock OTP mode:", error.message);
        res.json({ 
            success: true, 
            message: "OTP sent (Development Mode: Use test OTP 123456)" 
        });
    }
});

// 2. Verify OTP Route (With Mock / Test Bypass)
app.post('/api/verify-otp', async (req, res) => {
    const { phone, code } = req.body;
    try {
        if (code === "123456") {
            return res.json({ success: true, message: "Mock OTP Verified Successfully!" });
        }

        const verificationCheck = await client.verify.v2.services(verifyServiceSid)
            .verificationChecks
            .create({ to: `+91${phone}`, code: code });

        if (verificationCheck.status === 'approved') {
            res.json({ success: true, message: "OTP Verified Successfully!" });
        } else {
            res.status(400).json({ success: false, message: "Invalid OTP code!" });
        }
    } catch (error) {
        console.warn("Twilio verify error fallback to Mock OTP logic:", error.message);
        if (code === "123456") {
            return res.json({ success: true, message: "Mock OTP Verified Successfully!" });
        }
        res.status(500).json({ success: false, message: error.message });
    }
});

// --- MONGODB BOOKING SCHEMA & REST API ENDPOINTS ---
const bookingSchema = new mongoose.Schema({
  bookingId: { type: String, required: true, unique: true },
  customerName: String,
  customerPhone: String,
  serviceName: String,
  address: String,
  pincode: String,
  slot: String,
  date: String,
  amount: Number,
  requiredDesignation: String,
  assignedPartner: String,
  partnerStatus: { type: String, default: 'PENDING' },
  status: { type: String, default: 'CONFIRMED' },
  cancelReason: String,
  district: { type: String, default: 'kanchipuram' },
  isCompleted: { type: Boolean, default: false },
  // Workflow fields added for robust MongoDB sync
  startOTP: { type: String, default: '654321' },
  isPhotoUploaded: { type: Boolean, default: false },
  isStarted: { type: Boolean, default: false },
  partnerReentered: { type: Boolean, default: false },
  reenteredAmount: Number,
  reenteredWork: String,
  customerConfirmed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

// 1. POST: Save New Booking to Database & Broadcast via Socket
app.post('/api/bookings', async (req, res) => {
  try {
    const bookingData = req.body;
    if (!bookingData.startOTP) {
      bookingData.startOTP = '654321';
    }

    let existing = await Booking.findOne({ bookingId: bookingData.bookingId || bookingData.id });
    if (existing) {
      existing = await Booking.findOneAndUpdate(
        { bookingId: bookingData.bookingId || bookingData.id },
        bookingData,
        { new: true }
      );
      io.to('kanchipuram').emit('new-booking-alert', existing);
      return res.json({ success: true, booking: existing });
    }

    const newBooking = new Booking(bookingData);
    await newBooking.save();

    io.to('kanchipuram').emit('new-booking-alert', newBooking);
    io.emit('new-booking-alert', newBooking);

    res.json({ success: true, booking: newBooking });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 2. GET: Retrieve All Bookings for Partner App / Cross-Device Sync
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 3. PUT: Update Booking Status (Cancel / Accept / Complete / OTP Verify)
app.put('/api/bookings/:id', async (req, res) => {
  try {
    let queryId = req.params.id;
    if (queryId.startsWith('#')) {
      queryId = queryId.substring(1);
    }

    let updated = await Booking.findOneAndUpdate(
      { $or: [{ bookingId: queryId }, { id: queryId }, { bookingId: '#' + queryId }] },
      { $set: req.body },
      { new: true }
    );

    if (!updated && queryId.match(/^[0-9a-fA-F]{24}$/)) {
      updated = await Booking.findByIdAndUpdate(
        queryId,
        { $set: req.body },
        { new: true }
      );
    }

    if (updated) {
      console.log(`✓ Booking ${queryId} updated successfully to status:`, req.body.status || 'Updated');
      io.to('kanchipuram').emit('new-booking-alert', updated);
      io.emit('new-booking-alert', updated);
      return res.json({ success: true, booking: updated });
    } else {
      console.warn(`⚠️ Booking not found for update ID: ${queryId}`);
      return res.status(404).json({ success: false, message: "Booking not found for update" });
    }
  } catch (error) {
    console.error("Booking Update Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- PARTNER SCHEMA & API ENDPOINTS ---
const partnerSchema = new mongoose.Schema({
  partnerId: { type: String, required: true, unique: true },
  name: String,
  mobile: { type: String, required: true, unique: true },
  designation: String,
  currAddress: String,
  email: String,
  aadhaar: String,
  pan: String,
  isOnline: { type: Boolean, default: true },
  isVerified: { type: Boolean, default: false },
  unavailableDates: { type: [String], default: [] } // 🎯 Added for Leave Sync
});

const Partner = mongoose.model('Partner', partnerSchema);

// 1. Partner Register API
app.post('/api/partners/register', async (req, res) => {
  try {
    const partnerData = req.body;
    let existing = await Partner.findOne({ mobile: partnerData.mobile });
    if (existing) {
      existing = await Partner.findOneAndUpdate({ mobile: partnerData.mobile }, partnerData, { new: true });
      return res.json({ success: true, partner: existing });
    }
    const newPartner = new Partner(partnerData);
    await newPartner.save();
    res.json({ success: true, partner: newPartner });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 2. Partner Login / Verify API
app.post('/api/partners/login', async (req, res) => {
  try {
    const { mobile } = req.body;
    const partner = await Partner.findOne({ mobile: mobile });
    if (partner) {
      res.json({ success: true, partner: partner });
    } else {
      res.status(404).json({ success: false, message: "Partner not registered!" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 3. PUT: Update Partner Availability / Leave Dates API
app.put('/api/partners/:id/availability', async (req, res) => {
  try {
    const partnerId = req.params.id;
    const { unavailableDates } = req.body;

    let updatedPartner = await Partner.findOneAndUpdate(
      { $or: [{ partnerId: partnerId }, { _id: partnerId }] },
      { $set: { unavailableDates: unavailableDates } },
      { new: true }
    );

    if (updatedPartner) {
      res.json({ success: true, partner: updatedPartner });
    } else {
      res.status(404).json({ success: false, message: "Partner not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- DIRECT ROOT PATH FIX ---
const rootPath = path.join(__dirname, '../');
app.use(express.static(rootPath));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Static images folder serve panrathu
app.use('/images', express.static(path.join(__dirname, 'images')));

// Dynamic Image Finder
app.get('/api/image/:filename', (req, res) => {
  const baseName = req.params.filename;
  const imagesDir = path.join(__dirname, 'images');
  const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];

  for (let ext of extensions) {
    const fullPath = path.join(imagesDir, baseName + ext);
    if (fs.existsSync(fullPath)) {
      return res.sendFile(fullPath);
    }
  }

  res.redirect('https://placehold.co/200x200/e2e8f0/0f172a?text=No+Image');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log("MongoDB Connection Error:", err));

// Real-time WebSockets logic
io.on('connection', (socket) => {
  console.log(`⚡ Client Connected: ${socket.id}`);

  socket.on('join-district-room', (district) => {
    socket.join('kanchipuram');
    console.log(`📌 Partner ${socket.id} joined Kanchipuram Room`);
  });

  socket.on('create-booking', (bookingData) => {
    console.log(`📢 Broadcasting Job #${bookingData.bookingId || bookingData.id} to Kanchipuram partners`);
    io.to('kanchipuram').emit('new-booking-alert', bookingData);
    socket.broadcast.emit('new-booking-alert', bookingData);
  });

  socket.on('disconnect', () => {
    console.log(`❌ Client Disconnected: ${socket.id}`);
  });
});

// GET: Retrieve Partner Profile & Unavailable Dates by ID
app.get('/api/partners/:id', async (req, res) => {
  try {
    let queryId = req.params.id;
    let partner = await Partner.findOne({ $or: [{ partnerId: queryId }, { _id: queryId }] });
    if (partner) {
      res.json(partner);
    } else {
      res.status(404).json({ success: false, message: "Partner not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- ACCOUNT DELETE API ENDPOINTS ---

// 1. Customer Self Account Delete API
app.delete('/api/customers/:phone', async (req, res) => {
  try {
    const phoneNum = req.params.phone;
    // Oru vela customer collection irundha inga delete panrom, 
    // illana bookings mattum anonymize/delete panna option kudukalam.
    // Inga unga system-ku etha maari Booking records-ah clean up panrom.
    await Booking.deleteMany({ customerPhone: phoneNum });
    res.json({ success: true, message: "Customer account and associated bookings deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- PARTNER SELF ACCOUNT DELETE API (MongoDB Sync) ---
app.delete('/api/partners/:id', async (req, res) => {
  try {
    const queryId = req.params.id;
    
    // MongoDB-la Partner-ah search panni delete panrom (partnerId, mobile, or _id moolama)
    let deletedPartner = await Partner.findOneAndDelete({ 
      $or: [
        { partnerId: queryId }, 
        { mobile: queryId },
        { _id: queryId.match(/^[0-9a-fA-F]{24}$/) ? queryId : null }
      ] 
    });
    
    if (deletedPartner) {
      // Assigned bookings-la partner name-ah unassign panrom
      await Booking.updateMany(
        { assignedPartner: deletedPartner.name }, 
        { $set: { assignedPartner: null, partnerStatus: 'PENDING' } }
      );
      
      res.json({ success: true, message: "Partner account deleted and synced with MongoDB successfully!" });
    } else {
      res.status(404).json({ success: false, message: "Partner not found in database" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});