import React from "react";
import { NavStyled, NavItem, ThemeButton, Logo } from "./styles";
import logo from "../../weblogo.png";
import SignupButton from "../Buttons/SignupButton";
import SigninButton from "../Buttons/SigninButton";
import authStore from "../../stores/authStore";
const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Logo className="navbar-brand" to="/">
          <img alt="logo" src={logo} />
        </Logo>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <NavItem
            className="nav-item"
            to="/vendors"
            style={{ margin: 2, float: "center" }}
          >
            Vendors
          </NavItem>
          <NavItem
            className="nav-item "
            to="/products"
            style={{ margin: 2, float: "center" }}
          >
            Products
          </NavItem>
          {authStore.user ? (
            <p>Hello, {authStore.user.username}</p>
          ) : (
            <>
              <SigninButton />
              <SignupButton />
            </>
          )}
          {authStore.user && authStore.user.role === "admin" && (
            <>
              <NavItem className="nav-item" to="/vendors">
                vendors
              </NavItem>
              <NavItem className="nav-item" to="/products">
                products
              </NavItem>
            </>
          )}
          <ThemeButton className="nav-item " onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;
