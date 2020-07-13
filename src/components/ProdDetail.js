import React from "react";
//store
import prodStore from "../stores/prodStore";
import { DetailWrapper } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
import { Link, useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";

const ProdDetail = () => {
  //const productId = useParams().productId;
  const { productId } = useParams();

  const product = prodStore.products.find(
    (product) => product.id === +productId
  );
  if (!product) return <Redirect to="/products" />;
  return (
    <DetailWrapper>
      <Link to="/products">
        <p>Back to Products</p>
      </Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <DeleteButton productId={product.id} />
    </DetailWrapper>
  );
};

export default ProdDetail;
