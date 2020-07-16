import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavStyled, NavItem, ThemeButton, Logo } from "./styles";
import logo from "../../weblogo.png";
const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Logo className="navbar-brand" to="/">
          <img alt="logo" src={logo} />
        </Logo>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <NavItem
            className="nav-item "
            to="/products"
            style={{ margin: 10, float: "center" }}
          >
            {" "}
            Products
          </NavItem>

          <ThemeButton className="nav-item " onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;
