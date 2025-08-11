// backend/routes/careerRoutes.js
const express = require('express');
const Career = require('../models/Career');

const router = express.Router();

// POST /api/careers — Accepts JSON with resumeUrl as string
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, position, experience, details, resumeUrl } = req.body;

    if (!name || !email || !position) {
      return res.status(400).json({ error: 'Name, Email, and Position are required' });
    }

    const career = new Career({
      name,
      email,
      phone,
      position,
      experience,
      details,
      resumeUrl // will store exactly what frontend sends
    });

    await career.save();
    res.status(201).json({ message: 'Application submitted successfully', career });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
