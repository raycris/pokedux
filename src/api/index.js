import axios from "axios";

export const getPokemon = async () => {
  try {
    const response = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=152");
    return response.data.results;
  } catch (err) {
    return console.error(err);
  }
};

export const getPokemonDetails = async (pokemon) => {
  try {
    const res = await axios
      .get(pokemon.url);
    return res.data;
  } catch (err) {
    return console.error(err);
  }
};
