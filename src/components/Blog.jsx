import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="page-heading">AG Learners Base</h2>
      <iframe
        src="https://aglearnersbase.blogspot.com/"
        title="AG Learners Base Blog"
        className="embedded-site"
      ></iframe>
    </div>
  );
};

export default Blog;
