import axios from "axios";

export const getPersonajes = () => {
  return axios.get(`https://hp-api.onrender.com/api/characters`);
};

export const getHousePersonajes = (house) => {
  return axios.get(`https://hp-api.onrender.com/api/characters/house/${house}`);
};

export const getBooks = () => {
  return axios.get(
    `https://harry-potter-api-english-production.up.railway.app/books`
  );
};
