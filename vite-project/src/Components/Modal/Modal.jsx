import React from "react";
import Button from "../Button/Button";
import "./Card.css";

function Card({ character }) {
  const { name, gender, status, species, id, image } = character; //! destructuring
  return (
    <div className="my-card" key={id}>
      <h2>{name}</h2>
      <h3>{species}</h3>
      <h3>{status}</h3>
      <img src={image} alt={name} />

      <Button buttonLabel={"show me more"} id={id} />
    </div>
  );
}

export default Card;
