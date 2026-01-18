const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware (Allow frontend to talk to backend)
app.use(cors());
app.use(express.json());

// 1. Root Route (Health Check)
app.get('/', (req, res) => {
    res.send("Backend is running! 🚀");
});

// 2. The API Route (Competition Requirement)
app.get('/api/palettes', (req, res) => {
    // We serve some "Staff Picks" hardcoded here
    const staffPicks = [
        { id: 1, title: "Ocean Vibes", colors: ["0047AB", "007FFF", "66B2FF", "E6F2FF"] },
        { id: 2, title: "Sunset Glow", colors: ["FF5733", "FF8D1A", "FFC300", "DAF7A6"] },
        { id: 3, title: "Forest Mist", colors: ["1B4D3E", "2E8B57", "3CB371", "8FBC8F"] },
        { id: 4, title: "Berry Smoothie", colors: ["5C0029", "83003B", "AF1B3F", "E07A5F"] },
        { id: 5, title: "Cyber Neon", colors: ["0F0F0F", "00FF41", "D000FF", "00FFFF"] },
        { id: 6, title: "Coffee House", colors: ["3C2F2F", "4B3832", "854442", "BE9B7B"] },
        { id: 7, title: "Pastel Dream", colors: ["FFB7B2", "FFDAC1", "E2F0CB", "B5EAD7"] },
        { id: 8, title: "Midnight City", colors: ["141E30", "243B55", "5C258D", "4389A2"] },
        { id: 9, title: "Desert Sand", colors: ["EDC9AF", "DAB49D", "C19A6B", "967969"] },
        { id: 10, title: "Royal Gold", colors: ["1A1A1D", "4E4E50", "6F2232", "950740"] },
        { id: 11, title: "Retro Tape", colors: ["F4C430", "E27D60", "C38D9E", "41B3A3"] },
        { id: 12, title: "Arctic Chill", colors: ["E0F7FA", "B2EBF2", "81D4FA", "4FC3F7"] },
        { id: 13, title: "Lavender Haze", colors: ["F3E5F5", "E1BEE7", "CE93D8", "BA68C8"] },
        { id: 14, title: "Mint Choco", colors: ["3E2723", "5D4037", "A5D6A7", "C8E6C9"] },
        { id: 15, title: "Sakura Bloom", colors: ["FFC0CB", "FFB7B2", "FF9AA2", "FF6F61"] },
        { id: 16, title: "Urban Slate", colors: ["2C3E50", "34495E", "7F8C8D", "BDC3C7"] },
        { id: 17, title: "Volcanic Ash", colors: ["212121", "B71C1C", "FF5722", "FFCCBC"] },
        { id: 18, title: "Citrus Burst", colors: ["FFEB3B", "CDDC39", "8BC34A", "4CAF50"] },
        { id: 19, title: "Grapevine", colors: ["4A148C", "7B1FA2", "9CCC65", "AED581"] },
        { id: 20, title: "Deep Space", colors: ["000000", "0D47A1", "1565C0", "1976D2"] }
    ];
    res.json(staffPicks);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});