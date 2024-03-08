import React, { useEffect, useState, useContext } from "react";
import api from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import "./singleProduct.css";

import { CartContext } from "../../context/CartContext";

import { Rating, ThinStar } from "@smastrom/react-rating";

function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const { id } = useParams();

  const backBtn = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    addToCart(singleProduct);
  };

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setSingleProduct(res.data));
  }, []);

  return (
    <div className="singleProduct">
      <div className="container">
        <button onClick={backBtn} className="backBtn">
          &#8617; Back to all products
        </button>

        {!singleProduct ? (
          <h1>Loading</h1>
        ) : (
          <div className="singleProductItem">
            <div className="grid grid-2-cols">
              <div className="singleProductImageWrapper">
                <img
                  className="singleProductImage"
                  src={singleProduct.image}
                  alt={singleProduct.name}
                />
              </div>
              <div className="singleProductTextWrapper">
                <div className="singleProductInfo">
                  <h2>{singleProduct.title}</h2>
                  <h1 className="singleProductPrice">${singleProduct.price}</h1>
                  <div className="singleProductRating">
                    {singleProduct.rating.rate && (
                      <div style={{ maxWidth: 150, width: "100%" }}>
                        <Rating
                          style={{ maxWidth: 150 }}
                          readOnly
                          value={singleProduct.rating.rate}
                          halfFillMode="svg"
                          spaceBetween="small"
                        />
                      </div>
                    )}
                    <p>Based on {singleProduct.rating.count} reviews</p>
                  </div>
                  <p>{singleProduct.description}</p>
                </div>
                <div className="singleProductButtonWrapper">
                  <button onClick={handleAddToCart} className="btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
