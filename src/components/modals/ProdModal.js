import React, { useState } from "react";
import Modal from "react-modal";
//stores
import prodStore from "../../stores/prodStore";
//styles
import { customStyles, CreateButtonStyled } from "../../styles";

const ProdModal = ({ isOpen, closeModal, oldProduct }) => {
  const [product, setProduct] = useState({
    name: oldProduct ? oldProduct.name : "",
    price: oldProduct ? oldProduct.price : 0,
    description: oldProduct ? oldProduct.description : "",
    image: oldProduct ? oldProduct.image : "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    oldProduct
      ? prodStore.updateProduct(product)
      : prodStore.createProduct(product);
    closeModal();
  };
  // so when we even press enter it will submit
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Product Modal"
    >
      <h3>New Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              type="number"
              min="10"
              className="form-control"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldProduct ? "Update Product" : "Create New Product"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ProdModal;
