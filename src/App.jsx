import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPokemon } from "./api";

import { getPokemonsWithDetails } from "./actions";

import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";

import Logo from "./assets/logo.svg";

import { Col } from "antd";

import "antd/dist/reset.css";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };

    fetchPokemons();
  }, [dispatch]);

  return (
    <div className="container">
      <Col span={4} offset={10}>
        <img src={Logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
