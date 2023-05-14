import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";

import Logo from "./assets/logo.svg";

import { Col, Spin } from "antd";

import { fetchPokemonsWithDetails } from "./slices/dataSlice";

import "antd/dist/reset.css";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
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
