// ReviewSidebar.tsx

import React, { useState, useEffect, useRef } from "react";
import { Restaurant, defaultLocation } from "./types";
import "../../styles/ReviewSidebar.css";

interface ReviewSidebarProps {
  restaurant: Restaurant;
  onAddLocation: (location: { latitude: number; longitude: number }) => void;
  onSearch?: (query: string) => void;
}

const ReviewSidebar: React.FC<ReviewSidebarProps> = ({
  restaurant,
  onAddLocation,
  onSearch,
}) => {
  const [addingReview, setAddingReview] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null); // Specify HTMLInputElement as the type

  useEffect(() => {
    if (!window.google || !searchInputRef.current) return;

    const defaultBounds = new window.google.maps.LatLngBounds(
      new window.google.maps.LatLng(
        defaultLocation.latitude - 0.05, // adjust these values to set the desired bounds
        defaultLocation.longitude - 0.05
      ),
      new window.google.maps.LatLng(
        defaultLocation.latitude + 0.05,
        defaultLocation.longitude + 0.05
      )
    );

    const options = {
      bounds: defaultBounds,
      strictBounds: true, // Optional: set to true to strictly bias within these bounds
    };

    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInputRef.current,
      options
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
      const location = {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      };
      onAddLocation(location);
    });
  });

  const handleAddClick = () => {
    setAddingReview(true);
  };

  const handleAddLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onAddLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

  return (
    <div>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search for a Restaurant."
      />

      <h2>{restaurant.name}</h2>
      {restaurant.reviews.map((review) => (
        <div key={review.id}>
          <p>{review.author}</p>
          <p>Rating: {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
      {!addingReview && <button onClick={handleAddClick}>Add Review</button>}
      {addingReview && (
        <button onClick={handleAddLocation}>Add by Current Location</button>
      )}
    </div>
  );
};

export default ReviewSidebar;
