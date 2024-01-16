import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './assets/logo.svg';
import './styles/App.css';
import Login from "./components/Authentication/Login";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </Router>
  );
};

export default App;
