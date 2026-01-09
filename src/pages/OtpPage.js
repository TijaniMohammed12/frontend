import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OtpPage.css"; // CSS file below

export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [resendEnabled, setResendEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else {
      setResendEnabled(true);
    }
  }, [timer]);

  const verifyOTP = async () => {
    if (otp.length !== 4) {
      alert("Enter a valid 4-digit OTP");
      return;
    }

    try {
      // Replace with actual MongoDB backend verification
      const isValid = otp === "1234"; // Temporary mock
      if (isValid) {
        navigate("/home");
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      alert("Verification failed. Try again.");
    }
  };

  const resendOTP = () => {
    // Replace with actual backend resend logic
    alert("OTP resent!");
    setTimer(60);
    setResendEnabled(false);
  };

  return (
    <div className="otp-container">
      <h2 className="otp-title">📲 Verify OTP</h2>
      <p className="otp-subtitle">Enter the 4-digit code sent to your phone</p>

      <input
        type="text"
        className="otp-input"
        placeholder="Enter OTP"
        maxLength="4"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button className="otp-btn" onClick={verifyOTP}>
        Verify
      </button>

      <div className="otp-footer">
        {resendEnabled ? (
          <button className="resend-btn" onClick={resendOTP}>
            Resend OTP
          </button>
        ) : (
          <p className="timer-text">Resend available in {timer}s</p>
        )}
      </div>
    </div>
  );
}
