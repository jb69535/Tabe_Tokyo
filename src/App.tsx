import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import logo from './assets/logo.svg';
import './styles/App.css';
import Home from "./pages/Home";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>;
        <Route path="/Login" element={<Login />}/>
        <Route path="/Signup" element={<Signup />}/>
      </Routes>
    </Router>
  );
};

export default App;
