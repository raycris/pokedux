import { StarFilled, StarOutlined } from "@ant-design/icons";

import { Button } from "antd";

import PropTypes from "prop-types";

const StartButton = ({ isFavorite, onClick }) => {
  StartButton.propTypes = {
    isFavorite: PropTypes.bool,
    onClick: PropTypes.func,
  };

  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClick} />;
};

export default StartButton;
