import React from "react";
import "../CSS/Header.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      {/* <div className="logo">
        <img src={logo} alt="Car Blog Logo" />
      </div> */}

      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <div className="search-bar">
        <Link to="/signup">Join Us</Link>
      </div>
    </header>
  );
};

export default Header;
