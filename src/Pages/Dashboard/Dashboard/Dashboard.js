import React from "react";
import AddDetails from "./AddDetails";
import ProductDetails from "./ProductDetails";
import SalesAnalysis from "./SalesAnalysis";
import StockAvailability from "./StockAvailability";
import ProductSale from "./ProductSale";
import SalesActivity from "./SalesActivity";
import TopSellingItem from "./TopSellingItem";

const Dashboard = () => {
  return (
    <div className="dashboard-padding">
      <div className="dashboard-row gap-2">
        <AddDetails />
        <ProductDetails />
      </div>
      <div className="dashboard-row mt-3 gap-2">
        <SalesAnalysis />
        <StockAvailability />
        <TopSellingItem />
      </div>
      <div className="dashboard-row mt-3">
        <ProductSale />
      </div>
    </div>
  );
};

export default Dashboard;
