import React, { useState } from "react";
//styling
import { UpdateButtonStyled } from "./styles";
//components-modal
import ProdModal from "../modals/ProdModal";
//button icon
import { BsArrowRepeat } from "react-icons/bs";

const UpdateButton = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <BsArrowRepeat color="#438a5e" onClick={openModal} />

      <ProdModal isOpen={isOpen} closeModal={closeModal} oldProduct={product} />
    </>
  );
};

export default UpdateButton;
