import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { ReactComponent as Logo } from "../../assets/ipsum1.svg";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbarWrapper">
          <span onClick={(e) => navigate("/")} className="logoWrap">
            <Logo className="navbarLogo" /> React Web Shop
          </span>
          <Link className="cartIcon" to="/cart">
            <FiShoppingCart className="navbarCart" />
            <span>({cartItems.length})</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
