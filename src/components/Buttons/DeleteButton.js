import React from "react";
// //stores
import prodStore from "../../stores/prodStore";
import { DeleteButtonStyled } from "./styles";
import { RiDeleteBin6Line } from "react-icons/ri";
import vendorStore from "../../stores/vendorStore";

const DeleteButton = ({ productId, vendorId }) => {
  const handleDelete = () => {
    if (vendorId) {
      vendorStore.deleteVendor(vendorId);
    } else {
      prodStore.deleteProduct(productId);
    }
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}>
      <RiDeleteBin6Line />
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
