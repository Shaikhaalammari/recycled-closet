import React, { useState } from "react";
import { observer } from "mobx-react";
//stores
import prodStore from "../../stores/prodStore";
// component
import ProdItem from "../ProdItem";
import SearchBar from "../SearchBar";
// import { GrAdd } from "react-icons/gr";
import AddButton from "../Buttons/AddButton";

const ProdList = ({ products }) => {
  const [query, setQuery] = useState("");
  const ProdList = products
    .filter((product) => product.name.toLowerCase().query.toLowerCase())
    .map((prouct) => <ProdItem product={product} key={product.id} />);
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
