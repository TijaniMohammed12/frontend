import React from "react";
import "./VideoPlayerCard.css";

const VideoPlayerCard = ({ src, title }) => {
  return (
    <div className="video-card">
      <video controls className="video-player">
        <source src={src} type="video/mp4" />
        Your browser does not support video playback.
      </video>
      <p className="video-title">{title}</p>
    </div>
  );
};

export default VideoPlayerCard;
