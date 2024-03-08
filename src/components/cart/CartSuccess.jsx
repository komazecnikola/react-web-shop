import React from "react";
import { Link } from "react-router-dom";
import "./cartSuccess.css";
import { FaRegFaceSmile } from "react-icons/fa6";

const CartSuccess = ({ totalPrice }) => {
  return (
    <div>
      <div className="cartHeader">
        <div className="cartStateWrapper">
          <h1>Order placed</h1>
          <FaRegFaceSmile className="cartStateIconGreen" />
        </div>
        <Link className="btn removeBtn" to="/products">
          Shop More
        </Link>
      </div>

      <div className="grid grid-two-thirds">
        <div className="itemsListWrapper">
          <div className="cartMessage">
            <h2>Your Order Has Been Successfully Placed.</h2>
            <h2>Thank You for Shopping with Us!</h2>
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

export default CartSuccess;
