import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RelatedSinglePost from "../../component/relatedPost/RelatedSinglePost";
import { fetchRelatedTags } from "../../feature/relatedBlogs/relatedBlogsSlice";
const RelatedPost = ({ id, tags }) => {
  const dispatch = useDispatch();
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlog
  );

  useEffect(() => {
    dispatch(fetchRelatedTags({ id, tags }));
  }, [dispatch, id, tags]);

  // decide what to render
  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && relatedBlogs?.length === 0)
    content = <div>Related blogs not found !</div>;
  if (!isLoading && !isError && relatedBlogs?.length > 0)
    content = relatedBlogs?.map((blog) => (
      <RelatedSinglePost key={blog.id} blog={blog} />
    ));
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
};

export default RelatedPost;
