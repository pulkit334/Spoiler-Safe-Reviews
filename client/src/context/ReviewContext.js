import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../apiroute';

const ReviewContext = createContext();

export const useReviews = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error('useReviews must be used within ReviewProvider');
  }
  return context;
};

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all reviews
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/reviews');
      setReviews(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch reviews. Make sure the server is running.');
      console.error('Error fetching reviews:', err);
    } finally {
      setLoading(false);
    }
  };

  // Create new review
  const createReview = async (reviewData) => {
    try {
      const response = await api.post('/api/reviews', reviewData);
      setReviews([response.data, ...reviews]);
      return { success: true, data: response.data };
    } catch (err) {
      console.error('Error creating review:', err);
      return { success: false, error: err.response?.data?.message || 'Failed to create review' };
    }
  };

  // Delete review
  const deleteReview = async (id) => {
    try {
      await api.delete(`/api/reviews/${id}`);
      setReviews(reviews.filter(review => review._id !== id));
      return { success: true };
    } catch (err) {
      console.error('Error deleting review:', err);
      return { success: false, error: 'Failed to delete review' };
    }
  };

  // Like review
  const likeReview = async (id) => {
    try {
      const response = await api.post(`/api/reviews/${id}/like`);
      setReviews(reviews.map(review => 
        review._id === id ? response.data : review
      ));
      return { success: true };
    } catch (err) {
      console.error('Error liking review:', err);
      return { success: false, error: 'Failed to like review' };
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const value = {
    reviews,
    loading,
    error,
    fetchReviews,
    createReview,
    deleteReview,
    likeReview,
  };

  return (
    <ReviewContext.Provider value={value}>
      {children}
    </ReviewContext.Provider>
  );
};
