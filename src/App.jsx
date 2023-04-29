import { useEffect,  } from "react";
import { connect } from "react-redux";

import { getPokemon } from "./api";

import { setPokemons as setPokemonsActions } from "./actions";

import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";

import Logo from "./assets/logo.svg";

import { Col } from "antd";

import "antd/dist/reset.css";
import "./App.css";

function App({pokemons, setPokemons}) {
  console.log(pokemons);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
