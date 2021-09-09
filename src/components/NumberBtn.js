import React from "react";
import "../assets/NumberBtn.css";
import "../assets/Btn.css";

import PropTypes from "prop-types";

const NumberBtn = (props) => {
  return (
    <button className="number" onClick={props.click}>
      {props.number}
    </button>
  );
};

NumberBtn.propTypes = {
  click: PropTypes.func,
  number: PropTypes.number,
};

export default NumberBtn;