import React, { createContext, useContext, useReducer } from "react";

// 1. Create the Context (Global Storage)
const AuthContext = createContext();

// 2. Requirement: Initial State where user is null
const initialState = { user: null };

// 3. Reducer Function to handle state changes based on Action types
function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }; // Payload mein user ka data aayega
    case "LOGOUT":
      return { ...state, user: null }; // Clear user data
    default:
      return state;
  }
}

// 4. Provider Component that wraps our app and shares state
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to make consuming context super simple
export const useAuth = () => useContext(AuthContext);
