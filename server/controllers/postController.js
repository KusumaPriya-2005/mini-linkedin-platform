import Post from '../models/Post.js';
import User from '../models/User.js';

export const createPost = async (req, res) => {
  const { content } = req.body;
  const post = await Post.create({ author: req.userId, content });
  res.status(201).json(post);
};

export const getFeed = async (req, res) => {
  const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
  res.json(posts);
};

export const getProfile = async (req, res) => {
  const user = await User.findById(req.params.id);
  const posts = await Post.find({ author: req.params.id }).sort({ createdAt: -1 });
  res.json({ user, posts });
};
