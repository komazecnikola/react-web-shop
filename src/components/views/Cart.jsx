import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cart/CartItem";
import "./cart.css";
import CartForm from "../cart/CartForm";
import CartSuccess from "../cart/CartSuccess";
import CartEmpty from "../cart/CartEmpty";

const Cart = () => {
  const { cartItems, removeAllFromCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleRemoveAll = (cartItem) => {
    removeAllFromCart();
  };

  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    removeAllFromCart();
    setOrderPlaced(true);
  };

  console.log(orderPlaced);
  console.log(cartItems.length);

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

                <CartForm onSubmit={handleSubmit} />
              </div>
            </div>
          </div>
        ) : (
          <div>
            {orderPlaced ? (
              <CartSuccess totalPrice={totalPrice} />
            ) : (
              <CartEmpty totalPrice={totalPrice} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
