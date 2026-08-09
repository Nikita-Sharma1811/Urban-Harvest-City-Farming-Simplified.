import axios from "axios";
import "./PostCard.css";

function PostCard({ post, refreshPosts }) {

  const handleLike = async () => {
    try {

      await axios.put(
        `http://localhost:5001/api/posts/${post._id}/like`
      );

      refreshPosts();

    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {

    if (!window.confirm("Delete this post?")) return;

    try {

      await axios.delete(
        `http://localhost:5001/api/posts/${post._id}`
      );

      refreshPosts();

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="post-card">

      <div className="post-header">

        <img
          src={`http://localhost:5001${post.avatar}`}
          alt="avatar"
          className="avatar"
        />

        <div>

          <h3>{post.username}</h3>

          <small>
            {new Date(post.createdAt).toLocaleString()}
          </small>

        </div>

      </div>

      <p className="caption">
        {post.caption}
      </p>

      <span className="category">
        🌿 {post.category}
      </span>

      {post.image && (

        <img
          src={`http://localhost:5001${post.image}`}
          alt="post"
          className="post-image"
        />

      )}

      <div className="post-actions">

        <button onClick={handleLike}>
          ❤️ {post.likes}
        </button>

        <button>
          💬 {post.comments.length}
        </button>

        <button onClick={handleDelete}>
          🗑 Delete
        </button>

      </div>

    </div>

  );

}

export default PostCard;