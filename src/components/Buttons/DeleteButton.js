import React from "react";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteProduct(props.ProductId);
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}>Delete </DeleteButtonStyled>
  );
};

export default DeleteButton;
