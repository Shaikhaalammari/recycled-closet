import React from "react";
//components
import ProdList from "./components/ProdList";

// style
import styles from "./styles";

function App() {
  return (
    <div>
      <div>
        <h1 style={styles.text}>Recycled Closet</h1>

        <img
          src="https://www.iconsdb.com/icons/preview/barbie-pink/recycling-xxl.png"
          alt="logo of the website"
          style={styles.shopImage}
        />
        <h4 style={styles.text}>More Taste, Less Waste - MiMi</h4>
      </div>
      <ProdList />
    </div>
  );
}

export default App;
