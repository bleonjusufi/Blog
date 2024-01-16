import React from "react";
import { useParams } from "react-router-dom";
import Maybach from "../Images/Maybach.webp";
import Tesla from "../Images/Tesla.webp";
import Ferrari from "../Images/ferrari.jpg";
import BMW from "../Images/BMW.jpg";
import Lambo from "../Images/Lambo.jpg";
import Porsche from "../Images/Porsche.jpg";

const Article = () => {
  const { articleId } = useParams();

  const articles = {
    article1: {
      title: "Explore the new Maybach S680",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: Maybach,
    },
    article2: {
      title: "Tesla CyberTruck is finally here",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: Tesla,
    },
    article3: {
      title: "Ferrari SF90 The Italian Masterpiece",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: Ferrari,
    },
    article4: {
      title: "M4 CSL is the ultimate driving machine",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: BMW,
    },
    article5: {
      title: "Veneno at Geneva auto showroom",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: Lambo,
    },
    article6: {
      title: "German Engineering at its best",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: Porsche,
    },
  };

  const article = articles[articleId];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article">
      <img src={article.image} alt="" />
      <h3>{article.title}</h3>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
