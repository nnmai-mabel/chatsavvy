import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

// Create express server
const app = express();

dotenv.config();

// Extract fields in auth.controller.js
// Parse the incoming requests with JSON payloads (from req.body)
app.use(express.json());

// Route for authentication
app.use("/api/auth", authRoutes)

// Create port number
const PORT = process.env.PORT || 5001;

// Test route
// app.get("/", (req, res) => {
//     // root route http://localhost:5001/
//     res.send("Hello Mai");
// })

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});