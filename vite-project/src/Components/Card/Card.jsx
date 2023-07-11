import React from "react";
import Button from "../Button/Button";
import "./Card.css";

function Card({ character }) {
  const { name, gender, status, species, id, image } = character; //! destructuring
  return (
    <div className="my-card" key={id}>
      <h1>{name}</h1>
      <h1>{species}</h1>
      <h2>{status}</h2>
      <h2>{image}</h2>

      <Button buttonLabel={"show me more"} id={id} />
    </div>
  );
}

export default Card;
