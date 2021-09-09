import React from "react";
import "../assets/OperatorBtn.css";
import "../assets/Btn.css";

import PropTypes from "prop-types";

const OperatorBtn = (props) => {
  return (
    <button className={props.className} onClick={props.click}>
      {props.operator}
    </button>
  );
};

OperatorBtn.propTypes = {
  className: PropTypes.string,
  operator: PropTypes.string,
  click: PropTypes.func,
};

export default OperatorBtn;