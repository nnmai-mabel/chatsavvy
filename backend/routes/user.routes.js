import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUsersForSidebar } from '../controllers/user.controller.js';

const router = express.Router();

// root route /api/users
router.get("/", protectRoute, getUsersForSidebar)

export default router