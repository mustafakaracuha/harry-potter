import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [],
};

const books = createSlice({
  name: "book",
  initialState,
  reducers: {
    load: (state, action) => {
      state.bookList = action.payload;
    },
  },
});

export const { load } = books.actions;
export default books.reducer;
