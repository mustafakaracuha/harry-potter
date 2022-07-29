import axios from "axios";

export const getPersonajes = () => {
  return axios.get(`http://hp-api.herokuapp.com/api/characters`);
};

export const getBooks = () => {
  return axios.get(`https://harry-potter-api-english-production.up.railway.app/books`);
};