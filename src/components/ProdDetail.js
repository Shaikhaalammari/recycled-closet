import React from "react";
import { DetailWrapper, DeleteButtonStyled } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";

const ProdDetail = (props) => {
  const product = props.product;

  return (
    <DetailWrapper>
      <p onClick={props.selectItem}>Back to Products</p>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <DeleteButton
        ProductId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </DetailWrapper>
  );
};

export default ProdDetail;
