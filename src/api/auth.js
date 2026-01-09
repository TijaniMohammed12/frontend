// src/auth.js
import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // same as backend

// ✅ Register new user
export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/users/register`, userData);
    return res.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// ✅ Login user
export const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/users/login`, credentials);
    return res.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
