// src/components/BottomNav.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/feed", icon: "🏠" },
    { name: "Chat", path: "/chat", icon: "💬" },
    { name: "Spotlight", path: "/spotlight", icon: "✨" },
    { name: "Premium", path: "/premium", icon: "💎" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`bottom-nav-btn ${
            location.pathname === item.path ? "active" : ""
          }`}
          onClick={() => navigate(item.path)}
        >
          <span className="icon">{item.icon}</span>
          <span className="label">{item.name}</span>
        </button>
      ))}
    </div>
  );
}
