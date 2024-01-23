import React from 'react';
import MapReview from '../components/Reviews/MapReview';
import '../styles/Home.css';

const Home = () => {
  // Sample data for restaurants
  const restaurants = [
    { name: "Restaurant 1", latitude: 40.712776, longitude: -74.005974 },
    // ... more restaurant data
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
