import { useState } from "react";
import axios from "axios";
import "./PostCard.css";

function CreatePost({ onPostCreated }) {

  const [post, setPost] = useState({
    username: "",
    caption: "",
    category: "General",
  });

  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("username", post.username);
      formData.append("caption", post.caption);
      formData.append("category", post.category);

      if (image) {
        formData.append("image", image);
      }

      const res = await axios.post(
        "http://localhost:5001/api/posts",
        formData
      );

      onPostCreated(res.data);

      setPost({
        username: "",
        caption: "",
        category: "General",
      });

      setImage(null);

    } catch (err) {

      console.log(err);

      alert("Unable to create post.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <form
      className="create-post"
      onSubmit={handleSubmit}
    >

      <div className="create-post-header">

        <img
          src="http://localhost:5001/uploads/default-avatar.png"
          alt="avatar"
          className="avatar"
        />

        <input
          type="text"
          name="username"
          placeholder="Your Name"
          value={post.username}
          onChange={handleChange}
          required
        />

      </div>

      <textarea
        name="caption"
        placeholder="🌱 Share your gardening experience..."
        value={post.caption}
        onChange={handleChange}
        required
      />

      <select
        name="category"
        value={post.category}
        onChange={handleChange}
      >
        <option>General</option>
        <option>Balcony Gardening</option>
        <option>Terrace Gardening</option>
        <option>Kitchen Gardening</option>
        <option>Rooftop Gardening</option>
        <option>Flowers</option>
        <option>Vegetables</option>
        <option>Compost</option>
      </select>

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      <button
        className="primary-btn"
        disabled={loading}
      >
        {loading ? "Posting..." : "Post"}
      </button>

    </form>

  );

}

export default CreatePost;