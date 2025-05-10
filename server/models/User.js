const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true },
  enrolledCourses: [{ type: String }],
  progress: {
    type: Map,
    of: Number, // e.g. { 'arjuna': 60, 'nurture': 30 }
    default: {},
  },
  resources: [{ type: String }], // URLs or file names
  notifications: [{
    message: String,
    date: { type: Date, default: Date.now },
    read: { type: Boolean, default: false }
  }],
  analytics: {
    scores: [{ date: Date, score: Number }],
    feedback: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
