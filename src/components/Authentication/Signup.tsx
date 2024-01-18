import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/firebase";
import { sendEmailVerification } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import "../../styles/Signup.css";

const Signup = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            if (userCredential.user) {
                await sendEmailVerification(userCredential.user);
                navigate("/");
            }
        } catch (error) {
            if (error instanceof FirebaseError) {
              if (error.code === 'auth/email-already-in-use') {
                setError('Email already in use. Please sign in or use a different email.');
              } else {
                setError(error.message);
              }
            } else if (error instanceof Error) {
              setError(error.message);
            } else {
              setError('An unexpected error occurred.');
            }
          }
    };

    return (
    <div className="login_Container">
      <form onSubmit={handleSignup}>
        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input 
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign up</button>

        {error && <p>{error}</p>}
      </form>
      <p>
        Already Logged in?
        <Link to="/Login">Log in</Link> 
      </p>
    </div>
    );
};

export default Signup;