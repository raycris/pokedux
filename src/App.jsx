import "antd/dist/reset.css";
import { Col } from "antd";

import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";

import "./App.css";

function App() {
  return (
    <div className='container'>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
