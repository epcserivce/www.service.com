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

app.use(cors());
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
  district: { type: String, default: 'kanchipuram' },
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

// 1. POST: Save New Booking to Database & Broadcast via Socket
app.post('/api/bookings', async (req, res) => {
  try {
    const bookingData = req.body;
    // Check if booking already exists by bookingId
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

    // Broadcast Realtime Socket Alert to Kanchipuram Room & Universal Fallback
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

// 3. PUT: Update Booking Status (Accept Order / Complete)
app.put('/api/bookings/:id', async (req, res) => {
  try {
    const updated = await Booking.findOneAndUpdate(
      { $or: [{ bookingId: req.params.id }, { _id: req.params.id }, { id: req.params.id }] },
      req.body,
      { new: true }
    );
    if (updated) {
      io.to('kanchipuram').emit('new-booking-alert', updated);
    }
    res.json({ success: true, booking: updated });
  } catch (error) {
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
  isVerified: { type: Boolean, default: false }
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

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});