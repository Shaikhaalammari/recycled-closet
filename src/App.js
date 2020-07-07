import React, { useState } from "react";
//components
import ProdList from "./components/ProdList";
import ProdDetail from "./components/ProdDetail";

import { ThemeProvider } from "styled-components";
import Home from "./components/Home";

// style
import { ListWrapper, ThemeButton } from "./styles";

//products
import products from "./products";

import GlobalStyle from "./styles";
import SearchBar from "./components/SaerchBar";
import { Route, Switch } from "react-router";
import { Link, useHistory } from "react-router-dom";

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

  const selectItem = (productId) => {
    const selectedItem = products.find((product) => product.id === productId);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Link to="/products" style={{ margin: 10, float: "center" }}>
        {" "}
        Products
      </Link>
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
      <ListWrapper></ListWrapper>
    </ThemeProvider>
  );
}

export default App;
