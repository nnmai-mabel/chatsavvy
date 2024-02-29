import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";

// Create express server
const app = express();

dotenv.config();

// Create port number
const PORT = process.env.PORT || 5001;

// Test route
app.get("/", (req, res) => {
    // root route http://localhost:5001/
    res.send("Hello Mai");
})

// Route for authentication
app.use("/api/auth", authRoutes)

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));