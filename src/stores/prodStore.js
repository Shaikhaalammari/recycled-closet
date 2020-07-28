import { decorate, observable } from "mobx";
import axios from "axios";
import products from "../products";

class ProdStore {
  products = [];

  fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      this.products = response.data;
    } catch (error) {
      console.error("ProdStore ->fetchProduct ->error", error);
    }
  };
  createProduct = async (newProduct) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);
      const res = await axios.post(
        "http://localhost:8000/vendors/${newProduct.vendorId}/products",
        formData
      );
      this.products.push(res.data);
    } catch (error) {
      console.log("ProdStore-> createProduct -> error", error);
    }
  };

  deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      this.products = this.products.filter(
        (product) => product.id !== +productId
      );
    } catch (error) {
      console.log("ProductStore -> deleteProduct -> error", error);
    }
  };

  updateProduct = async (updatedProduct) => {
    try {
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);
      await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        formData
      );

      const product = this.products.find(
        (product) => product.id === updatedProduct.id
      );
      for (const key in product) product[key] = updatedProduct[key];
    } catch (error) {
      console.log("ProductStore -> updateProduct -> error", error);
    }
  };
}
class ProdStore {
  products = [];
  loading = true;
}
decorate(ProdStore, {
  products: observable,
  loading: observable,
});

const prodStore = new ProdStore();
prodStore.fetchProducts();
export default prodStore;
