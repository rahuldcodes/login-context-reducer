import React, { useState } from "react";
import { useAuth } from "./AuthContext";

function ProfileCard() {
  const { state, dispatch } = useAuth();
  
  // Real Form States for User Input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handling Form Submission with Real Data
  const handleFormLogin = (e) => {
    e.preventDefault(); // Dynamic submission handle karne ke liye

    // Basic Validation check
    if (!name.trim() || !email.trim() || !password.trim()) {
      setErrorMsg("Bhai, saare fields bharna zaroori hai! ⚠️");
      return;
    }
    if (password.length < 6) {
      setErrorMsg("Password kam se kam 6 characters ka hona chahiye! 🔐");
      return;
    }

    setErrorMsg(""); // Clear errors
    
    // Dispatching real user input data to our global Context Store
    dispatch({ 
      type: "LOGIN", 
      payload: { name: name, email: email } 
    });

    // Resetting form fields
    setName("");
    setEmail("");
    setPassword("");
  };

  const cardStyle = {
    maxWidth: "420px",
    margin: "40px auto",
    backgroundColor: "white",
    padding: "35px 30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    textAlign: "center"
  };

  const formStyle = { display: "flex", flexDirection: "column", gap: "15px", textAlign: "left" };
  const inputStyle = { padding: "12px", fontSize: "15px", borderRadius: "8px", border: "1px solid #ccc", outline: "none" };
  const labelStyle = { fontSize: "14px", fontWeight: "600", color: "#34495e" };
  
  const loginBtn = { backgroundColor: "#3498db", color: "white", border: "none", padding: "14px", fontSize: "16px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", marginTop: "10px" };
  const logoutBtn = { backgroundColor: "#e74c3c", color: "white", border: "none", padding: "12px 28px", fontSize: "14px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", marginTop: "20px" };

  return (
    <div style={cardStyle}>
      {state.user ? (
        <div>
          <h2 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>Welcome Back, Captain! 👋</h2>
          {/* Displaying your custom dynamic input name and email */}
          <h1 style={{ color: "#3498db", margin: "0 0 5px 0", fontSize: "28px" }}>{state.user.name}</h1>
          <p style={{ color: "#7f8c8d", margin: "0 0 20px 0", fontSize: "16px" }}>📧 {state.user.email}</p>
          
          <button style={logoutBtn} onClick={() => dispatch({ type: "LOGOUT" })}>
            🚪 Secure Logout
          </button>
        </div>
      ) : (
        <div>
          <h2 style={{ color: "#2c3e50", marginBottom: "5px" }}>Secure User Login</h2>
          <p style={{ color: "#7f8c8d", fontSize: "14px", marginBottom: "25px" }}>Enter your credentials to test global state dispatch.</p>
          
          {errorMsg && <p style={{ color: "#e74c3c", fontSize: "14px", fontWeight: "bold", marginBottom: "15px" }}>{errorMsg}</p>}

          {/* Real Input Form Formats */}
          <form onSubmit={handleFormLogin} style={formStyle}>
            <label style={labelStyle}>Your Name</label>
            <input 
              type="text" 
              placeholder="e.g. Rahul Dubey" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />

            <label style={labelStyle}>Email Address</label>
            <input 
              type="email" 
              placeholder="rahul@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />

            <label style={labelStyle}>Create Password</label>
            <input 
              type="password" 
              placeholder="Min 6 characters" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />

            <button type="submit" style={loginBtn}>🔐 Login to Dashboard</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
