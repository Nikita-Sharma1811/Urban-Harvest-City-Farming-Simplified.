const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
  createPost,
  getPosts,
  likePost,
  deletePost,
} = require("../controllers/postController");


// CREATE POST
router.post(
  "/",
  upload.single("image"),
  createPost
);


// GET ALL POSTS
router.get(
  "/",
  getPosts
);


// LIKE POST
router.put(
  "/:id/like",
  likePost
);


// DELETE POST
router.delete(
  "/:id",
  deletePost
);


module.exports = router;