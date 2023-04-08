import React from "react";
import { Link } from "react-router-dom";

const RelatedSinglePost = ({ blog }) => {
  const { id, image, title, createdAt, tags } = blog;
  return (
    <div className="card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blog/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">
          {tags?.map((tag, i) => (
            <span key={i}>#{tag},</span>
          ))}
          <span>#tech,</span> <span>#git</span>
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedSinglePost;
