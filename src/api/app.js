import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Change when deploying

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// ✅ Set or remove Authorization token
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// ✅ Test backend connection
export const checkBackend = async () => {
  const res = await api.get("/");
  return res.data;
};

/* ======================
   🔐 AUTH ROUTES
====================== */

// Send OTP
export const sendOTP = async (emailOrPhone) => {
  const res = await api.post("/api/auth/send-otp", { emailOrPhone });
  return res.data;
};

// Verify OTP
export const verifyOTP = async (emailOrPhone, otp) => {
  const res = await api.post("/api/auth/verify-otp", { emailOrPhone, otp });
  return res.data;
};

// Signup
export const signupUser = async (userData) => {
  const res = await api.post("/api/auth/signup", userData);
  return res.data;
};

// Login
export const loginUser = async (credentials) => {
  const res = await api.post("/api/auth/login", credentials);
  return res.data;
};

// Forgot Password
export const forgotPassword = async (email) => {
  const res = await api.post("/api/auth/forgot-password", { email });
  return res.data;
};

// Reset Password
export const resetPassword = async (token, newPassword) => {
  const res = await api.post("/api/auth/reset-password", { token, newPassword });
  return res.data;
};

/* ======================
   👤 USER ROUTES
====================== */

// Get user profile
export const getUserProfile = async () => {
  const res = await api.get("/api/user/profile");
  return res.data;
};

// Update settings/profile
export const updateSettings = async (settings) => {
  const res = await api.patch("/api/user/settings", settings); // ✅ fixed endpoint path case
  return res.data;
};

/* ======================
   💎 PREMIUM ROUTES
====================== */

export const subscribePremium = async (plan) => {
  const res = await api.post("/api/premium/subscribe", { plan });
  return res.data;
};

/* ======================
   💬 CHAT ROUTES
====================== */

// Send message
export const sendMessage = async (receiverId, text, token) => {
  const res = await api.post(
    "/api/chat/send",
    { receiverId, text },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

// Get messages
export const getMessages = async (chatId, token) => {
  const res = await api.get(`/api/chat/${chatId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export default api;
