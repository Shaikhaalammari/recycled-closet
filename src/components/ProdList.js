import React, { useState } from "react";
// component
import ProdItem from "./ProdItem";
import SearchBar from "./SaerchBar";

const ProdList = (props) => {
  const [query, setQuery] = useState("");
  const filtteredProducts = props.products.filter((product) =>
    product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
  const prodList = filtteredProducts.map((product) => (
    <ProdItem
      deleteProduct={props.deleteProduct}
      product={product}
      key={product.id}
    />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      {prodList}
    </>
  );
};
export default ProdList;
