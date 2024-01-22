import "../../styles/Header.css";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../api/firebase";
import { signOut } from "firebase/auth";
import logo from "../../assets/tabetokyo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error", error);
    }
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed. User: ", user);
      setIsLoggedIn(
        !!user
      ); /* !!user is a shorthand to convert 'user' into a boolean. */
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="links">
        {isLoggedIn ? (
          // If the user is logged in, show the hamburger icon
          <button
            className={`toggleBtn ${showDropdown ? "active" : ""}`}
            onClick={handleToggleDropdown}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        ) : (
          // If the user is not logged in, show the login link
          <Link to="/Login">Login</Link>
        )}
        {showDropdown && (
          <div className="dropdownMenu">
            <Link to="/Profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
