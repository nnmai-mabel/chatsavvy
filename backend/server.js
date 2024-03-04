import path from 'path'
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import {app, server} from './socket/socket.js'

// Create express server
// const app = express();

const PORT = process.env.PORT || 5001

const __dirname = path.resolve()

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

// Middle layer from express
app.use(express.static(path.join(__dirname, "/frontend/dist")))

// All other routes run into index.html under dist inside frontend
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

// Create port number
// const PORT = process.env.PORT || 5001;

// Test route
// app.get("/", (req, res) => {
//     // root route http://localhost:5001/
//     res.send("Hello Mai");
// })

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});