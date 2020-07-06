import React from "react";
import { DetailWrapper, DeleteButtonStyled } from "../styles";

const ProdDetail = (props) => {
  const product = props.product;
  const handleDelete = () => {
    props.deleteProduct(props.product.id);
  };

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete </DeleteButtonStyled>
    </DetailWrapper>
  );
};

export default ProdDetail;
