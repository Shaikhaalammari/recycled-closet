import React, { useState } from "react";
//observer
import { observer } from "mobx-react";
// Styles
import { Title, ListWrapper } from "./styles";

//component
import VendorItem from "./VendorItem";
//store
import vendorStore from "../../stores/vendorStore";
import AddButton from "../Buttons/AddButton";

const VendorList = () => {
  const [query, setQuery] = useState("");

  const vendors = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => <VendorItem vendor={vendor} key={vendor.id} />);

  return (
    <div className="container">
      <Title>Vendors</Title>
      <ListWrapper>{vendors}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(VendorList);
