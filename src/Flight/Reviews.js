import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { name: 'John Doe', rating: 5, comment: 'Great experience, very smooth flight!' },
    { name: 'Jane Smith', rating: 4, comment: 'Good service, but the seats could be more comfortable.' },
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 1, comment: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', rating: 1, comment: '' });
  };

  return (
    <div className="reviews-section">
      <h2>Traveler Community and Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.name}</strong> rated it {review.rating}/5
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          name="name"
          value={newReview.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          required
        />
        <input
          type="number"
          name="rating"
          value={newReview.rating}
          onChange={handleInputChange}
          min="1"
          max="5"
          required
        />
        <textarea
          name="comment"
          value={newReview.comment}
          onChange={handleInputChange}
          placeholder="Your Review"
          required
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Reviews;
