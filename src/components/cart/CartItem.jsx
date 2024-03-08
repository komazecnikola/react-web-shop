import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartItem.css";

const CartItem = ({ item }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleSingleRemove = () => {
    removeFromCart(item);
  };

  return (
    <li className="cartItem">
      <div className="cartItemImgWrapper">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="cartItemTextWrapper">
        <p className="cartTitle">{item.title}</p>
        <span className="cartCategory"> {item.category} </span>
      </div>
      <div className="cartThirdWrapper">
        <span className="cartPrice"> ${item.price} </span>
        <button className="singleRemoveBtn" onClick={handleSingleRemove}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
