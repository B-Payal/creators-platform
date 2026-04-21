import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import userRoute from './routes/userRoutes.js';   
import authRoute from './routes/authRoutes.js'

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || process.env.Frontend_URL || process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

app.use('/api/auth', authRoute);
app.use('/api/posts', userRoute);

export default app;