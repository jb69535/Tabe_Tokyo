// MapReview.tsx

import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { Restaurant, defaultLocation } from "./types";
import "../../styles/MapReview.css";

interface MapReviewProps {
  restaurants: Restaurant[];
  currentLocation: { latitude: number, longitude: number } | null;
}

const MapReview: React.FC<MapReviewProps> = ({ restaurants, currentLocation }) => {
  const mapStyles = { width: "100%", height: "100%" };
  const defaultCenter = { lat: defaultLocation.latitude, lng: defaultLocation.longitude };

  // Determine the center of the map based on currentLocation
  const center = currentLocation ? { lat: currentLocation.latitude, lng: currentLocation.longitude } : defaultCenter;

  return (
    <LoadScript googleMapsApiKey="AIzaSyAczS-206ks4-puqpunDs_TBUx2VoWDnVw">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={center} // Set the center to the current location or the default center
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
    </LoadScript>
  );
};

export default MapReview;

