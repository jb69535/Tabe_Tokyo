import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Restaurant } from "./types";
import "../../styles/MapReview.css";

// Define the type for your component's props
interface MapReviewProps {
  google: any; // Google Maps API
  restaurants: Restaurant[];
}

const MapReview: React.FC<MapReviewProps> = ({ google, restaurants }) => {
  const displayMarkers = () => {
    return restaurants.map((restaurant, index) => (
      <Marker
        key={index}
        name={restaurant.name}
        position={{ lat: restaurant.latitude, lng: restaurant.longitude }}
      />
    ));
  };

  return (
    <Map
      google={google}
      zoom={14}
      style={{ width: "60%", height: "40%" }}
      initialCenter={{ lat: 35.681236, lng: 139.767125 }}
    >
      {displayMarkers()}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAczS-206ks4-puqpunDs_TBUx2VoWDnVw",
})(MapReview);
