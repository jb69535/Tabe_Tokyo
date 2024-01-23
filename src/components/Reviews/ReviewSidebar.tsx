import React from 'react';
import { Restaurant } from './types';
import "../../styles/ReviewSidebar.css";

interface ReviewSidebarProps {
  restaurant: Restaurant;
}

const ReviewSidebar: React.FC<ReviewSidebarProps> = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      {restaurant.reviews.map(review => (
        <div key={review.id}>
          <p>{review.author}</p>
          <p>Rating: {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
      {/* Add form or functionality to add a review */}
    </div>
  );
};

export default ReviewSidebar;
