import React from 'react';
import MapReview from '../components/Reviews/MapReview';
import '../styles/Home.css';

const Home = () => {
  // Sample data for restaurants
  const restaurants = [
    {
      name: "Restaurant 1",
      latitude: 40.712776,
      longitude: -74.005974,
      reviews: [
        // Array of review objects
        { id: "1", author: "Reviewer 1", rating: 4, comment: "Great place!" },
        // More reviews...
      ],
    },
    // More restaurants...
  ];

  return (
    <div className="HomeContainer">
      <div className="MapContainer">
        <MapReview restaurants={restaurants} />
      </div>
      {/* Add other components as needed */}
    </div>
  );
};

export default Home;
