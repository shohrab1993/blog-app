import React from "react";
import RelatedPost from "../relatedPost/RelatedPost";
import Like from "./Like";
import Save from "./Save";

const Post = ({ blog }) => {
  const { title, description, image, tags, likes, id, isSaved } = blog;
  return (
    <section className="post-page-container">
      <main className="post">
        <img
          src={image}
          alt={title}
          className="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
          </h1>
          <div className="tags" id="lws-singleTags">
            {tags?.map((tag, i) => (
              <span key={i}>#{tag}, </span>
            ))}
          </div>
          <div className="btn-group">
            <Like likes={likes} id={id} />
            <Save isSaved={isSaved} id={id} />
          </div>
          <div className="mt-6">
            <p>{description}</p>
          </div>
        </div>
      </main>
      <RelatedPost id={id} tags={tags} />
    </section>
  );
};

export default Post;
