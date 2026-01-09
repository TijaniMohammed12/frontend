 import React from "react";
 import ProfileCard from "../components/ProfileCard";
 import "./ProfilePage.css";

 const ProfilePage = () => {
   const user = {
     name: "Tijani Mohammed",
     bio: "Lover of tech, music, and clean code 🚀",
     avatar: "https://i.pravatar.cc/150?img=5",
     posts: 12,
     followers: 305,
     following: 180,
   };

   return (
     <div className="profile-container">
       <ProfileCard user={user} />
       <div className="profile-stats">
         <p>Posts: {user.posts}</p>
         <p>Followers: {user.followers}</p>
         <p>Following: {user.following}</p>
       </div>
     </div>
   );
 };

 export default ProfilePage;
