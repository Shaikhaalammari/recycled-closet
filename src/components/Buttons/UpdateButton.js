import React, { useState } from "react";
//styling
import { UpdateButtonStyled } from "./styles";
//components-modal
import ProdModal from "../modals/ProdModal";

const UpdateButton = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <ProdModal isOpen={isOpen} closeModal={closeModal} oldProduct={product} />
    </>
  );
};

export default UpdateButton;
