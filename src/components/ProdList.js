import React, { useState } from "react";
// component
import ProdItem from "./ProdItem";
import SearchBar from "./SaerchBar";
// import { GrAdd } from "react-icons/gr";
import AddButton from "./Buttons/AddButton";

const ProdList = ({ deleteProduct, createProduct, products }) => {
  const [query, setQuery] = useState("");
  const filtteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  const prodList = filtteredProducts.map((product) => (
    <ProdItem
      deleteProduct={deleteProduct}
      product={product}
      key={product.id}
    />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      {prodList}
      <AddButton createProduct={createProduct} />
    </>
  );
};
export default ProdList;
