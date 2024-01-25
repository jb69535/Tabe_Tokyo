// App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
        {/* Other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
