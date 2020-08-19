import React, { useState } from "react";
import { observer } from "mobx-react";
import {
  NavStyled,
  NavItem,
  ThemeButton,
  Logo,
  UsernameStyled,
} from "./styles";
//modals
import VendorModal from "../modals/VendorModal";
import logo from "../../weblogo.png";
import SignupButton from "../Buttons/SignupButton";
import SigninButton from "../Buttons/SigninButton";
import authStore from "../../stores/authStore";
import { FiLogOut } from "react-icons/fi";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Logo className="navbar-brand" to="/">
          <img alt="logo" src={logo} />
        </Logo>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          {authStore.user ? (
            <>
              <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
              <FiLogOut onClick={authStore.signout} size="2em" color="pink" />
            </>
          ) : (
            <>
              <SigninButton />
              <SignupButton />
            </>
          )}
          {authStore.user && authStore.user.role === "admin" ? (
            <>
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
            </>
          ) : null}
          {authStore.user && !authStore.user.vendorSlug && (
            <UsernameStyled onClick={openModal}>Create Vendor</UsernameStyled>
          )}
          <VendorModal isOpen={isOpen} closeModal={closeModal} />

          <ThemeButton className="nav-item " onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </ul>
      </div>
    </NavStyled>
  );
};

export default observer(NavBar);
