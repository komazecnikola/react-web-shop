import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import "./singleProduct.css";
import Rating from "@mui/material/Rating";

function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

  const backBtn = () => {
    navigate(-1);
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
              {console.log(singleProduct.rating.rate)}
              <div className="singleProductTextWrapper">
                <div className="singleProductInfo">
                  <h2>{singleProduct.title}</h2>
                  <h1 className="singleProductPrice">${singleProduct.price}</h1>
                  <div className="singleProductRating">
                    {singleProduct.rating && (
                      <Rating
                        name="size-medium"
                        value={singleProduct.rating.rate}
                        precision={0.1}
                        readOnly
                      />
                    )}
                    <p>Based on {singleProduct.rating.count} reviews</p>
                  </div>
                  <p>{singleProduct.description}</p>
                </div>
                <div className="singleProductButtonWrapper">
                  <button className="btn">Add to Cart</button>
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
