import React, { useState } from "react";

//components
import ProdList from "./components/ProdList";
import ProdDetail from "./components/ProdDetail";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

//products
import products from "./products";

import GlobalStyle from "./styles";
import { Route, Switch } from "react-router";

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

  const [_products, setproducts] = useState(products);
  const deleteProduct = (productId) => {
    const updatedproducts = _products.filter(
      (product) => product.id !== +productId
    );
    setproducts(updatedproducts);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar toggleTheme={toggleTheme} theme={theme} />
      <Switch>
        <Route path="/products/:productId">
          <ProdDetail products={_products} deleteProduct={deleteProduct} />
        </Route>
        <Route path="/products">
          <ProdList products={_products} deleteProduct={deleteProduct} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
