import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { ReactComponent as Logo } from "../../assets/logoipsum.svg";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbarWrapper">
          <Logo className="navbarLogo" onClick={(e) => navigate("/")} />
          <FiShoppingCart className="navbarCart" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
