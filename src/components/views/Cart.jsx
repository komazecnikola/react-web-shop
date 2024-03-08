import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cart/CartItem";
import "./cart.css";
import { Link } from "react-router-dom";
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

  //   let showItems = false;
  //   if (!orderPlaced && cartItems.length > 0) {
  //     showItems = true;
  //   }

  //   console.log("items: ", cartItems.length);
  //   console.log("order: ", orderPlaced);
  //   console.log("show items: ", showItems);

  //   let showEmpty = false;
  //   if (!orderPlaced && cartItems.length === 0) {
  //     showEmpty = true;
  //   }

  //   console.log("items: ", cartItems.length);
  //   console.log("order: ", orderPlaced);
  //   console.log("show empty: ", showEmpty);

  //   let showSuccess = false;
  //   if (orderPlaced && cartItems.length === 0) {
  //     showSuccess = true;
  //   }

  //   console.log("items: ", cartItems.length);
  //   console.log("order: ", orderPlaced);
  //   console.log("show success: ", showSuccess);

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

// return (
//     <div className="cartPage">
//       <div className="container">
//         {cartItems.length > 0 ? (
//           <div>
//             {!orderPlaced ? (
//               <div>
//                 <div className="cartHeader">
//                   <h1>Shopping cart</h1>
//                   <button className="btn removeBtn" onClick={handleRemoveAll}>
//                     Remove all
//                   </button>
//                 </div>

//                 <div className="grid grid-two-thirds">
//                   <div className="itemsListWrapper">
//                     <ul className="itemsList">
//                       {cartItems.map((item) => (
//                         <CartItem key={item.id} item={item} />
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="totalWrapper">
//                     <div className="orderWrap">
//                       <h4>Order summary</h4>
//                       <h3>${totalPrice.toFixed(2)}</h3>
//                     </div>

//                     <CartForm />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <CartSuccess onSubmit={handleSubmitOrder} />
//             )}{" "}
//           </div>
//         ) : (
//           <div>
//             <div className="cartHeader">
//               <h1>Shopping cart</h1>
//               <Link className="btn removeBtn" to="/products">
//                 Shop Now
//               </Link>
//             </div>

//             <div className="grid grid-two-thirds">
//               <div className="itemsListWrapper">
//                 <h2>Your Cart is Waiting to be Filled!</h2>
//               </div>
//               <div className="totalWrapper">
//                 <div className="orderWrap">
//                   <h4>Order summary</h4>
//                   <h3>${totalPrice.toFixed(2)}</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
