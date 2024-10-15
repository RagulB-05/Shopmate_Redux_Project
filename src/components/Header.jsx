import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { Link, Navigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state) => state.cart.cartList);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="React Logo" />
        <span className="name">ShopMate</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="cart" className="items">
        <span>Cart:{products.length} </span>
      </Link>
    </header>
  );
};

export default Header;
