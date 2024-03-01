import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

// Create a router
const router = express.Router();

// Get signup, login, logout function
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;