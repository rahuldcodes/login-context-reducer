import React from "react";
import { AuthProvider } from "./AuthContext";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    // Wrapping with AuthProvider so Navbar and ProfileCard can share the global state
    <AuthProvider>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <ProfileCard />
      </div>
    </AuthProvider>
  );
}

export default App;
