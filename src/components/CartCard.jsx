import React from "react";
import "./CartCard.css";
import { useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";

const CartCard = ({ product }) => {
  const { name, price, image } = product;
  const dispatch = useDispatch();
  return (
    <div className="cartCard">
      <img src={image} alt="CartProductImage" />
      <p>{name}</p>
      <p>₹{price}</p>
      <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  );
};

export default CartCard;
