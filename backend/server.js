import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

// Create express server
const app = express();

dotenv.config();

// Extract fields in auth.controller.js
// Parse the incoming requests with JSON payloads (from req.body)
app.use(express.json());

// Parse the incoming cookies from req.cookies
// Calling this middleware enables passing the cookie
app.use(cookieParser());

// Route for authentication
app.use("/api/auth", authRoutes)

// Route for sending message
app.use("/api/messages", messageRoutes)

// Route for getting users
app.use("/api/users", userRoutes)

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