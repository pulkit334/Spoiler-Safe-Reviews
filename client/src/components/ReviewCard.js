import React, { useState } from 'react';
import { FaStar, FaHeart, FaEye, FaEyeSlash, FaTrash } from 'react-icons/fa';
import { useReviews } from '../context/ReviewContext';
import '../styles/ReviewCard.css';

const ReviewCard = ({ review }) => {
  const [spoilerRevealed, setSpoilerRevealed] = useState(false);
  const { likeReview, deleteReview } = useReviews();

  const handleRevealToggle = () => {
    setSpoilerRevealed(!spoilerRevealed);
  };

  const handleLike = async () => {
    await likeReview(review._id);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      await deleteReview(review._id);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'star filled' : 'star'}
      />
    ));
  };

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-title-section">
          <h2 className="movie-title">{review.movieTitle}</h2>
          <div className="rating-section">
            {renderStars(review.rating)}
          </div>
        </div>
        <button className="delete-btn" onClick={handleDelete} title="Delete review">
          <FaTrash />
        </button>
      </div>

      <div className="review-meta">
        <span className="reviewer-name">{review.userName}</span>
        <span className="review-date">{formatDate(review.createdAt)}</span>
        {review.genre && <span className="genre-tag">{review.genre}</span>}
      </div>

      <div className="review-content">
        <div className="safe-section">
          <h3 className="section-title">Safe Summary</h3>
          <p className="safe-text">{review.safeSummary}</p>
        </div>

        <div className="spoiler-section">
          <div className="spoiler-header">
            <h3 className="section-title">
              {spoilerRevealed ? 'Spoiler Content' : 'Spoiler Hidden'}
            </h3>
            <button 
              className={`reveal-btn ${spoilerRevealed ? 'revealed' : ''}`}
              onClick={handleRevealToggle}
            >
              {spoilerRevealed ? (
                <>
                  <FaEyeSlash /> Hide Spoiler
                </>
              ) : (
                <>
                  <FaEye /> Reveal Spoiler
                </>
              )}
            </button>
          </div>
          
          <div className={`spoiler-content ${spoilerRevealed ? 'revealed' : 'blurred'}`}>
            <p className="spoiler-text">{review.spoilerContent}</p>
          </div>
          
          {!spoilerRevealed && (
            <div className="spoiler-warning">
              ⚠️ This section contains spoilers. Click "Reveal" to read.
            </div>
          )}
        </div>
      </div>

      <div className="review-footer">
        <button className="like-btn" onClick={handleLike}>
          <FaHeart className="heart-icon" />
          <span>{review.likes || 0}</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
