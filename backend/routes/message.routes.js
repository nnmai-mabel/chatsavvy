import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// /api/messages/send/:id trigger this
// Get messages between 2 current users
router.get("/:id", protectRoute, getMessages);

// Before running this, check if user is logged in or not
// protect this route before running the function
router.post("/send/:id", protectRoute, sendMessage);

export default router;