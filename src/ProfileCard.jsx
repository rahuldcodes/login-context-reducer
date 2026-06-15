import React from "react";
import { useAuth } from "./AuthContext";

function ProfileCard() {
  const { state, dispatch } = useAuth();

  // Function to simulate login with sample data
  const handleLogin = () => {
    const sampleUserData = { name: "Rahul Dubey", email: "rahul@example.com" };
    dispatch({ type: "LOGIN", payload: sampleUserData });
  };

  const cardStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    backgroundColor: "white",
    padding: "40px 30px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    textAlign: "center"
  };

  const loginBtn = { backgroundColor: "#3498db", color: "white", border: "none", padding: "12px 28px", fontSize: "16px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" };
  const logoutBtn = { backgroundColor: "#e74c3c", color: "white", border: "none", padding: "10px 24px", fontSize: "14px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", marginTop: "15px" };

  return (
    <div style={cardStyle}>
      {/* Conditional Rendering based on Global State */}
      {state.user ? (
        <div>
          <h2 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>Welcome Back! 👋</h2>
          {/* Requirement: Show User's Name once logged in */}
          <h1 style={{ color: "#3498db", margin: "0 0 5px 0" }}>{state.user.name}</h1>
          <p style={{ color: "#7f8c8d", margin: "0 0 20px 0" }}>{state.user.email}</p>
          
          {/* Requirement: Logout Button */}
          <button style={logoutBtn} onClick={() => dispatch({ type: "LOGOUT" })}>
            🚪 Logout
          </button>
        </div>
      ) : (
        <div>
          <h2 style={{ color: "#2c3e50", marginBottom: "10px" }}>Account Simulation</h2>
          <p style={{ color: "#7f8c8d", marginBottom: "30px" }}>Please login to view your profile dashboard.</p>
          
          {/* Requirement: Dispatch LOGIN on button click */}
          <button style={loginBtn} onClick={handleLogin}>
            🔑 Simulate Login
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
