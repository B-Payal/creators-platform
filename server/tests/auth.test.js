import request from 'supertest';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import app from '../app.js';
import User from '../models/User.js'; // adjust path if needed
dotenv.config();

describe("Auth Routes", () => {

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI_TEST);
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('should register a new user successfully', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: "aparna",
        email: "ap@gmail.com",
        password: "password123"
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('token');
    expect(res.body).toHaveProperty('user');
    expect(res.body.user).toHaveProperty('email', 'ap@gmail.com'); 
  });

  test('should fail to register with an existing email', async () => {
    // First user
    await request(app)
      .post('/api/auth/register')
      .send({
        name: "aparna",
        email: "ap@gmail.com",
        password: "password123"
      });

    // Try again with same email
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: "aparna2",
        email: "ap@gmail.com",
        password: "password123"
      });

    expect(res.status).toBe(400); // or 409 depending on your API
    expect(res.body).toHaveProperty('message');
  });

});