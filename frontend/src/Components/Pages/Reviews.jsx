import React from "react";
import "../CSS/Reviews.css";
import Header from "./Header";
import Footer from "./Footer";
import man1 from "../Images/man1.avif";
import man2 from "../Images/man2.jpg";
import man3 from "../Images/man3.jpg";
import woman1 from "../Images/woman1.jpg";
import woman2 from "../Images/woman2.avif";
import woman3 from "../Images/woman3.avif";

const Reviews = () => {
  return (
    <>
      <Header />
      <div className="review-container">
        <div className="review-column">
          <div className="user-review">
            <img src={man1} alt="User 1" />
            <h3>John Doe</h3>
            <p>
              Absolutely blown away by the insightful reviews! The blog's
              in-depth analysis helped me make an informed decision on my latest
              car purchase. Kudos for the valuable content!
            </p>
          </div>
        </div>

        <div className="review-column">
          <div className="user-review">
            <img src={man2} alt="User 2" />
            <h3>Benjamin Williams</h3>
            <p>
              I've been following this car blog for months, and it never
              disappoints. The reviews are not only informative but also written
              in a way that's engaging and easy to understand.
            </p>
          </div>
        </div>
        <div className="review-column">
          <div className="user-review">
            <img src={man3} alt="User 3" />
            <h3>Christopher Rodriguez</h3>
            <p>
              This blog is my go-to source for all things automotive. The
              user-friendly format, coupled with comprehensive reviews, makes it
              a joy to navigate.
            </p>
          </div>
        </div>
        <div className="review-column">
          <div className="user-review">
            <img src={woman1} alt="User 4" />
            <h3>Olivia Smith</h3>
            <p>
              Hats off to the writers! The reviews on this blog are so
              well-crafted that they've become my trusted guide when considering
              a new car. I appreciate the real-world insights.
            </p>
          </div>
        </div>
        <div className="review-column">
          <div className="user-review">
            <img src={woman2} alt="User 5" />
            <h3>Sophia Johnson</h3>
            <p>
              I stumbled upon this blog when searching for car reviews, and I'm
              so glad I did. The user reviews section is particularly helpful –
              it's like getting advice from fellow car lovers.
            </p>
          </div>
        </div>
        <div className="review-column">
          <div className="user-review">
            <img src={woman3} alt="User 6" />
            <h3>Isabella Davis</h3>
            <p>
              I'm not a car expert, but this blog makes me feel like one! The
              reviews are thorough yet accessible, and the enthusiasm for cars
              is contagious.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reviews;
