const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  role: { 
    type: String, 
    required: true,
    enum: ['Health worker', 'Coordinator', 'Supervisor', 'MOH official', 'Patient', 'Admin'] 
  },
  avatar: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Patient Schema
const PatientSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  weeksPregnant: { type: Number, default: 0 },
  dueDate: { type: Date },
  riskLevel: { 
    type: String, 
    enum: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'],
    default: 'LOW'
  },
  vitals: [{
    bp: String,
    hb: Number,
    fhr: Number,
    recordedAt: { type: Date, default: Date.now }
  }],
  history: [{
    date: { type: Date, default: Date.now },
    title: String,
    location: String,
    status: String
  }]
});

// HealthWorker Schema
const HealthWorkerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  specialty: { type: String },
  experience: { type: String },
  rating: { type: Number, default: 5.0 },
  activeSessions: { type: Number, default: 0 },
  avatar: { type: String },
  // MoH Verification Fields
  mohLicenseNumber: { type: String, unique: true, sparse: true },
  nurseId: { type: String, unique: true, sparse: true },
  isVerified: { type: Boolean, default: false },
  verifiedAt: { type: Date },
  verificationStatus: {
    type: String,
    enum: ['unverified', 'pending', 'verified', 'rejected'],
    default: 'unverified'
  }
});

// Booking Schema
const BookingSchema = new Schema({
  patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  healthWorkerId: { type: Schema.Types.ObjectId, ref: 'HealthWorker' },
  serviceType: { type: String, required: true },
  services: [{ type: String }],
  fare: { type: Number, default: 0 },
  status: { 
    type: String, 
    enum: ['Pending', 'On the way', 'Arrived', 'Completed', 'Cancelled'],
    default: 'Pending'
  },
  eta: { type: Number }, // in minutes
  distance: { type: Number }, // in km
  location: {
    lat: { type: Number },
    lng: { type: Number },
    name: { type: String }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = {
  User: mongoose.model('User', UserSchema),
  Patient: mongoose.model('Patient', PatientSchema),
  HealthWorker: mongoose.model('HealthWorker', HealthWorkerSchema),
  Booking: mongoose.model('Booking', BookingSchema)
};
