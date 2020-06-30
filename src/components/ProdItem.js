import React from "react";
//style
import { ProductWrapper } from "../styles";

const ProdItem = (props) => {
  return (
    <ProductWrapper>
      <img src={props.product.image} alt={props.product.name} />
      <p> {props.product.name}</p>
      <p className="priceColor">{props.product.price} KD </p>
    </ProductWrapper>
  );
};

export default ProdItem;
