import React from "react";
//style
import styles from "../styles";

const ProdItem = (props) => {
  return (
    <div style={styles.prop} key={props.id}>
      <img
        src={props.product.image}
        alt={props.product.name}
        style={styles.productImage}
      />
      <p style={styles.text}> {props.product.name}</p>
      <p style={styles.text}>{props.product.price} KD </p>
    </div>
  );
};

export default ProdItem;
