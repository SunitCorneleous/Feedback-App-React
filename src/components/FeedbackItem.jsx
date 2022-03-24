import React from "react";
import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card";
import PropTypes from "prop-types";

function Feedbackitem({ item, handleDelete }) {
  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

Feedbackitem.prototype = {
  item: PropTypes.object.isRequired,
};

export default Feedbackitem;
