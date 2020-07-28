import React, { useState } from "react";
import Modal from "react-modal";
//stores
import vendorStore from "../../stores/vendorStore";
//styles
import { customStyles, CreateButtonStyled } from "../../styles";

const VendorModal = ({ isOpen, closeModal, oldVendor }) => {
  const [vendor, setVendor] = useState(
    oldVendor ?? {
      name: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setVendor({ ...vendor, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setVendor({ ...vendor, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    oldVendor ? prodStore.updateVendor(vendor) : prodStore.createVendor(vendor);
    closeModal();
  };
  // so when we even press enter it will submit
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Vendor Modal"
    >
      <h3>New Vendor</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={vendor.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            // value={product.image}
            onChange={handleImage}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldVendor ? "Update Vendor" : "Create New Vroduct"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ProdModal;
