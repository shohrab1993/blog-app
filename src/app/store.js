import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../feature/blog/blogSlice";
import blogsReducer from "../feature/blogs/blogsSlice";
import filterReducer from "../feature/filter/filterSlice";
import likesReducer from "../feature/likes/likseSlice";
import relatedReducer from "../feature/relatedBlogs/relatedBlogsSlice";
import savedReducer from "../feature/save/savedSlice";
export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlog: relatedReducer,
    like: likesReducer,
    filters: filterReducer,
    save: savedReducer,
  },
});
