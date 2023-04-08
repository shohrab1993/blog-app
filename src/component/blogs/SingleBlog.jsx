import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  const { id, title, isSaved, image, tags, createdAt, likes } = blog;
  return (
    <div className="lws-card" style={{ width: "300px" }}>
      <Link to={`/blog/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt} </p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/blog/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tags?.map((tag, i) => (
            <span key={i}>#{tag},</span>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <span className={`${isSaved && "lws-badge"}`}> Saved </span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
