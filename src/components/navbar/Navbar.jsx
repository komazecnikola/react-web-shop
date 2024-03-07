import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { ReactComponent as Logo } from "../../assets/ipsum1.svg";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbarWrapper">
          <span onClick={(e) => navigate("/")} className="logoWrap">
            <Logo className="navbarLogo" /> React Web Shop
          </span>
          <FiShoppingCart className="navbarCart" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
