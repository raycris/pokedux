import { useEffect, useState } from "react";

import { getPokemon } from "./api";

import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";

import Logo from "./assets/logo.svg";

import { Col } from "antd";

import "antd/dist/reset.css";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemos = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };

    fetchPokemos();
  }, []);

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
