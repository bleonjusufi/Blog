import React, { useState } from "react";
import "../CSS/Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="join-us-container">
      <div className="background-image"></div>
      <div className="form-container">
        <h2>Join Us</h2>
        <p>
          Ready to become a part of our car-loving community? Fill out the form
          below and join the journey!
        </p>

        <form onSubmit={handleSubmit} className="join-us-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <a href="/login" className="login-link">
            Already a member! Login here
          </a>
          <button type="submit">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
