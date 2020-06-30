import React from "react";

//data
import products from "./products";
// style
import styles from "./styles";

function App() {
  const productsList = products.map((product) => (
    <div style={styles.product} key={product.id}>
      <img src={product.image} alt={product.name} style={styles.productImage} />
      <p style={styles.text}> {product.name}</p>
      <p style={styles.text}>{product.price} KD </p>
    </div>
  ));
  return (
    <div>
      <div>
        <h1 style={styles.text}>Recycled Closet</h1>
        <h4 style={styles.text}>More Taste, Less Waste - MiMi</h4>
        <img
          src="https://www.iconsdb.com/icons/preview/barbie-pink/recycling-xxl.png"
          alt="logo of the website"
          style={styles.shopImage}
          //this is not working
        />
      </div>

      <div style={styles.list}>{productsList}</div>
    </div>
  );
}

export default App;
