import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import userRoute from './routes/userRoutes.js';   
import authRoute from './routes/authRoutes.js'

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());


app.use('/api/auth', authRoute);
app.use('/api/posts', userRoute);

export default app;