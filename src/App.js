// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import MobileDrawer from "./components/MobileDrawer";

// Pages (you already have these files in src/pages/)
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FeedPage from "./pages/FeedPage";
import OTPPage from "./pages/OtpPage";
import ForgotPassword from "./pages/ForgotpasswordPage";
import Premium from "./pages/PremiumPage";
import Spotlight from "./pages/SpotlightPage";
import Chat from "./pages/ChatPage";
import Settings from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

function LayoutWrapper({ children }) {
  // hide navbar/drawer on auth routes
  const authPaths = ["/login", "/signup", "/otp", "/forgot-password"];
  const location = useLocation();
  const hideNav = authPaths.includes(location.pathname.toLowerCase());

  return (
    <>
      {!hideNav && <NavBar />}
      {!hideNav && <MobileDrawer />}
      <div style={{ paddingTop: hideNav ? 0 : 0 }}>{children}</div>
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/otp" element={<OTPPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/premium" element={<Premium />} />

      {/* Protected routes */}
      <Route
        path="/spotlight"
        element={
          <ProtectedRoute>
            <Spotlight />
          </ProtectedRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/feed"
        element={
          <ProtectedRoute>
            <FeedPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      {/* fallback route */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <Router>
          <LayoutWrapper>
            <AppRoutes />
          </LayoutWrapper>
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
}
