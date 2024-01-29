"use strict";
// index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fetch = require('node-fetch');
const app = (0, express_1.default)();
const port = 3001; // or use process.env.PORT for environment-specific port
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000' // Replace with your frontend's URL
}));
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my backend!' });
});
app.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { q: query } = req.query; // Extract query parameter 'q' from the URL
    if (!query) {
        return res.status(400).json({ message: 'Query is required' });
    }
    try {
        const response = yield fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query)}&inputtype=textquery&fields=geometry&key=AIzaSyAczS-206ks4-puqpunDs_TBUx2VoWDnVw`);
        const data = (yield response.json());
        if (data.candidates.length > 0) {
            const location = data.candidates[0].geometry.location;
            res.json({ latitude: location.lat, longitude: location.lng });
        }
        else {
            res.status(404).json({ message: 'No location found' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching places' });
    }
}));
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
