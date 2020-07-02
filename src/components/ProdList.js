import React, { useState } from "react";
// component
import ProdItem from "./ProdItem";
//data
import products from "../products";
//style
const ProdList = () => {
  // prouct here i can name // it whatever you want but same name is the proper coding

  const [_products, setproducts] = useState(products);
  const deleteProduct = (productId) => {
    const updatedproducts = _products.filter(
      (product) => product.id !== +productId
    );
    setproducts(updatedproducts);
  }; // it whatever you want but same name is the proper coding
  const prodList = _products.map((product) => (
    <ProdItem
      deleteProduct={deleteProduct}
      product={product}
      key={product.id}
    />
  ));
  return <div> {prodList}</div>;
};
export default ProdList;
