const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');
const fs = require('fs'); // Note: 'fs' module missing ah irundhal ithaiyum add pannikonga
require('dotenv').config();

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

// --- DIRECT ROOT PATH FIX ---
const rootPath = path.join(__dirname, '../');
app.use(express.static(rootPath));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Static images folder-ai serve pannugiradhu
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

// Real-time WebSockets logic
io.on('connection', (socket) => {
  console.log(`⚡ Client Connected: ${socket.id}`);

  socket.on('join-district-room', (district) => {
    socket.join(district);
    console.log(`📌 Socket joined District Room: ${district}`);
  });

  socket.on('create-booking', (bookingData) => {
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