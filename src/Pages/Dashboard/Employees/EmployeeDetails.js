import React, { useState } from "react";
import Header from "../../../images/employeeHeader.svg";
import PersonIcon from "@mui/icons-material/Person";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EmployeeBasicInfo from "./EmployeeBasicInfo";
import EmployeeAddress from "./EmployeeAddress";
import EmployeeAcDetails from "./EmployeeAcDetails";
import EmployeeProfDetails from "./EmployeeProfDetails";
import CloseIcon from "@mui/icons-material/Close";

const EmployeeDetails = ({ backToList }) => {
  const [activeTab, setActiveTab] = useState("Basic Information");

  const renderContent = () => {
    switch (activeTab) {
      case "Basic Information":
        return <EmployeeBasicInfo />;
      case "Address":
        return <EmployeeAddress />;
      case "Account details":
        return <EmployeeAcDetails />;
      case "Professional Information":
        return <EmployeeProfDetails />;
      default:
        return <EmployeeBasicInfo />;
    }
  };

  const employeeDetails = [
    "Basic Information",
    "Address",
    "Account details",
    "Professional Information",
  ];
  return (
    <div className="purchase-list">
      <div className="employee-header-container">
        <img src={Header} alt="employee-header" className="employee-header" />
        <div className="emp-cancel-icon personAvatar" onClick={backToList}>
          <CloseIcon />
        </div>
      </div>
      <div className="employee-profile">
        <PersonIcon style={{ width: "50px", height: "50px" }} />
      </div>
      <div className="emp-detail">
        <div className="d-md-flex align-items-center">
          <div className="fw-bold">Rahul</div>
          <div className="emp-id">#867364786</div>
          <div className="emp-action">
            <div className="block-text">Block</div>
            <div className="personAvatar cursor-pointer">
              <EditOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="emp-role">Sales person</div>
        <div className="product-navigation">
          {employeeDetails.map((tab) => (
            <div
              key={tab}
              className={`tab-item ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <hr className="inventory-divider" />
        {renderContent()}
      </div>
    </div>
  );
};

export default EmployeeDetails;
