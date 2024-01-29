// Home.tsx

import React, { useState } from "react";
import MapReview from "../components/Reviews/MapReview";
import ReviewSidebar from "../components/Reviews/ReviewSidebar";
import {
  Location,
  Restaurant,
  defaultLocation
} from "../components/Reviews/types";
import "../styles/Home.css";

const Home = () => {
  /* Sample Restaurant */
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

  const searchPlaces = async (query: string) => {
    try {
      const response = await fetch(`http://localhost:3001/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching places:", error);
      return null;
    }
  };

  const handleSearch = async (query: string) => {
    const location = await searchPlaces(query);
    if (location && typeof location.latitude === 'number' && typeof location.longitude === 'number') {
      console.log("Valid location found:", location);
      setCurrentLocation(location);
    } else {
      console.log("No valid location found for the given query. Received data:", location);
    }
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
          onSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default Home;
