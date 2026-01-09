import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  user: null,
  loading: false,
  loginUser: async () => {},
  logout: async () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("pulse_user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (err) {
        console.error("Error loading saved user", err);
      }
    }
  }, []);

  const loginUser = async (userData, token) => {
    setLoading(true);
    try {
      const dataToSave = { ...userData, token };

      setUser(dataToSave);
      localStorage.setItem("pulse_user", JSON.stringify(dataToSave));
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("pulse_user");
  };

  return (
    <UserContext.Provider value={{ user, loading, loginUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
