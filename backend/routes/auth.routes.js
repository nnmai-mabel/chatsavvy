import express from "express";

// Create a router
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("Login Route");
});

export default router;