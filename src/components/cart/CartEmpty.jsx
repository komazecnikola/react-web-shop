import React from "react";
import { Link } from "react-router-dom";
import { FaRegFaceSadTear } from "react-icons/fa6";
import "./cartEmpty.css";

const CartEmpty = ({ totalPrice }) => {
  return (
    <div>
      <div className="cartHeader">
        <div className="cartStateWrapper">
          <h1>Empty cart</h1>
          <FaRegFaceSadTear className="cartStateIconRed" />
        </div>
        <Link className="btn removeBtn" to="/products">
          Shop Now
        </Link>
      </div>

      <div className="grid grid-two-thirds">
        <div className="itemsListWrapper">
          <div className="cartMessage">
            <h2>Looks Like Your Cart is Feeling Light!</h2>
            <h2>Ready to Start Shopping?</h2>
          </div>
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
