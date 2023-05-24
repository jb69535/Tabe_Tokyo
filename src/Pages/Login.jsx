
import React, { useState } from "react";
import "../Styles/Login.css"
export default function Login({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="sign-in-container">
      <form >
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
      <p>
      </p>
    </div>
  );
}

// need onSession checker
// need to make sure form connects to db later
