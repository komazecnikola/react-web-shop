import React from "react";
import "./pageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="page404">
        <div className="wrapper404">
          <span className="headStyleHuge">404</span>
          <h1>Lost in the Aisles</h1>
          <button onClick={(e) => navigate("/")} className="backBtn">
            &#8617; Go Back to Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
