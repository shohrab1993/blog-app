import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "all",
  sort: "default",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
    addSorting: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { addFilter, addSorting } = filterSlice.actions;
