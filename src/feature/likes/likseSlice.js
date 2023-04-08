import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import increasedLikes from "../likes/likesApi";
const initialState = {
  updatedLikes: 0,
};

//create async thunk

export const updateLikes = createAsyncThunk(
  "likes/updateLikes",
  async (data) => {
    const like = await increasedLikes(data);
    return like;
  }
);

//create Slice

const likesSlice = createSlice({
  name: "likes",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(updateLikes.fulfilled, (state, action) => {
      console.log(action);
      state.updatedLikes = action.meta.arg.likes;
    });
  },
});
export default likesSlice.reducer;
