// src/pages/FeedPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FeedPage.css";

const FeedPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Sarah",
      image: "https://images.unsplash.com/photo-1502720705749-3c1bd8b43f59",
      caption: "Morning vibes 🌞 #PulseMood",
      likes: 24,
      liked: false,
      comments: [],
    },
    {
      id: 2,
      user: "Jake",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      caption: "Weekend energy 💙 #PulseLove",
      likes: 40,
      liked: true,
      comments: [],
    },
  ]);

  const [storyUsers] = useState([
    { id: 1, user: "Alex", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, user: "Maria", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, user: "John", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, user: "Lily", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  ]);

  const toggleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  const addComment = (id, text) => {
    if (!text) return;
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, text] }
          : post
      )
    );
  };

  const handleShare = (image) => {
    navigator.clipboard.writeText(image);
    alert("Image link copied to clipboard!");
  };

  const handleDownload = (image) => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "pulse-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newPost = {
          id: posts.length + 1,
          user: "You",
          image: event.target.result,
          caption: "New Upload",
          likes: 0,
          liked: false,
          comments: [],
        };
        setPosts([newPost, ...posts]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="feed-page">
      {/* Top Navbar */}
      <div className="top-navbar">
        <h2 className="nav-logo">Pulse 💙</h2>
        <div className="nav-right">
          {/* Upload button in top nav */}
          <button className="upload-btn" onClick={() => document.getElementById("uploadInput").click()}>
            ➕ Upload
          </button>
          <Link to="/profile" className="nav-btn">Profile</Link>
        </div>
      </div>

      {/* Stories */}
      <div className="stories-bar">
        {storyUsers.map((story) => (
          <div key={story.id} className="story-item">
            <img src={story.image} alt={story.user} className="story-avatar" />
            <span className="story-name">{story.user}</span>
          </div>
        ))}
      </div>

      {/* Feed Posts */}
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <span className="username">@{post.user}</span>
            </div>
            <img src={post.image} alt="post" className="post-image" />
            <div className="post-actions">
              <button className={`like-btn ${post.liked ? "liked" : ""}`} onClick={() => toggleLike(post.id)}>
                ❤️ {post.likes}
              </button>
              <button className="comment-btn" onClick={() => {
                const text = prompt("Enter comment:");
                addComment(post.id, text);
              }}>💬 Comment</button>
              <button className="share-btn" onClick={() => handleShare(post.image)}>🔗 Share</button>
              <button className="download-btn" onClick={() => handleDownload(post.image)}>⬇️ Download</button>
            </div>
            <p className="caption"><strong>@{post.user}</strong> {post.caption}</p>

            {/* Comments */}
            {post.comments.length > 0 && (
              <div className="comments-section">
                {post.comments.map((c, index) => (
                  <p key={index}><strong>user:</strong> {c}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav">
        <Link to="/feed">🏠 Home</Link>
        <Link to="/chat">💬 Chat</Link>
        <Link to="/settings">⚙️ Settings</Link>
        <Link to="/premium">💎 Premium</Link>
      </div>

      {/* Hidden Upload Input */}
      <input
        type="file"
        id="uploadInput"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  );
};

export default FeedPage;
