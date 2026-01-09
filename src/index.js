import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Make sure this file exists
import App from "./App"; // Make sure App.js is in src/
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

// Create React root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main App component with context providers
root.render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);

// Optional: report performance metrics (can remove if not needed)
// import reportWebVitals from "./reportWebVitals";
// reportWebVitals();
