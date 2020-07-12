import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import ProdModal from "../modals/ProdModal";

const AddButton = ({ createProduct }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const closeModal = () => SetIsOpen(false);
  const openModal = () => SetIsOpen(true);
  return (
    <>
      <GrAdd className="float-right" size="2em" onClick={openModal} />
      <ProdModal
        isOpen={isOpen}
        closeModal={closeModal}
        createProduct={createProduct}
      />
    </>
  );
};
export default AddButton;
