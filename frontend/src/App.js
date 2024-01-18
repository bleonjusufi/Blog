import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Categories from "./Components/Pages/Categories";
import ScrollToTop from "./Components/Pages/ScrollToTop";
import About from "./Components/Pages/About";
import Reviews from "./Components/Pages/Reviews";
import Signup from "./Components/Pages/Signup";
import Login from "./Components/Pages/Login";
import CategoryBlog from "./Components/Pages/CategoryBlog";
import Article from "./Components/Pages/Article";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:category" element={<CategoryBlog />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
