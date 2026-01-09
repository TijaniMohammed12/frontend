// src/pages/ForgotpasswordPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotpasswordPage.css"; // keep exact filename/casing
import api from "../api/app"; // optional - if you implement backend call

export default function ForgotPasswordPage() {
  const [identifier, setIdentifier] = useState("");
  const [status, setStatus] = useState(""); // "", "loading", "sent", "error"
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!identifier.trim()) {
      alert("Please enter your email or phone number");
      return;
    }

    setStatus("loading");
    try {
      // If you have a backend endpoint, use it. Example:
      // await api.post("/auth/forgot-password", { identifier });

      // Demo behaviour:
      setStatus("sent");
      setTimeout(() => {
        navigate("/Otp"); // go to OTP page; match your routes
      }, 900);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2 className="forgot-title">Reset Your Password</h2>
        <p className="forgot-sub">Enter your email or phone and we'll send instructions to reset it.</p>

        <form className="forgot-form" onSubmit={handleSubmit}>
          <input
            className="forgot-input"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Email or phone"
            required
          />
          <button className="forgot-btn" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send reset link"}
          </button>
        </form>

        {status === "sent" && <p className="success">Reset sent — check your email/SMS.</p>}
        {status === "error" && <p className="error">Failed to send. Try again later.</p>}
      </div>
    </div>
  );
}
