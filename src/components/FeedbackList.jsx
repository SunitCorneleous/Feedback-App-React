import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function Feedbacklist({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

Feedbacklist.prototype = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default Feedbacklist;