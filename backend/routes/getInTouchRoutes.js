// backend/routes/getInTouchRoutes.js
const express = require('express');
const router = express.Router();
const GetInTouch = require('../models/GetInTouch');

router.post('/', async (req, res) => {
  try {
    const { name, role, email, phone, project, message } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'name and email are required' });
    }
    const entry = new GetInTouch({ name, role, email, phone, project, message });
    await entry.save();
    return res.status(201).json({ message: 'Get-in-touch saved' });
  } catch (err) {
    console.error('POST /api/get-in-touch error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// optional GET for testing
router.get('/', async (req, res) => {
  try {
    const list = await GetInTouch.find().sort({ createdAt: -1 }).limit(200);
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching' });
  }
});

module.exports = router;
