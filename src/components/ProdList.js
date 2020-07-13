import React, { useState } from "react";
import { observer } from "mobx-react";
//stores
import prodStore from "../stores/prodStore";
// component
import ProdItem from "./ProdItem";
import SearchBar from "./SaerchBar";
// import { GrAdd } from "react-icons/gr";
import AddButton from "./Buttons/AddButton";

const ProdList = ({ deleteProduct, createProduct, products }) => {
  const [query, setQuery] = useState("");
  const filtteredProducts = prodStore.products.filter((product) =>
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
      <AddButton />
    </>
  );
};
export default observer(ProdList);
