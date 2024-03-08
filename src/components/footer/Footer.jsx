import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footerWrapper">
          <p>
            {" "}
            &copy; {year} React Web Shop by{" "}
            <a
              className="footerName"
              target="_blank"
              rel="noreferrer"
              href="https://komazec.dev/"
            >
              Nikola Komazec
            </a>{" "}
            (Hvala Tamara)
          </p>

          <div className="footerLinks">
            <Link to={"/privacy-policy"} className="footerLink">
              Privacy policy
            </Link>
            <Link to={"/terms-of-service"} className="footerLink">
              Terms of service
            </Link>
            <Link to={"/contact-us"} className="footerLink">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
