import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedBlogs from "./relatedBlogsApi";
const initialState = {
  relatedBlogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk

export const fetchRelatedTags = createAsyncThunk(
  "realtedBlogs/fetchRelatedTags",
  async ({ id, tags }) => {
    const relatedTags = await getRelatedBlogs({ id, tags });
    return relatedTags;
  }
);

// slice

const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs = action.payload;
      })
      .addCase(fetchRelatedTags.rejected, (state, action) => {
        state.isLoading = false;
        (state.relatedBlogs = []), (state.isError = true);
        state.error = action.error.message;
      });
  },
});

export default relatedBlogsSlice.reducer;
