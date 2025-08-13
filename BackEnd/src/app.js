const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Serve React frontend from dist
app.use(express.static(path.join(__dirname, '../dist')));

// API routes
app.use('/ai', aiRoutes);

// Fallback: send index.html for any route not handled by API
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

module.exports = app;
