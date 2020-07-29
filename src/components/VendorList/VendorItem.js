import React from "react";
import { Link } from "react-router-dom";
import { VendorItemImage } from "./styles";

const VendorItem = ({ vendor }) => {
  return (
    <Link to={`/vendors/${vendor.slug}`}>
      <VendorItemImage src={vendor.image} alt={vendor.name} />
    </Link>
  );
};

export default VendorItem;
