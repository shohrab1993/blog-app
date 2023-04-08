import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import updateSave from "./savedApi";

const initialState = {
  saved: false,
};

export const changedSaved = createAsyncThunk(
  "save/changedSave",
  async (data) => {
    const toSave = await updateSave(data);
    return toSave;
  }
);

const savedSlice = createSlice({
  name: "save",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(changedSaved.fulfilled, (state, action) => {
      state.saved = action.payload;
    });
  },
});
export default savedSlice.reducer;
