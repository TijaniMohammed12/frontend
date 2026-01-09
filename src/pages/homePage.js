import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="hp-root">
      <div className="hp-bg" aria-hidden="true" />

      <main className="hp-main">
        <div className="hp-card" role="region" aria-label="Welcome to Pulse">
          <div className="brand">
            <div className="pulse-mark" aria-hidden="true" />
            <h1 className="logo">Pulse <span className="heart">💙</span></h1>
            <p className="tag">Connect • Match • Socialize • Explore</p>
          </div>

          <div className="hp-cta">
            <button
              className="btn btn-glass login"
              onClick={() => navigate("/login")}
              aria-label="Log in to Pulse"
            >
              Log In
            </button>

            <button
              className="btn btn-glass signup"
              onClick={() => navigate("/signup")}
              aria-label="Create a Pulse account"
            >
              Sign Up
            </button>
          </div>

          <div className="hp-features" aria-hidden="true">
            <div className="feat">
              <strong>Boost</strong>
              <span>Appear in Spotlight</span>
            </div>
            <div className="feat">
              <strong>Hubs</strong>
              <span>Join communities</span>
            </div>
            <div className="feat">
              <strong>Safe</strong>
              <span>Verified profiles</span>
            </div>
          </div>

          <footer className="hp-footer">Made with 💙 — Pulse</footer>
        </div>
      </main>
    </div>
  );
}
