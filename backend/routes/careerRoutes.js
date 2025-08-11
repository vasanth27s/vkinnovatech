const express = require('express');
const Career = require('../models/Career');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log('Incoming body:', req.body); // Debug

    const { name, email, phone, position, experience, details, resumeUrl } = req.body;

    const career = await Career.create({
      name,
      email,
      phone,
      position,
      experience,
      details,
      resumeUrl: resumeUrl || '' // fallback empty string if not provided
    });

    res.status(201).json({
      message: 'Application submitted successfully',
      career
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
