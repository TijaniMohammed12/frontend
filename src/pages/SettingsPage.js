import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./SettingsPage.css"; // We'll add styling here

export default function Settings() {
  const { user, logout } = useContext(UserContext);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);

  const handleUpdateProfile = () => {
    alert("Profile updated (demo)");
    // Call backend API here to update user info
  };

  const handleChangePassword = () => {
    alert("Password changed (demo)");
    // Call backend API here
  };

  const handleDeleteAccount = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete your account? This action is irreversible."
    );
    if (confirm) {
      alert("Account deleted (demo)");
      logout();
      // Call backend API to delete user
    }
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <section className="settings-section">
        <h3>Profile</h3>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleUpdateProfile}>Update Profile</button>
      </section>

      <section className="settings-section">
        <h3>Password</h3>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleChangePassword}>Change Password</button>
      </section>

      <section className="settings-section">
        <h3>Privacy & Notifications</h3>
        <label className="toggle-label">
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          <span className="slider" />
        </label>

        <label className="toggle-label">
          <span>Private Account</span>
          <input
            type="checkbox"
            checked={privateAccount}
            onChange={() => setPrivateAccount(!privateAccount)}
          />
          <span className="slider" />
        </label>
      </section>

      <section className="settings-section">
        <h3>Danger Zone</h3>
        <button onClick={handleDeleteAccount} className="delete-btn">
          Delete Account
        </button>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </section>
    </div>
  );
}
