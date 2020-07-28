import React from "react";
import { observer } from "mobx-react";
import { DetailWrapper } from "../ProdDetail/styles";
import UpdateButton from "../Buttons/UpdateButton";
import ProdList from "../ProdList";
import AddButton from "../Buttons/AddButton";
import DeleteButton from "../Buttons/DeleteButton";

const VendorDetail = () => {
  const { vendorSlug } = useParams();
  const vendor = VendorStore.vendors.find(
    (_vendor) => _vendor.slug === vendorSlug
  );
  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h4>{vendor.name}</h4>
          <img src={vendor.image} />
          <UpdateButton vendor={vendor} />
        </DetailWrapper>
      </div>
      <div className="col-12">
        <ProdList products={vendor.products} />
        <AddButton vendorId={vendor.id} />
        <DeleteButton vendorId={vendor.id} />
      </div>
    </div>
  );
};

export default obsrver(VendorDetail);
