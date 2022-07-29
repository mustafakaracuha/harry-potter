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
    search: (state, action) => {
      if (action.payload) {
        let filtered = state.personajes.filter((value) =>
          value.personaje.toLowerCase().includes(action.payload.toLowerCase())
        );
        state.personajes = filtered;
      }
    },
  },
});

export const { load, search } = person.actions;
export default person.reducer;
