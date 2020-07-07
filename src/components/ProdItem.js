import React from "react";
//style
import { ProductWrapper, DeleteButtonStyled } from "../styles";
// product
import product from "../products";
import DeleteButton from "./Buttons/DeleteButton";

const ProdItem = (props) => {
  const product = props.product;
  return (
    <ProductWrapper>
      <img
        src={product.image}
        alt={product.name}
        onClick={() => props.selectedItem(product.id)}
      />
      <p> {product.name}</p>
      <p className="priceColor">{product.price} KD </p>
      <DeleteButton
        ProductId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </ProductWrapper>
  );
};

export default ProdItem;
