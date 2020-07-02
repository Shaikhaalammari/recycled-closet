import React, { useState } from "react";
//components
import ProdList from "./components/ProdList";

import { ThemeProvider } from "styled-components";

// style
import {
  Title,
  ListWrapper,
  ThemeButton,
  Description,
  ShopImg,
} from "./styles";

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
      <ListWrapper>
        <ProdList />
      </ListWrapper>
    </ThemeProvider>
  );
}

export default App;
