import { decorate, observable } from "mobx";
import products from "../products";

class ProdStore {
  products = products;

  createProduct = (newProduct) => {
    newProduct.id = this.products[this.products.length - 1].id + 1;
    this.products.push(newProduct);
  };
  deleteProduct = (productId) => {
    this.products = this.products.filter(
      (product) => product.id !== +productId
    );
  };
}

decorate(ProdStore, {
  products: observable,
});

const prodStore = new ProdStore();
export default prodStore;
