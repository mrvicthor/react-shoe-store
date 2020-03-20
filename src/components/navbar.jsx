import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {ButtonContainer} from "./button";

const Navbar = props => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <h2 className="navbar-brand">mrvicthor</h2>
      </Link>

      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <FontAwesomeIcon
            className="cart-icon mr-2"
            icon={faShoppingCart}
          ></FontAwesomeIcon>
          my Cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background-color: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default Navbar;
