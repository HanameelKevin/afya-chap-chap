/**
 * Copyright (c) 2026, Afya Chap Chap
 * All rights reserved.
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const { User, Patient, HealthWorker, Booking } = require('./models');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests, please try again later.' }
});
app.use('/api/', limiter);

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Basic Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

const { getClinicalInsight, analyzeSymptoms } = require('./services/aiService');

// ... existing code ...

// AI Diagnostic Endpoint
app.post('/api/ai/diagnose', async (req, res) => {
  const { vitals } = req.body;
  const insight = await getClinicalInsight(vitals);
  res.json({ insight });
});

// AI Symptom Checker Endpoint
app.post('/api/ai/symptoms', async (req, res) => {
  const { symptoms, history } = req.body;
  const result = await analyzeSymptoms(symptoms, history);
  res.json(result);
});

// Booking endpoint with SMS trigger
app.post('/api/bookings', async (req, res) => {
  const { patientId, phone } = req.body;
  // logic to save booking...
  await sendSMS(phone, "Afya Chap Chap: Your clinic visit has been confirmed!");
  res.status(201).json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
