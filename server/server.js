const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/spoiler-reviews';

mongoose.connect(MONGODB_URI)
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch((err) => {
  console.error('❌ MongoDB Connection Error:', err.message);
  console.log('💡 Make sure MongoDB is running on your system');
  console.log('   Start MongoDB with: mongod');
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Spoiler-Safe Reviews API is running',
    mongodb: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📍 API: http://localhost:${PORT}/api`);
  console.log(`🔍 Health Check: http://localhost:${PORT}/api/health`);
});
