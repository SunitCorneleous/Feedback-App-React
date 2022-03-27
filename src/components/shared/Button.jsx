import React from "react";
import PropTypes from 'prop-types';

function Button({ children, type, version, isDisabled }) {
  return (
    <div>
      <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
      </button>
    </div>
  );
}

Button.defaultProps = {
  type: "button",
  version: "btn-primary",
  isDisabled: false,
}

Button.propTypes ={
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button;
