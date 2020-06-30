import React from "react";
//components
import ProdList from "./components/ProdList";

import { ThemeProvider } from "styled-components";

// style
import { Title, ListWrapper, Description, ShopImg } from "./styles";
import GlobalStyle from "./styles";

function App() {
  const theme = {
    backgroundcolor: "#ffe9c5",
    maincolor: "pink",
    pricecolor: "green",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
