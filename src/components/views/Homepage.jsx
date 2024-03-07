import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import heroImg from "../../assets/img/hero1.webp";
import { ReactComponent as Ipsum2 } from "../../assets/ipsum2.svg";
import { ReactComponent as Ipsum4 } from "../../assets/ipsum4.svg";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";

function Homepage() {
  return (
    <div className="container">
      <div className="homePage">
        <div className="grid grid-2-cols">
          <div className="homeHeroText">
            <h1>Find Quality Products for Every Need at React Web Shop!</h1>
            <p className="subtitle">
              From fashion to electronics, we've got you covered with top-notch
              products.
            </p>
            <Link to={"/products"} className="btn heroBtn">
              Shop Now
            </Link>
            <div className="ipsumLogos">
              <Ipsum4 />
              <Ipsum2 />
            </div>
            <div className="payWith">
              <p>Pay with Bitcoin and Ether!</p>
              <FaBitcoin />
              <FaEthereum />
            </div>
          </div>
          <div className="homeHeroImg">
            <img src={heroImg} alt="smilling man in green shirt" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
