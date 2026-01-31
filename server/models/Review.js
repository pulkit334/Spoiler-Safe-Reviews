const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movieTitle: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  safeSummary: {
    type: String,
    required: true,
    trim: true,
  },
  spoilerContent: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    default: 'General',
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for better query performance
reviewSchema.index({ movieTitle: 1, createdAt: -1 });

module.exports = mongoose.model('Review', reviewSchema);
