// MapReview.tsx

import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Restaurant, defaultLocation } from "./types";
import "../../styles/MapReview.css";

interface MapReviewProps {
  restaurants: Restaurant[];
  currentLocation: { latitude: number; longitude: number } | null;
}

const MapReview: React.FC<MapReviewProps> = ({ restaurants, currentLocation }) => {
  const mapStyles = { width: "100%", height: "100%" };
  
  // Validate currentLocation before rendering
  if (currentLocation && (typeof currentLocation.latitude !== 'number' || typeof currentLocation.longitude !== 'number')) {
    console.error("Invalid current location data:", currentLocation);
    return <div>Invalid location data</div>;
  }

  const center = currentLocation
    ? { lat: currentLocation.latitude, lng: currentLocation.longitude }
    : { lat: defaultLocation.latitude, lng: defaultLocation.longitude };

  return (
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={center}
      >
        {/* If currentLocation is set, display a marker there */}
        {currentLocation && (
          <Marker
            position={{
              lat: currentLocation.latitude,
              lng: currentLocation.longitude,
            }}
          />
        )}
        {/* Other markers for restaurants */}
        {restaurants.map((restaurant, index) => (
          <Marker
            key={index}
            position={{ lat: restaurant.latitude, lng: restaurant.longitude }}
          />
        ))}
      </GoogleMap>
  );
};

export default MapReview;
