import React, { useState } from "react";
import "../CSS/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling login submission here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="form-container">
        <h2>Login</h2>
        <p>
          Welcome back! Please enter your email and password to access your
          account.
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="/signup" className="signup-link">
            Create an account
          </a>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
