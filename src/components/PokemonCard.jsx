import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

import PropTypes from "prop-types";

const PokemonCard = ({ name }) => {
  PokemonCard.propTypes = {
    name: PropTypes.string,
  };

  return (
    <Card
      title={name}
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Ditto"
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="firte, magic" />
    </Card>
  );
};

export default PokemonCard;
