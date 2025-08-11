const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure uploads directory exists
const uploadsPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use('/uploads', express.static(uploadsPath));

// Routes
app.use('/api/get-in-touch', require('./routes/getInTouchRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/careers', require('./routes/careerRoutes'));

// Health check
app.get('/', (req, res) => res.send('VK Software Solutions API running'));

// Connect to DB and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });

// Handle unhandled rejections
process.on('unhandledRejection', (reason) => {
  console.error('UnhandledRejection:', reason);
});
