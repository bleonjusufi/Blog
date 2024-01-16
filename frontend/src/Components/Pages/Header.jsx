import React from "react";
import "../CSS/Header.css";
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/reviews">Reviews</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>

      <div className="search-bar">
        <button type="button">
          <a href="/signup">Join Us</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
