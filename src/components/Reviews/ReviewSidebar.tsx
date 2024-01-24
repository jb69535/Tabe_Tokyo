// ReviewSidebar.tsx

import React, { useState } from 'react';
import { Restaurant, Review } from './types';
import "../../styles/ReviewSidebar.css";

interface ReviewSidebarProps {
  restaurant: Restaurant;
  onAddLocation: (location: {latitude:number, longitude: number}) => void;
}

const ReviewSidebar: React.FC<ReviewSidebarProps> = ({ restaurant, onAddLocation }) => {

  const [error, setError] = useState("");
  const [addingReview, setAddingReview] = useState(false);
  const handleAddClick = () => {
    setAddingReview(true);
  };
  const handleAddLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        onAddLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert("Location permission was denied");
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          alert("Location data is not available");
        }
      });
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

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
      {
        !addingReview && (
          <button onClick={handleAddClick}>Add</button>
        )
      }
      {
        addingReview && (
          <button onClick={handleAddLocation}>Add by Current Location</button>
        )
      }
    </div>
  );
};

export default ReviewSidebar;
