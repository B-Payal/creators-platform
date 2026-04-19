import app from './app.js';
import dotenv from 'dotenv';
import connect from './config/database.js';

dotenv.config();
connect();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});