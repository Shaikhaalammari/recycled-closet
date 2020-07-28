import React from "react";
//observer
import { observer } from "mobx-react";
//style
import { ProductWrapper } from "./styles";

import DeleteButton from "../Buttons/DeleteButton";
import { Link } from "react-router-dom";
import UpdateButton from "../Buttons/UpdateButton";
const ProdItem = ({ product }) => {
  console.log(product.image);
  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <p> {product.name}</p>
      <p className="priceColor">{product.price} KD </p>
      <UpdateButton product={product} />
      <DeleteButton productId={product.id} />
    </ProductWrapper>
  );
};

export default observer(ProdItem);
