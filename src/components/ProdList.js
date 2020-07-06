import React from "react";
// component
import ProdItem from "./ProdItem";
//data

//style
const ProdList = (props) => {
  // prouct here i can name // it whatever you want but same name is the proper coding

  // it whatever you want but same name is the proper coding
  const prodList = props.products.map((product) => (
    <ProdItem
      deleteProduct={props.deleteProduct}
      selectedItem={props.selectedItem}
      product={product}
      key={product.id}
    />
  ));
  return <div> {prodList}</div>;
};
export default ProdList;
