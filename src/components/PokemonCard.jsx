import { useDispatch } from "react-redux";

import { Card } from "antd";
import Meta from "antd/es/card/Meta";

import StartButton from "./StartButton";

import PropTypes from "prop-types";

import { setFavorite } from "../slices/dataSlice";

const PokemonCard = ({ name, image, types, id, favorite }) => {
  PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    id: PropTypes.number,
    favorite: PropTypes.bool,
  };

  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton isFavorite={favorite} onClick={handleFavorite} />}
    >
      <Meta description={habilities(types)} />
    </Card>
  );
};

const habilities = (types) => {
  return types.map((ability) => ability.type.name).join(", ");
};

export default PokemonCard;
