import React from "react";
import { topSellingItems } from "../../../Data/DashboardData";

const TopSellingItem = () => {
  return (
    <div className="col-md-4 sales-analysis-outer-container">
      <div className="sales-analysis-head">
          <div className="col-md-5">Top Selling Item</div>
        <div className="dropdown-container">
            <select className="custom-dropdown">
            <option value="all-time">All Time</option>
            <option value="monthly">Monthly</option>
            <option value="this-week">This Week</option>
            <option value="this-year">This Year</option>
            </select>
          </div>
        </div>
        <div className="d-md-flex justify-content-center">
        <div className="top-selling-box mt-2">
  {topSellingItems.map((topSellingItem, index) => (
    <div className="top-selling-card" key={index}>
      <p className="top-selling-name">{topSellingItem.name}</p>
      <p className="top-selling-number">
        {topSellingItem.QtySold}
        <span className="top-selling-unit"> Pcs</span>
      </p>
      <p className="top-selling-price">{topSellingItem.Revenue}</p>
    </div>
  ))}
</div>
        </div>
    </div>
  );
};

export default TopSellingItem;
