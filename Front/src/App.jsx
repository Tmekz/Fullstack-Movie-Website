import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup, Profile } from "./pages";
import { Navbar } from "./components";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
