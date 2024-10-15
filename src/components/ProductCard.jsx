import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { add } from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const { id, name, price, image } = product;
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = cartList.find((item) => item.id === id);
    productIsInCart ? setIsInCart(true) : setIsInCart(false);
  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt="Product image" />
      <p className="name">{name}</p>
      <div className="action">
        <p>₹{price}</p>

        {isInCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
