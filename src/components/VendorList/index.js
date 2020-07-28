import React, { useState } from "react";
//observer
import { observer } from "mobx-react";
// Styles
import { Title } from "../../styles";
//component
import VendorItem from "./VendorItem";
//store
import vendorStore from "../../stores/vendorStore";

const [query, setQuery] = useState("");

const vendorList = vendorStore.vendors
  .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
  .map((vendor) => <VendorItem vendor={vendor} key={vendor.id} />);

const VendorList = () => {
  return (
    <div className="container">
      <Title>Vendors</Title>
    </div>
  );
};

export default observer(VendorList);
