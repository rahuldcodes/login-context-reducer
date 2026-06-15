import React from "react";
import { useAuth } from "./AuthContext";

function Navbar() {
  const { state } = useAuth();

  const navStyle = {
    display: "flex",
    justifyContent: "between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#2c3e50",
    color: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  };

  return (
    <div style={navStyle}>
      <h3 style={{ margin: 0 }}>🔐 AuthPortal</h3>
      <div>
        {state.user ? (
          <span style={{ backgroundColor: "#2ecc71", padding: "5px 12px", borderRadius: "15px", fontSize: "14px" }}>
            🟢 Logged In
          </span>
        ) : (
          <span style={{ backgroundColor: "#e74c3c", padding: "5px 12px", borderRadius: "15px", fontSize: "14px" }}>
            🔴 Guest Mode
          </span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
