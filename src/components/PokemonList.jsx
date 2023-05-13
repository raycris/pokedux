import PokemonCard from "./PokemonCard";
import PropTypes from "prop-types";

import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  PokemonList.propTypes = {
    pokemons: PropTypes.array,
  };

  return (
    <div className="pokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
