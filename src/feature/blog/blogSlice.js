import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getSingleBlogDetails from "./blogApi";
const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk

export const getSinglePost = createAsyncThunk(
  "blog/getSinglePost",
  async (id) => {
    const blog = await getSingleBlogDetails(id);
    return blog;
  }
);

// slice

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSinglePost.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(getSinglePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(getSinglePost.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogSlice.reducer;
