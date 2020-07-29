import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import ProdModal from "../modals/ProdModal";
import VendorModal from "../modals/VendorModal";

const AddButton = ({ vendorId, product }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const closeModal = () => SetIsOpen(false);
  const openModal = () => SetIsOpen(true);
  return (
    <>
      <GrAdd className="float-right" size="2em" onClick={openModal} />
      {vendorId ? (
        <ProdModal
          vendorId={vendorId}
          isOpen={isOpen}
          closeModal={closeModal}
          // createProduct={createProduct}
        />
      ) : (
        <VendorModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </>
  );
};
export default AddButton;
