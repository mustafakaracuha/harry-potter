import { configureStore } from "@reduxjs/toolkit";
import person from "./features/personajes";
import book from "./features/books";


const store = configureStore({
  reducer: {
    person,
    book
  },
  
});

export default store;
