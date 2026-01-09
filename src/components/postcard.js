import React from "react";
import "./PostCard.css";

const PostCard = ({ post }) => {
  // Default fallback if post is undefined or missing fields
  if (!post) {
    return (
      <div className="post-card loading">
        <p>Loading post...</p>
      </div>
    );
  }

  const {
    userAvatar = "/default-avatar.png",
    username = "Anonymous",
    time = "Just now",
    content = "",
    postImage = "/default-post.jpg",
  } = post || {};

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={userAvatar} alt="User Avatar" className="post-avatar" />
        <div>
          <h4 className="post-username">{username}</h4>
          <p className="post-time">{time}</p>
        </div>
      </div>

      <p className="post-content">{content}</p>

      {postImage && (
        <div className="post-image-container">
          <img src={postImage} alt="Post" className="post-image" />
        </div>
      )}

      <div className="post-actions">
        <button className="like-btn">❤️ Like</button>
        <button className="comment-btn">💬 Comment</button>
        <button className="share-btn">🔗 Share</button>
      </div>
    </div>
  );
};

export default PostCard;
