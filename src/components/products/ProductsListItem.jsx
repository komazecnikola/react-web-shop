import React from "react";
import { Link } from "react-router-dom";
import "./productsListItem.css";

const ProductsListItem = ({ product }) => {
  return (
    <Link className="productItem" to={`/products/${product.id}`}>
      <div className="productInfo">
        <img className="productImage" src={product.image} alt={product.title} />
        <p className="productTitle"> {product.title} </p>
        <p className="productPrice">
          <span>Price:</span> ${product.price}
        </p>
      </div>
      <div className="productButton">Check product</div>
    </Link>
  );
};

export default ProductsListItem;
