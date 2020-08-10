import React, { useState } from "react";
import { SigninButtonStyled } from "./styles";
import SigninModal from "../modals/SigninModal";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <SigninButtonStyled onClick={openModal}>Sign In</SigninButtonStyled>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;
