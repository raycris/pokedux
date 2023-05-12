import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPokemon } from "./api";

import { getPokemonsWithDetails, setLoading } from "./actions";

import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";

import Logo from "./assets/logo.svg";

import { Col, Spin } from "antd";

import "antd/dist/reset.css";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
