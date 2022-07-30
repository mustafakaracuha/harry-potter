import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personajes: [],
};

const person = createSlice({
  name: "person",
  initialState,
  reducers: {
    load: (state, action) => {
      state.personajes = action.payload;
    },
    setHouse: (state, action) => {
      state.personajes = action.payload;
    },
  }

});

export const { load, setHouse } = person.actions;
export default person.reducer;
