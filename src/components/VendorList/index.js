import React, { useState } from "react";
//observer
import { observer } from "mobx-react";
// Styles
import { Title, ListWrapper } from "./styles";
//redirect
import { Redirect } from "react-router-dom";
//component
import VendorItem from "./VendorItem";
//store
import vendorStore from "../../stores/vendorStore";
import AddButton from "../Buttons/AddButton";
import authStore from "../../stores/authStore";

const VendorList = () => {
  const [query] = useState("");

  const vendors = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => <VendorItem vendor={vendor} key={vendor.id} />);
  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to="/" />;
  return (
    <div className="container">
      <Title>Vendors</Title>
      <ListWrapper>{vendors}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(VendorList);
