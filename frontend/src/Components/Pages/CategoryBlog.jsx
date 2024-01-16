import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import "../CSS/CategoryBlog.css";

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
          },
        ];

      case "luxury-sedan":
        return [
          {
            id: 2,
            title: "The Elegance of Luxury Sedans: A Detailed Review",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
          },
        ];

      case "suv":
        return [
          {
            id: 3,
            title: "Exploring Off-Road Adventures with SUVs",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
          },
        ];

      case "hatchback":
        return [
          {
            id: 4,
            title: "City Commuting: The Hatchback Advantage",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
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
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CategoryBlog;
