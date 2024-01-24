// Home.tsx

import React from "react";
import MapReview from "../components/Reviews/MapReview";
import ReviewSidebar from "../components/Reviews/ReviewSidebar";
import { Location } from "../components/Reviews/types"
import "../styles/Home.css";

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

  const handleAddLocation = (location: Location) => {
    console.log("Location added: ", location);
  }

  return (
    <div className="HomeContainer">
      <div className="MapContainer">
        <MapReview restaurants={restaurants} />
      </div>
      <div className="SidebarContainer">
        <ReviewSidebar restaurant={restaurants[0]} onAddLocation={handleAddLocation} />
      </div>
    </div>
  );
};

export default Home;
