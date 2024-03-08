import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cart/CartItem";
import "./cart.css";
import { Link } from "react-router-dom";
import CartForm from "../cart/CartForm";

const Cart = () => {
  const { cartItems, removeAllFromCart } = useContext(CartContext);

  const handleRemoveAll = (cartItem) => {
    removeAllFromCart();
  };

  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price;
  });

  return (
    <div className="cartPage">
      <div className="container">
        {cartItems.length > 0 ? (
          <div>
            <div className="cartHeader">
              <h1>Shopping cart</h1>
              <button className="btn removeBtn" onClick={handleRemoveAll}>
                Remove all
              </button>
            </div>

            <div className="grid grid-two-thirds">
              <div className="itemsListWrapper">
                <ul className="itemsList">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </ul>
              </div>
              <div className="totalWrapper">
                <div className="orderWrap">
                  <h4>Order summary</h4>
                  <h3>${totalPrice.toFixed(2)}</h3>
                </div>

                <CartForm />
              </div>
            </div>
          </div>
        ) : (
          <div className="cartEmpty">
            <h1>Your Cart is Waiting to be Filled!</h1>
            <Link className="btn removeBtn" to="/products">
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
