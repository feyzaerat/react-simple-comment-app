import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { Layout } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </>
  );
}

export default App;
