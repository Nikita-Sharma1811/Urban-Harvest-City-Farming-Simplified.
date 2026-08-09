console.log("🔥 THIS SERVER IS RUNNING");
const postRoutes = require("./routes/postRoutes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Database Connection
const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const communityRoutes = require("./routes/communityRoutes");
const growSmartRoutes = require("./routes/growSmartRoutes");

// Load Environment Variables
dotenv.config();

// Connect Database
connectDB();

// Create Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/growsmart", growSmartRoutes);
app.use("/api/posts", postRoutes);
console.log(postRoutes);


// Test Route
app.get("/", (req, res) => {
    res.send("Urban Harvest Backend is Running 🚀");
});
app.get("/hello", (req, res) => {
  res.send("Hello");
});

// Server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});