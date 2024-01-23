import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { Restaurant } from "./types";
import "../../styles/MapReview.css";

// Define the type for your component's props
interface MapReviewProps {
  restaurants: Restaurant[]; // Ensure Restaurant is defined in your types file
}

const MapReview: React.FC<MapReviewProps> = ({ restaurants }) => {
  const mapStyles = { width: "60%", height: "40%" };
  const defaultCenter = { lat: 35.681236, lng: 139.767125 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAczS-206ks4-puqpunDs_TBUx2VoWDnVw">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={defaultCenter}
      >
        {restaurants.map((restaurant: Restaurant, index: number) => (
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
