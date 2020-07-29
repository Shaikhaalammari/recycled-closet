import React from "react";
import { observer } from "mobx-react";
import { DetailWrapper } from "../ProdDetail/styles";
import UpdateButton from "../Buttons/UpdateButton";
import ProdList from "../ProdList";
import AddButton from "../Buttons/AddButton";
import DeleteButton from "../Buttons/DeleteButton";
import vendorStore from "../../stores/vendorStore";
import { useParams } from "react-router-dom";

const VendorDetail = () => {
  const { vendorSlug } = useParams();
  const vendor = vendorStore.vendors.find(
    (_vendor) => _vendor.slug === vendorSlug
  );
  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h4 color="#438a5e">{vendor.name}</h4>
          <img src={vendor.image} />
          <UpdateButton vendor={vendor} />
          <AddButton vendorId={vendor.id} />
          <DeleteButton vendorId={vendor.id} />
        </DetailWrapper>
      </div>
      <div className="col-12">
        <ProdList products={vendor.products} />
      </div>
    </div>
  );
};

export default observer(VendorDetail);
