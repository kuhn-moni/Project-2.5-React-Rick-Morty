import React from "react";
import Button from "../Button/Button";
import "./Card.css";

function Card({ character }) {
  const { name, gender, status, species, id } = character; //! destructuring
  return (
    <div className="my-card" key={id}>
      <h1>{name}</h1>
      <h1>{gender}</h1>

      <Button buttonLabel={"show me more"} id={id} />
    </div>
  );
}

export default Card;
