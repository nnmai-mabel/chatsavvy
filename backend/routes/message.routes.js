import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// /api/messages/send/:id trigger this
// Before running this, check if user is logged in or not
// protect this route before running the function
router.post("/send/:id", protectRoute, sendMessage);

export default router;