import React, { useEffect, useRef } from "react";
import { productData } from "../../../Data/DashboardData";

const ProductDetails = () => {
  return (
    <div className="col-md-7 product-outer-container">
      <div className="dropdown-container">
        <select className="custom-dropdown">
          <option value="all-time">All Time</option>
          <option value="monthly">Monthly</option>
          <option value="this-week">This Week</option>
          <option value="this-year">This Year</option>
        </select>
      </div>
      {productData.map((productDetail, index) => (
        <div className="product-box" key={index}>
          <p className="product-box-image">
            <img src={productDetail.image} alt={productDetail.name} />
          </p>
          <p className="product-box-number">{productDetail.count}</p>
          <p className="warehouse-box-description">{productDetail.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
