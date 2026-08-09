const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default: "/uploads/default-avatar.png",
    },

    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default: "/uploads/default-avatar.png",
    },

    caption: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "General",
    },

    likes: {
      type: Number,
      default: 0,
    },

    comments: [commentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);