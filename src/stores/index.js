import { configureStore } from "@reduxjs/toolkit";
import person from "./personajes";
import book from "./books";


const store = configureStore({
  reducer: {
    person,
    book
  },
  
});

export default store;
