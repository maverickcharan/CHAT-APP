import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";

// Load environment variables
dotenv.config();

// Create express app
const app = express();

// Create HTTP server
const server = http.createServer(app);

// Middleware
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// Test Route
app.use("/api/status", (req, res) => {
  res.send("Server is live");
});

// Port
const PORT = process.env.PORT || 5001;

// Start Server
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});