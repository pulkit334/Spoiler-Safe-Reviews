import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReviews } from '../context/ReviewContext';
import { FaStar } from 'react-icons/fa';
import '../styles/CreateReview.css';

const CreateReview = () => {
  const navigate = useNavigate();
  const { createReview } = useReviews();
  
  const [formData, setFormData] = useState({
    movieTitle: '',
    userName: '',
    rating: 0,
    safeSummary: '',
    spoilerContent: '',
    genre: 'Action',
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance', 'Thriller', 'Documentary', 'Animation', 'Fantasy'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
    if (errors.rating) {
      setErrors(prev => ({ ...prev, rating: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.movieTitle.trim()) {
      newErrors.movieTitle = 'Movie title is required';
    }

    if (!formData.userName.trim()) {
      newErrors.userName = 'Your name is required';
    }

    if (formData.rating === 0) {
      newErrors.rating = 'Please select a rating';
    }

    if (!formData.safeSummary.trim()) {
      newErrors.safeSummary = 'Safe summary is required';
    } else if (formData.safeSummary.trim().length < 20) {
      newErrors.safeSummary = 'Safe summary must be at least 20 characters';
    }

    if (!formData.spoilerContent.trim()) {
      newErrors.spoilerContent = 'Spoiler content is required';
    } else if (formData.spoilerContent.trim().length < 20) {
      newErrors.spoilerContent = 'Spoiler content must be at least 20 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    const result = await createReview(formData);

    if (result.success) {
      navigate('/');
    } else {
      setErrors({ submit: result.error });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-review-container">
      <div className="create-review-card">
        <h1 className="page-title">Write a Review</h1>
        <p className="page-subtitle">
          Share your thoughts while keeping spoilers hidden
        </p>

        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="movieTitle">Movie Title *</label>
              <input
                type="text"
                id="movieTitle"
                name="movieTitle"
                value={formData.movieTitle}
                onChange={handleChange}
                placeholder="Enter movie title"
                className={errors.movieTitle ? 'error' : ''}
              />
              {errors.movieTitle && <span className="error-text">{errors.movieTitle}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="userName">Your Name *</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter your name"
                className={errors.userName ? 'error' : ''}
              />
              {errors.userName && <span className="error-text">{errors.userName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Rating *</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={
                      star <= (hoveredRating || formData.rating)
                        ? 'star filled'
                        : 'star'
                    }
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                  />
                ))}
              </div>
              {errors.rating && <span className="error-text">{errors.rating}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="genre">Genre</label>
              <select
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="genre-select"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="safeSummary">
              Safe Summary * 
              <span className="label-hint">
                (General thoughts - visible to everyone)
              </span>
            </label>
            <textarea
              id="safeSummary"
              name="safeSummary"
              value={formData.safeSummary}
              onChange={handleChange}
              placeholder="Share your general thoughts about the movie without revealing major plot points..."
              rows="5"
              className={errors.safeSummary ? 'error' : ''}
            />
            <div className="char-count">
              {formData.safeSummary.length} characters
            </div>
            {errors.safeSummary && <span className="error-text">{errors.safeSummary}</span>}
          </div>

          <div className="form-group full-width spoiler-group">
            <label htmlFor="spoilerContent">
              Spoiler Content * 
              <span className="label-hint spoiler-hint">
                (Plot twists & ending - hidden by default)
              </span>
            </label>
            <textarea
              id="spoilerContent"
              name="spoilerContent"
              value={formData.spoilerContent}
              onChange={handleChange}
              placeholder="Discuss plot twists, the ending, or any major spoilers here..."
              rows="5"
              className={errors.spoilerContent ? 'error' : ''}
            />
            <div className="char-count">
              {formData.spoilerContent.length} characters
            </div>
            {errors.spoilerContent && <span className="error-text">{errors.spoilerContent}</span>}
          </div>

          {errors.submit && (
            <div className="submit-error">
              {errors.submit}
            </div>
          )}

          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => navigate('/')}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Post Review'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReview;
