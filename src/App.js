import React, { useState } from "react";
//components
import ProdList from "./components/ProdList";
import ProdDetail from "./components/ProdDetail";

import { ThemeProvider } from "styled-components";

// style
import {
  Title,
  ListWrapper,
  ThemeButton,
  Description,
  ShopImg,
} from "./styles";

//products
import products from "./products";

import GlobalStyle from "./styles";

const theme = {
  light: {
    mainColor: "#242424", // font color
    backgroundColor: "#fefafb", // background color fat7
    priceColor: "#654062",
    red: "#fa1616",
  },
  dark: {
    mainColor: "#fefafb", // font color
    backgroundColor: "#242424", //background color dark
    priceColor: " #654062",
    red: "#fa1616",
  },
};

function App() {
  let [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const [product, umProduct] = useState(null); //null y3ne false
  const [_products, setproducts] = useState(products);
  const deleteProduct = (productId) => {
    const updatedproducts = _products.filter(
      (product) => product.id !== +productId
    );
    setproducts(updatedproducts);
    umProduct(null);
  };

  const setView = () =>
    product ? (
      <ProdDetail product={product} deleteProduct={deleteProduct} />
    ) : (
      <ProdList
        products={_products}
        deleteProduct={deleteProduct}
        selectedItem={selectItem}
      />
    );
  const selectItem = (productId) => {
    const selectedItem = products.find((product) => product.id === productId);
    umProduct(selectedItem);
    //y3ne if visible is true change it to false oo el3ks
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <div>
        <Title>Recycled Closet</Title>
        <ShopImg
          src="https://www.iconsdb.com/icons/preview/barbie-pink/recycling-xxl.png"
          alt="logo of the website"
        />

        <Description>More Taste, Less Waste - Mimi</Description>
      </div>
      {setView()}
      <ListWrapper></ListWrapper>
    </ThemeProvider>
  );
}

export default App;
