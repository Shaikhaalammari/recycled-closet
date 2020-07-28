import React from "react";
import { VendorItemImage } from "./styles";

const VendorItem = ({ vendor }) => {
  return <VendorItemImage src={vendor.image} alt={vendor.name} />;
};

export default VendorItem;
