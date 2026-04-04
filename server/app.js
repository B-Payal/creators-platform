import express from 'express';
import cors from 'cors';
import userRoute from './routes/userRoutes.js';   
import authRoute from './routes/authRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoute);
app.use('/api/posts', userRoute);

export default app;