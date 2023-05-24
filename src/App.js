import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "../src/Components/Card/Card";
import Header from "./Components/Header/Header";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import LeftSidebar from "./Components/Sidebar/LeftSidebar";
import Footer from "./Components/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/Pages/Login" element={<Login />} />
          <Route path="/Pages/Signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <>
                <LeftSidebar />
                <Card />
              </>
            }
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}
