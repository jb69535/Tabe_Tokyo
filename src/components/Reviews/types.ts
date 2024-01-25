// types.ts

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
}

export interface Restaurant {
  name: string;
  latitude: number;
  longitude: number;
  reviews: Review[]; // Include this if restaurants have reviews
}

export interface Location {
  latitude: number;
  longitude: number;
}

export const defaultLocation: Location = {
  latitude: 35.681236,
  longitude: 139.767125,
};

// Add this for handling the response from Google Places API
export interface GooglePlacesResponse {
  candidates: Array<{
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }>;
  // ... other expected properties
}
