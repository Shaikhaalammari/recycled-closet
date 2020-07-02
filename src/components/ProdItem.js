import React from "react";
//style
import { ProductWrapper, DeleteButtonStyled } from "../styles";

const ProdItem = (props) => {
  const handleDelete = () => {
    props.deleteProduct(props.product.id);
  };

  return (
    <ProductWrapper>
      <img src={props.product.image} alt={props.product.name} />
      <p> {props.product.name}</p>
      <p className="priceColor">{props.product.price} KD </p>
      <DeleteButtonStyled onClick={handleDelete}>Delete </DeleteButtonStyled>
    </ProductWrapper>
  );
};

export default ProdItem;
