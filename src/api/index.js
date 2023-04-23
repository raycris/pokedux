import axios from "axios";

export const getPokemon = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=152")
    .then((response) => response.data.results)
    .catch((err) => console.error(err));
};
