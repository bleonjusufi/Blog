import React from "react";
import "../CSS/Categories.css";
import Bugatti from "../Images/bugatti.webp";
import Header from "./Header";
import Footer from "./Footer";
import S from "../Images/S.jpg";
import Q8 from "../Images/Q8.avif";
import Golf from "../Images/Golf.jpg";

const Categories = () => {
  return (
    <>
      <Header />
      <section className="categories">
        <div className="category-row">
          <CategoryItem
            imgSrc={Bugatti}
            altText="Sports Car"
            title="Sports Car"
            description="Explore high-performance sports cars with cutting-edge technology and sleek designs."
          />
        </div>

        <div className="category-row">
          <CategoryItem
            imgSrc={S}
            altText="Luxury Sedan"
            title="Luxury Sedan"
            description="Discover luxurious sedans offering comfort, advanced features, and elegant styling."
          />
        </div>

        <div className="category-row">
          <CategoryItem
            imgSrc={Q8}
            altText="SUV"
            title="SUV"
            description="Find the perfect SUV for your needs, blending versatility, space, and off-road capability."
          />
        </div>

        <div className="category-row">
          <CategoryItem
            imgSrc={Golf}
            altText="Hatchback"
            title="Hatchback"
            description="Experience the agility and practicality of hatchbacks, perfect for urban commuting."
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

const CategoryItem = ({ imgSrc, altText, title, description }) => (
  <div className="category-item">
    <div className="category-image">
      <img src={imgSrc} alt={altText} />
    </div>
    <div className="category-details">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Categories;
