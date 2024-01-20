import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../CSS/DetailedBlog.css";
import Porsche from "../Images/Porsche.jpg";

const DetailedBlog = () => {
  const { category, blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the specific blog content based on category and blogId
    const fetchBlogDetails = () => {
      // Implement your logic to fetch blog details based on category and blogId
      // For example, you can filter the blogs array in fetchBlogContent()
      const blogs = fetchBlogContent(category);
      const selectedBlog = blogs.find((b) => b.id === parseInt(blogId));
      setBlog(selectedBlog);
    };

    fetchBlogDetails();
  }, [category, blogId]);

  const fetchBlogContent = (currentCategory) => {
    // Implement your logic to fetch all blog content based on the category
    // This could be a separate function or an API call
    // For simplicity, returning a static array here
    switch (currentCategory) {
      case "sports-car":
        return [
          {
            id: 1,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: Porsche,
            // Add more properties as needed
          },
          {
            id: 2,
            title: "Bleon Jusufi",
            content: "The best Software Engineer in Europe",
          },
          {
            id: 3,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: Porsche,
            // Add more properties as needed
          },
          {
            id: 4,
            title: "Bleon Jusufi",
            content: "The best Software Engineer in Europe",
          },
          {
            id: 5,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: Porsche,
            // Add more properties as needed
          },
          {
            id: 6,
            title: "Bleon Jusufi",
            content: "The best Software Engineer in Europe",
          },
          {
            id: 7,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: Porsche,
            // Add more properties as needed
          },
          {
            id: 8,
            title: "Bleon Jusufi",
            content: "The best Software Engineer in Europe",
          },
          {
            id: 9,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: Porsche,
            // Add more properties as needed
          },
          {
            id: 10,
            title: "Bleon Jusufi",
            content: "The best Software Engineer in Europe",
          },
          {
            id: 11,
            title: "The Fast and Furious World of Sports Cars",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: Porsche,
            // Add more properties as needed
          },
          {
            id: 12,
            title: "Bleon Jusufi",
            content: "The best Software Engineer in Europe",
          },
        ];
      case "luxury-sedan":
        return [
          // ... (your luxury sedan blog data)
        ];
      case "suv":
        return [
          // ... (your SUV blog data)
        ];
      case "hatchback":
        return [
          // ... (your hatchback blog data)
        ];
      default:
        console.error("Invalid category:", currentCategory);
        return [];
    }
  };

  if (!blog) {
    return (
      <>
        <Header />
        <p>Loading...</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="detailed-blog">
        <h2>{blog.title}</h2>
        <img src={blog.image} alt={blog.title} />
        <p className="detailed-content">{blog.content}</p>
        {/* Add any additional details you want to display */}
      </section>
      <Footer />
    </>
  );
};

export default DetailedBlog;
