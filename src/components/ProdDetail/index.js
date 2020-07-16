import React from "react";
//store
import prodStore from "../../stores/prodStore";
import { DetailWrapper } from "./styles";
import DeleteButton from "../Buttons/DeleteButton";
import { Link, useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import UpdateButton from "../Buttons/UpdateButton";
import ProdModal from "../modals/ProdModal";

const ProdDetail = ({ openModal, isOpen, closeModal }) => {
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
      <ProdModal isOpen={isOpen} closeModal={closeModal} oldProduct={product} />
      <UpdateButton product={product} />
    </DetailWrapper>
  );
};

export default ProdDetail;
