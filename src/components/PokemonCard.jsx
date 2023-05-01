import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

import PropTypes from "prop-types";

const PokemonCard = ({ name, image, abilities }) => {
  PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    abilities: PropTypes.array.isRequired,
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description={habilities(abilities)} />
    </Card>
  );
};

const habilities = (abilities) => {
  return abilities.map((ability) => ability.ability.name).join(", ");
};

export default PokemonCard;
