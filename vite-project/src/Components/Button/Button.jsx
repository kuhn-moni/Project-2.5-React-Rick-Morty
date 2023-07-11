import React from "react";
import "./Button.css";

const Button = ({ buttonLabel, id }) => {
  return (
    <>
      <button className="myButton" key={id}>
        {buttonLabel}
      </button>
    </>
  );
};

export default Button;
