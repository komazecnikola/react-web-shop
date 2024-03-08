import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (singleProduct) => {
    setCartItems([...cartItems, singleProduct]);
  };

  const removeFromCart = (singleProduct) => {
    setCartItems([...cartItems].filter((item) => item.id !== singleProduct.id));
  };

  const removeAllFromCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, removeAllFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
