import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      {/* Logo */}
      <Link to="/" className="nav-logo">
        Pulse 💙
      </Link>

      {/* Profile Link */}
      <div className="nav-right">
        <Link to="/profile" className="nav-btn profile-btn">
          Profile
        </Link>
      </div>
    </nav>
  );
}
