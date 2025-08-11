// backend/models/GetInTouch.js
const mongoose = require('mongoose');

const getInTouchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  project: { type: String },
  message: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('GetInTouch', getInTouchSchema);
