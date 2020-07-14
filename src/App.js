import React, { useState } from "react";

//components
import ProdList from "./components/ProdList";
import ProdDetail from "./components/ProdDetail";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import GlobalStyle from "./styles";
import { Route, Switch } from "react-router";

const theme = {
  light: {
    mainColor: "#242424", // font color
    backgroundColor: "#fefafb", // background color fat7
    priceColor: "#654062",
    red: "#fa1616",
    lightPink: "#df5e88",
  },
  dark: {
    mainColor: "#fefafb", // font color
    backgroundColor: "#242424", //background color dark
    priceColor: " #654062",
    red: "#fa1616",
    lightPink: "#df5e88",
  },
};

function App() {
  let [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar toggleTheme={toggleTheme} theme={theme} />
      <Switch>
        <Route path="/products/:productId">
          <ProdDetail />
        </Route>
        <Route path="/products">
          <ProdList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
