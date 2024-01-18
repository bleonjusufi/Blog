import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import "../CSS/CategoryBlog.css";
import BMW7 from "../Images/BMW7.png";
import A8 from "../Images/A8.jpg";
import S from "../Images/S-Class.jpg";
import R from "../Images/R.webp";
import Bentley from "../Images/Bentley.jpg";
import Lexus from "../Images/Lexus.jpg";
import Jaguar from "../Images/Jaguar.webp";
import Cadillac from "../Images/Cadillac.webp";
import Aston from "../Images/Aston.webp";
import Maserati from "../Images/Maserati.jpg";
import Genesis from "../Images/Genesis.jpg";
import Lincoln from "../Images/Lincoln.webp";
import Porsche from "../Images/Porsche.webp";
import Lambo from "../Images/Lambo.avif";
import AMG from "../Images/AMG.jpeg";
import R8 from "../Images/R8.jpg";
import Pista from "../Images/Pista.jpg";
import Ford from "../Images/Ford.webp";
import Bugatti from "../Images/Bugatti.avif";
import McLaren from "../Images/720s.jpg";
import M8 from "../Images/M8.avif";
import alpha from "../Images/alpha.jpg";
import GTR from "../Images/GTR.jpeg";
import CLS from "../Images/CLS.webp";
import GLE from "../Images/GLE.jpg";
import RSQ8 from "../Images/RSQ8.jpg";
import X5M from "../Images/X5M.avif";
import Urus from "../Images/Urus.jpg";
import GClass from "../Images/GClass.jpg";
import FerrariSUV from "../Images/FerrariSUV.jpg";
import GTS from "../Images/GTS.jpg";
import Q7 from "../Images/Q7.webp";
import MaseratiSUV from "../Images/Maserati.webp";
import Cullinan from "../Images/Cullinan.webp";
import Bentayga from "../Images/Bentayga.jpg";
import GLS from "../Images/GLS.jpg";
import Golf from "../Images/GolfR.jpg";
import A45 from "../Images/A45.jpg";
import m140 from "../Images/m140.jpg";
import RS3 from "../Images/RS3.webp";
import Focus from "../Images/Ford.avif";
import Clio from "../Images/Clio.avif";
import Opel from "../Images/Opel.jpg";
import Fiat from "../Images/Fiat.webp";
import Corolla from "../Images/Corolla.jpg";
import Mini from "../Images/mini.webp";
import Mazda from "../Images/Mazda.jpg";
import Chevrolet from "../Images/Chevrolet.jpg";

const CategoryBlog = () => {
  const { category } = useParams();

  console.log("Current category:", category);

  const fetchBlogContent = () => {
    switch (category) {
      case "sports-car":
        return [
          {
            id: 1,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Porsche,
            readMoreLink: "/category/sports-car/1",
          },
          {
            id: 2,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Lambo,
            readMoreLink: "/category/sports-car/1",
          },
          {
            id: 3,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: AMG,
            readMoreLink: "/category/sports-car/1",
          },
          {
            id: 4,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: R8,
            readMoreLink: "/category/sports-car/1",
          },
          {
            id: 5,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Pista,
            readMoreLink: "/category/sports-car/1",
          },
          {
            id: 6,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Ford,
            readMoreLink: "/category/sports-car/1",
          },
          {
            id: 7,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Bugatti,
            readMoreLink: "/category/sports-car/1",
          },
          {
            id: 8,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: McLaren,
            readMoreLink: "/category/sports-car/1",
          },
          {
            id: 9,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: M8,
            readMoreLink: "/category/sports-car/1",
          },
          {
            id: 10,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: alpha,
            readMoreLink: "/category/sports-car/1",
          },
          {
            id: 11,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: GTR,
            readMoreLink: "/category/sports-car/1",
          },
          {
            id: 12,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: CLS,
            readMoreLink: "/category/sports-car/1",
          },
        ];

      case "luxury-sedan":
        return [
          {
            id: 13,
            title: "The Elegance of Luxury Sedans: A Detailed Review",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: BMW7,
            readMoreLink: "/category/luxury-sedan/1",
          },
          {
            id: 14,
            title: "Luxury Sedans: A Symbol of Opulence",
            content:
              "Another interesting blog entry for luxury sedans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: A8,
            readMoreLink: "/category/luxury-sedan/2",
          },
          {
            id: 15,
            title: "Luxury Sedans: A Symbol of Opulence",
            content:
              "Another interesting blog entry for luxury sedans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: S,
            readMoreLink: "/category/luxury-sedan/2",
          },
          {
            id: 16,
            title: "The Elegance of Luxury Sedans: A Detailed Review",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: R,
            readMoreLink: "/category/luxury-sedan/1",
          },
          {
            id: 17,
            title: "Luxury Sedans: A Symbol of Opulence",
            content:
              "Another interesting blog entry for luxury sedans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Bentley,
            readMoreLink: "/category/luxury-sedan/2",
          },
          {
            id: 18,
            title: "Luxury Sedans: A Symbol of Opulence",
            content:
              "Another interesting blog entry for luxury sedans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Lexus,
            readMoreLink: "/category/luxury-sedan/2",
          },
          {
            id: 19,
            title: "The Elegance of Luxury Sedans: A Detailed Review",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Jaguar,
            readMoreLink: "/category/luxury-sedan/1",
          },
          {
            id: 20,
            title: "Luxury Sedans: A Symbol of Opulence",
            content:
              "Another interesting blog entry for luxury sedans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Cadillac,
            readMoreLink: "/category/luxury-sedan/2",
          },
          {
            id: 21,
            title: "Luxury Sedans: A Symbol of Opulence",
            content:
              "Another interesting blog entry for luxury sedans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Aston,
            readMoreLink: "/category/luxury-sedan/2",
          },
          {
            id: 22,
            title: "The Elegance of Luxury Sedans: A Detailed Review",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Maserati,
            readMoreLink: "/category/luxury-sedan/1",
          },
          {
            id: 23,
            title: "Luxury Sedans: A Symbol of Opulence",
            content:
              "Another interesting blog entry for luxury sedans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Genesis,
            readMoreLink: "/category/luxury-sedan/2",
          },
          {
            id: 24,
            title: "Luxury Sedans: A Symbol of Opulence",
            content:
              "Another interesting blog entry for luxury sedans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Lincoln,
            readMoreLink: "/category/luxury-sedan/2",
          },
        ];

      case "suv":
        return [
          {
            id: 25,
            title: "Exploring Off-Road Adventures with SUVs",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: GLE,
            readMoreLink: "/category/suv/1",
          },
          {
            id: 26,
            title: "The All-Terrain Experience: SUV Adventures",
            content:
              "Discover the thrill of off-road adventures with SUVs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: RSQ8,
            readMoreLink: "/category/suv/2",
          },
          {
            id: 27,
            title: "Exploring Off-Road Adventures with SUVs",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: X5M,
            readMoreLink: "/category/suv/1",
          },
          {
            id: 28,
            title: "The All-Terrain Experience: SUV Adventures",
            content:
              "Discover the thrill of off-road adventures with SUVs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Urus,
            readMoreLink: "/category/suv/2",
          },
          {
            id: 29,
            title: "Exploring Off-Road Adventures with SUVs",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: GClass,
            readMoreLink: "/category/suv/1",
          },
          {
            id: 30,
            title: "The All-Terrain Experience: SUV Adventures",
            content:
              "Discover the thrill of off-road adventures with SUVs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: FerrariSUV,
            readMoreLink: "/category/suv/2",
          },
          {
            id: 31,
            title: "Exploring Off-Road Adventures with SUVs",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: GTS,
            readMoreLink: "/category/suv/1",
          },
          {
            id: 32,
            title: "The All-Terrain Experience: SUV Adventures",
            content:
              "Discover the thrill of off-road adventures with SUVs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Q7,
            readMoreLink: "/category/suv/2",
          },
          {
            id: 33,
            title: "Exploring Off-Road Adventures with SUVs",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: MaseratiSUV,
            readMoreLink: "/category/suv/1",
          },
          {
            id: 34,
            title: "The All-Terrain Experience: SUV Adventures",
            content:
              "Discover the thrill of off-road adventures with SUVs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Cullinan,
            readMoreLink: "/category/suv/2",
          },
          {
            id: 35,
            title: "Exploring Off-Road Adventures with SUVs",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Bentayga,
            readMoreLink: "/category/suv/1",
          },
          {
            id: 36,
            title: "The All-Terrain Experience: SUV Adventures",
            content:
              "Discover the thrill of off-road adventures with SUVs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: GLS,
            readMoreLink: "/category/suv/2",
          },
        ];

      case "hatchback":
        return [
          {
            id: 37,
            title: "City Commuting: The Hatchback Advantage",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Golf,
            readMoreLink: "/category/hatchback/1",
          },
          {
            id: 38,
            title: "Compact and Convenient: Hatchbacks for Urban Living",
            content:
              "Explore the practicality of hatchbacks for urban commuting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: A45,
            readMoreLink: "/category/hatchback/2",
          },
          {
            id: 39,
            title: "City Commuting: The Hatchback Advantage",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: m140,
            readMoreLink: "/category/hatchback/1",
          },
          {
            id: 40,
            title: "Compact and Convenient: Hatchbacks for Urban Living",
            content:
              "Explore the practicality of hatchbacks for urban commuting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: RS3,
            readMoreLink: "/category/hatchback/2",
          },
          {
            id: 41,
            title: "City Commuting: The Hatchback Advantage",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Focus,
            readMoreLink: "/category/hatchback/1",
          },
          {
            id: 42,
            title: "Compact and Convenient: Hatchbacks for Urban Living",
            content:
              "Explore the practicality of hatchbacks for urban commuting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Clio,
            readMoreLink: "/category/hatchback/2",
          },
          {
            id: 43,
            title: "City Commuting: The Hatchback Advantage",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Opel,
            readMoreLink: "/category/hatchback/1",
          },
          {
            id: 44,
            title: "Compact and Convenient: Hatchbacks for Urban Living",
            content:
              "Explore the practicality of hatchbacks for urban commuting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Fiat,
            readMoreLink: "/category/hatchback/2",
          },
          {
            id: 45,
            title: "City Commuting: The Hatchback Advantage",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Corolla,
            readMoreLink: "/category/hatchback/1",
          },
          {
            id: 46,
            title: "Compact and Convenient: Hatchbacks for Urban Living",
            content:
              "Explore the practicality of hatchbacks for urban commuting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Mini,
            readMoreLink: "/category/hatchback/2",
          },
          {
            id: 47,
            title: "City Commuting: The Hatchback Advantage",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Mazda,
            readMoreLink: "/category/hatchback/1",
          },
          {
            id: 48,
            title: "Compact and Convenient: Hatchbacks for Urban Living",
            content:
              "Explore the practicality of hatchbacks for urban commuting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
            image: Chevrolet,
            readMoreLink: "/category/hatchback/2",
          },
        ];

      default:
        console.error("Invalid category:", category);
        return [];
    }
  };

  const blogs = fetchBlogContent();

  console.log("Fetched blogs:", blogs);

  return (
    <>
      <Header />
      <section className="category-blog">
        <h2>
          {category && category.charAt(0).toUpperCase() + category.slice(1)}{" "}
          Blogs
        </h2>
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-item">
              <img src={blog.image} alt={blog.title} />
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <a href={blog.readMoreLink}>Read More</a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CategoryBlog;
