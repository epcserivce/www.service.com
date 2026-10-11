const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');
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
// Inga __dirname enbadhu "backend" folder. Adhukku veliya irukkira root folder-ai point panrom.
const rootPath = path.join(__dirname, '../');
app.use(express.static(rootPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../backend/index.html')); // or ungal file irukkura correct folder path
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