import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt="avatar" className="profile-avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default ProfileCard;
