import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import "./AppNavigator.css"; // Import your CSS here

const AppNavigator = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-logo">Pulse 💙</div>
          <div className="nav-right">
            <Link to="/" className="nav-btn">Home</Link>
            <Link to="/profile" className="nav-btn">Profile</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AppNavigator;
