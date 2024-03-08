import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = ({ totalPrice }) => {
  return (
    <div>
      <div className="cartHeader">
        <h1>Shopping cart</h1>
        <Link className="btn removeBtn" to="/products">
          Shop Now
        </Link>
      </div>

      <div className="grid grid-two-thirds">
        <div className="itemsListWrapper">
          <h2>Your Cart is Waiting to be Filled!</h2>
        </div>
        <div className="totalWrapper">
          <div className="orderWrap">
            <h4>Order summary</h4>
            <h3>${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
