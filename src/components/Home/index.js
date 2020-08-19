import React from "react";
import { Redirect } from "react-router-dom";
import { Title, Description, ShopImg } from "./styles";
import authStore from "../../stores/authStore";

const Home = () => {
  // if (authStore.user.vendorSlug)
  //   return <Redirect to={`/vendors/${authStore.user.vendorSlug}`} />;

  // ely foog is causing the loading msg to appear insted of home page

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
