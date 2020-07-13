import React from "react";
//style
import { ProductWrapper } from "../styles";

import DeleteButton from "./Buttons/DeleteButton";
import { Link } from "react-router-dom";
const ProdItem = ({ product }) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <p> {product.name}</p>
      <p className="priceColor">{product.price} KD </p>
      <DeleteButton productId={product.id} />
    </ProductWrapper>
  );
};

export default ProdItem;
