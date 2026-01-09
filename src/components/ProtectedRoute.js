// src/components/ProtectedRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(UserContext);

  // while auth status is loading, you may return null or a loader
  if (loading) return null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
