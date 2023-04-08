import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import GoHome from "../component/goHome/GoHome";
import Post from "../component/post/Post";
import { getSinglePost } from "../feature/blog/blogSlice";

import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogId } = useParams();
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(getSinglePost(blogId));
  }, [dispatch, blogId]);

  // decide what to render
  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && !blog?.id)
    content = <div>Blog not found !</div>;
  if (!isLoading && !isError && blog?.id) {
    content = <Post blog={blog} />;
  }
  return (
    <>
      <GoHome />
      {content}
    </>
  );
};

export default Blog;
