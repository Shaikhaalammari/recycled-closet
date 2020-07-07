import React from "react";
import { DetailWrapper, DeleteButtonStyled } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
import { Link, useParams } from "react-router-dom";

const ProdDetail = (props) => {
  //const productId = useParams().productId;
  const { productId } = useParams();

  const product = props.products.find((product) => product.id === +productId);

  return (
    <DetailWrapper>
      <Link to="/products">
        <p>Back to Products</p>
      </Link>
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
