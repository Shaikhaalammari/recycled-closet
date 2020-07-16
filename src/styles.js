import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) => props.theme.backgroundColor};
   text-align: center;
  
  }

`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
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

export { ListWrapper, DetailWrapper, customStyles, CreateButtonStyled };

export default GlobalStyle;
