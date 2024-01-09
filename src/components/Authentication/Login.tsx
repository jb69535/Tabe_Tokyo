import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Navigate to home on success
    } catch (error: unknown) {
      // Specify 'error' as type 'unknown'
      // Use a type guard to check if 'error' is an instance of 'Error'
      if (error instanceof Error) {
        setError(error.message); // Now it's safe to access 'error.message'
      } else {
        // If it's not an 'Error' instance, handle it accordingly
        setError("An error occurred");
      }
    }
  };
};
