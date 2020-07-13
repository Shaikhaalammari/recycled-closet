import React from "react";
//style
import { ProductWrapper, DeleteButtonStyled } from "../styles";
import { GrAdd } from "react-icons/gr";

// product
import product from "../products";
import DeleteButton from "./Buttons/DeleteButton";
import { Link } from "react-router-dom";
import prodStore from "../stores/prodStore";
const ProdItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <p> {product.name}</p>
      <p className="priceColor">{product.price} KD </p>
      <DeleteButton
        productId={product.id}
        deleteProduct={prodStore.deleteProduct}
      />
    </ProductWrapper>
  );
};

export default ProdItem;
