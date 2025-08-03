import express from 'express';
import { createPost, getFeed, getProfile } from '../controllers/postController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/feed', getFeed);
router.post('/create', protect, createPost);
router.get('/profile/:id', getProfile);

export default router;
