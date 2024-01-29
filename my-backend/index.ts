// index.ts

import express, { Request, Response } from 'express';
import cors from 'cors';

const fetch = require('node-fetch');

interface GooglePlacesResponse {
  candidates: Array<{
      geometry: {
          location: {
              lat: number;
              lng: number;
          };
      };
  }>;
  // ... other properties as needed
}

const app = express();
const port = 3001; // or use process.env.PORT for environment-specific port

app.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend's URL
}));

app.get('/search', async (req: Request, res: Response) => {
  const { q: query } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'Query is required' });
  }

  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query as string)}&inputtype=textquery&fields=geometry&key=AIzaSyAczS-206ks4-puqpunDs_TBUx2VoWDnVw`);
    const data = (await response.json()) as GooglePlacesResponse;

    if (data.candidates.length > 0) {
      const location = data.candidates[0].geometry.location;
      res.json({ q: query, latitude: location.lat, longitude: location.lng });
    } else {
      res.status(404).json({ message: 'No location found', q: query });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching places', q: query });
  }
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


