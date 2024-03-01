import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

// Create a router
const router = express.Router();

// Get signup, login, logout function
router.get("/signup", signup);

router.get("/login", login);

router.get("/logout", logout);

export default router;