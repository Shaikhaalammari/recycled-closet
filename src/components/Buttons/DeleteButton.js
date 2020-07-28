import React from "react";
// //stores
import prodStore from "../../stores/prodStore";
import { DeleteButtonStyled } from "./styles";
import { useHistory } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import vendorStore from "../../stores/vendorStore";

const DeleteButton = ({ productId }) => {

  const history = useHistory();

  const handleDelete = () => {
   if(vendorId){
     vendorStore.deleteVendor(vendorId);
     history.push("./vendors");
   } else {
    prodStore.deleteProduct(productId);
    history.push("/products");
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}>
      <RiDeleteBin6Line />{" "}
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
