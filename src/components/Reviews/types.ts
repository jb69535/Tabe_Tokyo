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
  