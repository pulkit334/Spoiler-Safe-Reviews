import React, { useState } from 'react';
import { useReviews } from '../context/ReviewContext';
import ReviewCard from '../components/ReviewCard';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const { reviews, loading, error } = useReviews();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenre, setFilterGenre] = useState('All');

  // Get unique genres
  const genres = ['All', ...new Set(reviews.map(r => r.genre).filter(Boolean))];

  // Filter reviews
  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.movieTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.userName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = filterGenre === 'All' || review.genre === filterGenre;
    return matchesSearch && matchesGenre;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <FaSpinner className="spinner" />
        <p>Loading reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">
          <h2>⚠️ Connection Error</h2>
          <p>{error}</p>
          <p className="error-hint">
            Make sure MongoDB is running and the server is started with <code>npm start</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Discover Movies Without Spoilers</h1>
        <p className="hero-subtitle">
          Read honest reviews while keeping the magic intact
        </p>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by movie or reviewer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="genre-filter">
          <label htmlFor="genre">Genre:</label>
          <select
            id="genre"
            value={filterGenre}
            onChange={(e) => setFilterGenre(e.target.value)}
            className="genre-select"
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="reviews-grid">
        {filteredReviews.length > 0 ? (
          filteredReviews.map(review => (
            <ReviewCard key={review._id} review={review} />
          ))
        ) : (
          <div className="no-reviews">
            <p>No reviews found. Be the first to write one!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
