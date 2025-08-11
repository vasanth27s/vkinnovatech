const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  position: { type: String },
  experience: { type: Number },
  details: { type: String },
  resumeUrl: { type: String, default: '' } // store exact string from frontend
}, { timestamps: true });

module.exports = mongoose.model('Career', CareerSchema);
