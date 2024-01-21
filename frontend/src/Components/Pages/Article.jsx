import React from "react";
import "../CSS/Article.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import Maybach from "../Images/s680.webp";
import Side from "../Images/side.webp";
import Back from "../Images/back.webp";
import Inside from "../Images/inside.webp";
import Tesla from "../Images/Tesla.webp";
import TBack from "../Images/teslaBack.jpg";
import TInside from "../Images/teslaInside.jpg";
import Ferrari from "../Images/ferrari.jpg";
import FBack from "../Images/fBack.jpg";
import FInside from "../Images/fInside.jpg";
import BMW from "../Images/BMW.webp";
import BBack from "../Images/m4Back.jpg";
import BInside from "../Images/m4Inside.jpg";
import Lambo from "../Images/Lambo.jpg";
import LBack from "../Images/LBack.jpg";
import LSide from "../Images/LSide.jpg";
import LInside from "../Images/LInside.jpg";
import Porsche from "../Images/Porsche.jpg";

const Article = () => {
  const { articleId } = useParams();

  const articles = {
    article1: {
      title: "Explore the new Maybach S680",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: [Maybach, Side, Back, Inside],
    },
    article2: {
      title: "Tesla CyberTruck is finally here",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: [Tesla, TBack, TInside],
    },
    article3: {
      title: "Ferrari SF90 The Italian Masterpiece",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: [Ferrari, FBack, FInside],
    },
    article4: {
      title: "M4 CSL is the ultimate driving machine",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: [BMW, BBack, BInside],
    },
    article5: {
      title: "Veneno at Geneva auto showroom",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: [Lambo, LSide, LBack, LInside],
    },
    article6: {
      title: "German Engineering at its best",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: Porsche,
    },
  };

  const CustomArrow = ({ direction, onClick }) => (
    <FontAwesomeIcon
      icon={direction === "left" ? faArrowLeft : faArrowRight}
      className={`custom-arrow custom-${direction}-arrow`}
      onClick={onClick}
    />
  );
  const article = articles[articleId];

  if (!article) {
    return <div>Article not found</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };

  return (
    <>
      <Header />
      <div className="article">
        <div className="detailed-article">
          <Slider {...sliderSettings}>
            {article.image.map((image, index) => (
              <img key={index} src={image} alt="" />
            ))}
          </Slider>
          <h3 id="article-title">{article.title}</h3>
          <p id="article-content">{article.content}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
