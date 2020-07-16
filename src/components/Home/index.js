import React from "react";
import { Title, Description, ShopImg } from "./styles";

const Home = () => {
  return (
    <>
      <Title>Recycled Closet</Title>
      <ShopImg
        src="https://www.iconsdb.com/icons/preview/barbie-pink/recycling-xxl.png"
        alt="logo of the website"
      />

      <Description>More Taste, Less Waste - Mimi</Description>
    </>
  );
};

export default Home;
