import React, { useState, useEffect } from "react";
import api from "../../utils/api.js";
import ProductsList from "../products/ProductsList.jsx";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error: ", error));
  }, []);

  useEffect(() => {
    api
      .get("/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.error("Error: ", error));
  });

  let filteredProducts = products;
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  if (sortOrder === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="productPage">
      <div className="container">
        <h1>Products</h1>
        <ProductsList
          products={filteredProducts}
          categories={categories}
          selectedCategory={selectedCategory}
          filterProductsByCategory={filterProductsByCategory}
          sortOrder={sortOrder}
          handleSortChange={handleSortChange}
        />
      </div>
    </div>
  );
}

export default Products;
