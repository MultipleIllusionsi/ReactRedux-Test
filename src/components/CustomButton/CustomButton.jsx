import React from "react";
import { Link } from "react-router-dom";

import "./CustomButton.scss";

const CustomButton = ({ color, text, to, onClick }) => (
  <>
    {to ? (
      <button className={color}>
        <Link to={to}>{text}</Link>
      </button>
    ) : (
      <button onClick={onClick} className={color}>
        {text}
      </button>
    )}
  </>
);

export default CustomButton;
