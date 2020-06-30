import React from "react";
// component
import ProdItem from "./ProdItem";
//data
import products from "../products";
//style

const ProdList = () =>
  products.map((product) => <ProdItem product={product} key={product.id} />);
// prouct here i can name it whatever you want but same name is the proper coding

export default ProdList;
