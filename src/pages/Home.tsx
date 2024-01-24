// Home.tsx

import React, { useState } from "react";
import MapReview from "../components/Reviews/MapReview";
import ReviewSidebar from "../components/Reviews/ReviewSidebar";
import {
  Location,
  Restaurant,
  defaultLocation,
} from "../components/Reviews/types";
import "../styles/Home.css";

const Home = () => {
  const initialRestaurants: Restaurant[] = [
    {
      name: "Restaurant 1",
      latitude: 35.681236,
      longitude: 139.767125,
      reviews: [
        // Array of review objects
        { id: "1", author: "Reviewer 1", rating: 4, comment: "Great place!" },
        // More reviews...
      ],
    },
    // More restaurants...
  ];

  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [restaurants /* setRestaurants */] =
    useState<Restaurant[]>(initialRestaurants);

  const handleAddLocation = (location: Location) => {
    setCurrentLocation(location);
    console.log("Location added: ", location);
  };

  return (
    <div className="HomeContainer">
      <div className="MapContainer">
        <MapReview
          restaurants={restaurants}
          currentLocation={currentLocation || defaultLocation}
        />
      </div>
      <div className="SidebarContainer">
        <ReviewSidebar
          restaurant={restaurants[0]}
          onAddLocation={handleAddLocation}
        />
      </div>
    </div>
  );
};

export default Home;
