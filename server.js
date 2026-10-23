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
    methods: ['GET', 'POST']
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
        // Twilio error vanthalum testing-kkaga bypass panni OTP sent nu sollidum
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
        // Testing-kku '123456' vanthal direct-ah success
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
        // Fallback for testing when Twilio account is balance exhausted
        if (code === "123456") {
            return res.json({ success: true, message: "Mock OTP Verified Successfully!" });
        }
        res.status(500).json({ success: false, message: error.message });
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
    socket.join(district);
    console.log(`📌 Socket joined District Room: ${district}`);
  });

  socket.on('create-booking', (bookingData) => {
    // Broadcast notification to specific Kanchipuram / district room partners
    io.to(bookingData.district).emit('new-booking-alert', bookingData);
  });

  socket.on('disconnect', () => {
    console.log(`❌ Client Disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});