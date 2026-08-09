console.log("✅ postController loaded");
const Post = require("../models/Post");

// Create Post
const createPost = async (req, res) => {
  try {

    const {
      username,
      caption,
      category,
    } = req.body;

    const image = req.file
      ? `/uploads/${req.file.filename}`
      : "";

    const avatar = "/uploads/default-avatar.png";

    const post = await Post.create({
      username,
      avatar,
      caption,
      category,
      image,
    });

    res.status(201).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// Get All Posts
const getPosts = async (req, res) => {

  try {

    const posts = await Post.find()
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// Like Post
const likePost = async (req, res) => {

  try {

    const post = await Post.findById(req.params.id);

    if (!post) {

      return res.status(404).json({
        message: "Post not found",
      });

    }

    post.likes += 1;

    await post.save();

    res.json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// Add Comment
const addComment = async (req, res) => {

  try {

    const post = await Post.findById(req.params.id);

    if (!post) {

      return res.status(404).json({
        message: "Post not found",
      });

    }

    post.comments.push({
      username: req.body.username,
      avatar: "/uploads/default-avatar.png",
      text: req.body.text,
    });

    await post.save();

    res.json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// Delete Post
const deletePost = async (req, res) => {

  try {

    await Post.findByIdAndDelete(req.params.id);

    res.json({
      message: "Post deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


module.exports = {
  createPost,
  getPosts,
  likePost,
  addComment,
  deletePost,
};