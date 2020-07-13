import React, { useState } from "react";
import { observer } from "mobx-react";
//stores
import prodStore from "../stores/prodStore";
// component
import ProdItem from "./ProdItem";
import SearchBar from "./SaerchBar";
// import { GrAdd } from "react-icons/gr";
import AddButton from "./Buttons/AddButton";

const ProdList = () => {
  const [query, setQuery] = useState("");
  const filteredProducts = prodStore.products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  const prodList = filteredProducts.map((product) => (
    <ProdItem product={product} key={product.id} />
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
