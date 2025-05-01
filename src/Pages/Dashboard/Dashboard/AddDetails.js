import React from "react";
import { overAllData } from "../../../Data/DashboardData";

const AddDetails = () => {
  return (
    <div className="col-md-5 warehouse-outer-container">
      <div className="dropdown-container">
        <select className="custom-dropdown">
          <option value="all-time">All Warehouses</option>
          <option value="monthly">Warehouse 1</option>
          <option value="this-week">Warehouse 2</option>
          <option value="this-year">Warehouse 3</option>
        </select>
      </div>
      {overAllData.map((overAllData, index) => (
        <div className="warehouse-box" key={index}>
          <p className="warehouse-box-image">
            <img src={overAllData.image} alt={overAllData.name} />
          </p>
          <p
            className={`warehouse-box-number ${overAllData.name === "Warehouses" ? "warehouse-box-large-font" : ""}`}
          >
            {overAllData.count}
          </p>
          <p className="warehouse-box-description">{overAllData.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AddDetails;
