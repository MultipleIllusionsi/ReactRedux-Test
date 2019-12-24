import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./CustomButton.scss";

const CustomButton = ({ color, text, to, className, onClick }) => (
  <>
    {to ? (
      <button className={`custom-btn ${className} ${color}`}>
        <Link to={to}>{text}</Link>
      </button>
    ) : (
      <button onClick={onClick} className={`custom-btn ${color}`}>
        {text}
      </button>
    )}
  </>
);

CustomButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default CustomButton;
