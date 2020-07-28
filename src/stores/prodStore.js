import { decorate, observable } from "mobx";
import axios from "axios";
import products from "../products";

class ProdStore {
  products = products;

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
      const fromData = new FormData();
      formData.append("name", newProduct.name);
      for (const key in newProduct) fromData.append(key, newProduct[key]);
      const res = await axios.post("http://localhost:8000/products", fromData);
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
      await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        updatedProduct
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

decorate(ProdStore, {
  products: observable,
});

const prodStore = new ProdStore();
prodStore.fetchProducts();
export default prodStore;
