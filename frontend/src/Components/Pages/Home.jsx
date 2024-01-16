import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../CSS/Home.css";
import Maybach from "../Images/Maybach.webp";
import Tesla from "../Images/Tesla.webp";
import Ferrari from "../Images/ferrari.jpg";
import BMW from "../Images/BMW.jpg";
import Lambo from "../Images/Lambo.jpg";
import Porsche from "../Images/Porsche.jpg";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <div className="background-overlay">
          <div className="featured-content">
            <h2>Welcome to the Car Blog</h2>
            <p>
              Explore the latest articles, reviews, and updates about your
              favorite cars.
            </p>
          </div>
        </div>
      </section>
      <section className="home-grid">
        <div className="featured-content">
          <h2>Welcome to the Car Blog</h2>
          <p>
            Explore the latest articles, reviews, and updates about your
            favorite cars.
          </p>
          <div className="article-grid">
            <div className="article">
              <img src={Maybach} alt="Article 1" />
              <div className="article-info">
                <h3>Explore the new Maybach S680</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <Link to="/article/article1">Read more</Link>
              </div>
            </div>
            <div className="article">
              <img src={Tesla} alt="Article 2" />
              <div className="article-info">
                <h3>Tesla CyberTruck is finally here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <Link to="/article/article2">Read more</Link>
              </div>
            </div>
            <div className="article">
              <img src={Ferrari} alt="Article 3" />
              <div className="article-info">
                <h3>Ferrari SF90 The Italian Masterpiece</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <Link to="/article/article3">Read more</Link>
              </div>
            </div>
          </div>
          <div className="article-grid">
            <div className="article">
              <img src={BMW} alt="Article 4" />
              <div className="article-info">
                <h3>M4 CSL is the ultimate driving machine</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <Link to="/article/article4">Read more</Link>
              </div>
            </div>
            <div className="article">
              <img src={Lambo} alt="Article 5" />
              <div className="article-info">
                <h3>Veneno at Geneva auto showroom</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <Link to="/article/article5">Read more</Link>
              </div>
            </div>
            <div className="article">
              <img src={Porsche} alt="Article 6" />
              <div className="article-info">
                <h3>German Engineering at its best</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <Link to="/article/article6">Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="subscribe-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>
          Stay updated with the latest news and articles. Subscribe to our
          newsletter!
        </p>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Home;
