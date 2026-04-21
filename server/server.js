import app from './app.js';
import dotenv from 'dotenv';
import {createServer} from 'http';
import { Server } from 'socket.io';
import connect from './config/database.js';

dotenv.config();
connect();
const PORT = process.env.PORT || 5000;

const httpServer = createServer(app);
const io = new Server(httpServer , {cors:{
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true

}});

io.on('connection' , (socket)=>{
  console.log(`✅ User connected: ${socket.id}`);


socket.on('disconnect' , (reason)=>{
  console.log(`❌ User disconnected: ${socket.id} (${reason})`);
})
});


httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`🔌 Socket.io ready for connections`);
});