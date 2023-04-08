import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../feature/blogs/blogsSlice";
import SingleBlog from "./SingleBlog";

const MainBlog = () => {
  const dispatch = useDispatch();
  const blogsState = useSelector((state) => state.blogs);
  const { filter, sort } = useSelector((state) => state.filters);
  //console.log(sort);

  const { blogs, isLoading, isError, error } = blogsState;

  useEffect(() => {
    dispatch(fetchBlogs(sort));
  }, [sort]);

  // what to render

  let content;
  if (isLoading) content = <div>Loding</div>;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && blogs?.length === 0)
    content = <div>Blogs not found</div>;
  if (!isLoading && !isError && blogs?.length > 0) {
    content = blogs
      .filter((blog) => (filter === "saved" ? blog.isSaved : blog))
      .map((blog) => <SingleBlog key={blog.id} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default MainBlog;
