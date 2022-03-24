import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return <div className={!reverse ? 'card' : 'card reverse'}>{children}</div>;
}

Card.prototype = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

Card.defaultProps = {
  reverse: false,
}

export default Card;
