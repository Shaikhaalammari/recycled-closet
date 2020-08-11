import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";
//stores
import authStore from "../../stores/authStore";
// component
import ProdItem from "../ProdItem";
import SearchBar from "../SearchBar";

const ProdList = ({ products }) => {
  const [query, setQuery] = useState("");
  const ProductList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProdItem product={product} key={product.id} />);
  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to="/" />;

  return (
    <>
      <SearchBar setQuery={setQuery} />
      {ProductList}
    </>
  );
};
export default observer(ProdList);
