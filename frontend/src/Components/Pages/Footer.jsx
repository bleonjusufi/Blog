import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@carblog.com</p>
          <p>Phone: +123 456 789</p>
        </div>

        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
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
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected on social media:</p>
          {/* Add social media icons or links as needed */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Car Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
