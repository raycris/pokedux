import Searcher from "./components/Searcher";
import "./App.css";
import 'antd/dist/reset.css';
import {Col} from "antd"

function App() {
  return (
    <div className="container">
      <h1>Pokedux Redux</h1>
    <Col span={8} offset={8}>
      <Searcher />
    </Col>
    </div>
  );
}

export default App;
