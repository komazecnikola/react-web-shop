import React from "react";
import ProductsListItem from "./ProductsListItem";
import "./productsList.css";

const ProductsList = ({
  products,
  categories,
  selectedCategory,
  filterProductsByCategory,
  sortOrder,
  handleSortChange,
}) => {
  return (
    <div>
      <div className="productChoose">
        <div className="inputWrapper">
          <label htmlFor="category">Filter by category:</label>
          <select
            className="input"
            id="category"
            value={selectedCategory}
            onChange={(e) => filterProductsByCategory(e.target.value)}
          >
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="inputWrapper">
          <label htmlFor="sort">Sort by price:</label>
          <select
            className="input"
            id="sort"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option hidden value="">
              Not sorted
            </option>
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </select>
        </div>
      </div>
      <div className="productList">
        {products.map((product) => (
          <ProductsListItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
