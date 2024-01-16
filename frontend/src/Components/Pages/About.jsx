import React from "react";
import "../CSS/About.css";
import teamMember1 from "../Images/Bleon.jpg";
import teamMember2 from "../Images/EK.jpg";
import teamMember3 from "../Images/BH.webp";
import Footer from "./Footer";
import Header from "./Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-us-container">
        <div className="about-us-content">
          <h2 className="about-us__title">About Our Car Blog</h2>
          <p className="about-p">
            Welcome to our car blog, where we share our passion for automobiles
            and everything related to them. Whether you're a car enthusiast or
            just curious about the latest trends in the automotive world, you're
            in the right place!
          </p>

          <h3 className="about-text">Our Mission</h3>
          <p className="about-p">
            At Car Blog, we strive to provide engaging and informative content
            that caters to both casual readers and dedicated car lovers. Our
            mission is to keep you updated with the latest news, reviews, and
            insights from the automotive industry.
          </p>

          <h3 className="about-text">The Team</h3>
          <div className="team-members">
            <div className="team-member">
              <img src={teamMember1} alt="Team Member 1" />
              <p className="about-p">Bleon Jusufi</p>
            </div>
            <div className="team-member">
              <img src={teamMember2} alt="Team Member 2" />
              <p className="about-p">Ernis Kasumi</p>
            </div>
            <div className="team-member">
              <img src={teamMember3} alt="Team Member 3" />
              <p className="about-p">Bleon Haziri</p>
            </div>
          </div>

          <h3 className="about-text">Contact Us</h3>
          <p className="about-p">
            Have questions, suggestions, or just want to say hello? Feel free to
            reach out to us through our contact page or connect with us on
            social media. We value your feedback and look forward to hearing
            from you!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
