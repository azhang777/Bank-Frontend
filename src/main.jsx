import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId='852112352719-14m9sl97i39vs6kegjj0d9bc0chiu0kg.apps.googleusercontent.com'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
