// index.ts

import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3001; // or use process.env.PORT for environment-specific port

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to my backend!' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(cors({
    origin: 'http://localhost:3000' // Replace with your frontend's URL
  }));
