import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) => props.theme.backgroundColor};
   text-align: center;
  
  }

`;
const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

//const DeleteButtonStyled = styled.button`
// font-size: 1em;
//margin: 1.25em;
//padding: 0.25em 1em;
// border-radius: 3px;
//////////////color: red;
///`;

const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
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

const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
    color: #438a5e;
  }
`;

const Search = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

const NavStyled = styled.nav``;

const Logo = styled(Link)`
padding: 0.75em;

img{
  width 5rem;
}
`;

const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: #e79cc2;
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
export {
  Title,
  ListWrapper,
  ThemeButton,
  ProductWrapper,
  Description,
  ShopImg,
  DeleteButtonStyled,
  DetailWrapper,
  Search,
  NavStyled,
  Logo,
  NavItem,
  customStyles,
  CreateButtonStyled,
};

export default GlobalStyle;
