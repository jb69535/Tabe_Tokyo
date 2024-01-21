import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../api/firebase";
import { FirebaseError } from "firebase/app";
import "../../styles/Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Rest of your logic...
  };

  const isPasswordValid = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password); // Adjust regex as needed
    return hasUpperCase && hasNumber && hasSpecialChar;
  };

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setEmailMessage("");

    if (password !== passwordConfirm) {
      setError("Passwords do not match.");
      return;
    }
    if (!isPasswordValid(password)) {
      setError(
        "Password must include at least one uppercase letter, one number, and one special character."
      );
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        await sendEmailVerification(userCredential.user);
        navigate("/");
        // Optionally, set a message indicating successful signup
      }
    } catch (error) {
      if (
        error instanceof FirebaseError &&
        error.code === "auth/email-already-in-use"
      ) {
        setEmailMessage("Email already in use."); // Red font message
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="signupContainer">
      <form onSubmit={handleSignup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailInput}
        />
        <p
          style={{
            color: emailMessage.includes("available") ? "green" : "red",
          }}
        >
          {emailMessage}
        </p>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="passwordConfirm">Confirm Password:</label>
        <input
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <button type="submit">Sign Up</button>
        {error && <p className="error">{error}</p>}
      </form>
      <Link to="/Login">Already have an account? Log in</Link>
    </div>
  );
};

export default Signup;
