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
  createProduct = (newProduct) => {
    newProduct.id = this.products[this.products.length - 1].id + 1;
    this.products.push(newProduct);
  };
  deleteProduct = (productId) => {
    this.products = this.products.filter(
      (product) => product.id !== +productId
    );
  };
  updateProduct = (updatedProduct) => {
    const product = this.products.find(
      (product) => product.id === updatedProduct.id
    );

    for (const key in product) product[key] = updatedProduct[key];
  };
}

decorate(ProdStore, {
  products: observable,
});

const prodStore = new ProdStore();
prodStore.fetchProducts();
export default prodStore;
