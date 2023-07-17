import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./Card.css";

function Card({ character }) {
  const { name, gender, status, species, id, image } = character; //! destructuring

  const [showModal, setShowModal] = useState(false);

  const handleShowMore = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="my-card" key={id}>
      <h2>{name}</h2>
      <h3>{species}</h3>
      <h3>{status}</h3>
      <img src={image} alt={name} />

      <Button buttonLabel={"show me more"} id={id} onClick={handleShowMore} />

      {showModal && <Modal character={character} onClose={handleClose} />}
    </div>
  );
}

export default Card;
