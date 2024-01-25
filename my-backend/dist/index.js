// index.ts

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3001; // or use process.env.PORT for environment-specific port
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my backend!' });
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000' // Replace with your frontend's URL
}));
