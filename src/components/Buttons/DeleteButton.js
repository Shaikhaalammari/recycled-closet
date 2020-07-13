import React from "react";
// //stores
import prodStore from "../../stores/prodStore";
import { DeleteButtonStyled } from "../../styles";
import { useHistory } from "react-router-dom";

const DeleteButton = ({ productId }) => {
  const history = useHistory();

  const handleDelete = () => {
    prodStore.deleteProduct(productId);
    history.push("/products");
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}>Delete </DeleteButtonStyled>
  );
};

export default DeleteButton;
