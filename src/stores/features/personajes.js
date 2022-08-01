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
    searchCharacter: (state, action) => {
      state.personajes = state.personajes.filter(x =>
        x.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { load, setHouse, searchCharacter } = person.actions;
export default person.reducer;
