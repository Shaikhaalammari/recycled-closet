import React, { useState } from "react";
//components
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
//styles
import GlobalStyle from "./styles";
//routes
import Routes from "./components/Routes";
import prodStore from "./stores/prodStore";

const theme = {
  light: {
    mainColor: "#242424", // font color
    backgroundColor: "#fefafb", // background color fat7
    priceColor: "#654062",
    red: "#fa1616",
    lightPink: "#df5e88",
    update: "#438a5e",
  },
  dark: {
    mainColor: "#fefafb", // font color
    backgroundColor: "#242424", //background color dark
    priceColor: " #654062",
    red: "#fa1616",
    lightPink: "#df5e88",
    update: "#438a5e",
  },
};

function App() {
  const savedTheme = localStorage.getItem("theme") ?? "light";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      {vendorStore.loading || prodStore.loading ? (
        <h1>Loadinggg</h1>
      ) : (
        <Routes />
      )}
      <Routes />
    </ThemeProvider>
  );
}

export default observer(App);
