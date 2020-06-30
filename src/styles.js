import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) => props.theme.backgroundcolor};
   text-align: center;
  
  }

`;

const Title = styled.h1`
  text-align: center;
  color: #a2de96;
`;

const Description = styled.h4`
  text-align: center;
  color: #438a5e;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ProductWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    color: #10375c;
    &.priceColor {
      color: #654062;
    }
  }
`;

const ShopImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
`;

export { Title, ListWrapper, ProductWrapper, Description, ShopImg };

export default GlobalStyle;
