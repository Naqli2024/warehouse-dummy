import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import { InputGroup, Form } from "react-bootstrap";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StockTransferDetails = ({ backToList }) => {
  const [openStatus, setOpenStatus] = useState(null);
  const [status, setStatus] = useState("In-transit");

  const handleStatusChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Delivered") {
      setStatus("Delivered");
    } else if (selectedValue === "Pending") {
      setStatus("Pending");
    } else {
      setStatus("In-transit");
    }
  };

  return (
    <div className="purchase-list">
      <h2>Transfer Log</h2>
      <button onClick={backToList} className="goBack-btn">
        <span>
          <ArrowBackIosIcon />
        </span>
        Back
      </button>
      <div className="edit-print-del-btn">
        <div className="action-btn edit-btn">
          <EditOutlinedIcon className="action-icon" />
          Edit
        </div>
        <div className="divider"></div>
        <div className="action-btn print-btn">
          <PrintOutlinedIcon className="action-icon" />
          Print
        </div>
        <div className="divider"></div>
        <Form.Select
          aria-label="Default select example"
          className="transferLog-dropdown"
          defaultValue="1"
          onChange={handleStatusChange}
        >
          <option value="1" disabled>
            Update Status
          </option>
          <option value="In-transit">Convert to In-transit</option>
          <option value="Pending">Convert to Pending</option>
          <option value="Delivered">Convert to Delivered</option>
        </Form.Select>
        <div className="divider"></div>
        <div className="action-btn delete-btn">
          <DeleteOutlineSharpIcon className="action-icon" />
          Delete
        </div>
        <div className="divider"></div>
      </div>
      <div>
        <p className="transfer-status">
          {status == "In-transit" ? (
            <p className="transfer-transit">In-transit</p>
          ) : status == "Pending" ? (
            <p className="transfer-pending">Pending</p>
          ) : (
            <p className="transfer-delivered">Delivered</p>
          )}
        </p>
      </div>
      <div className="transferLog-container">
        <div className="col-md-3 store">
          <div className="transfer-card">
            <p>Source Rack</p>
            <p className="fw-bold">3</p>
          </div>
          <div className="transferLog-vertical-divider"></div>
          <div className="transfer-card">
            <p>Dest.Rack</p>
            <p className="fw-bold">2</p>
          </div>
        </div>
        <div className="col-md-3 store">
          <div className="transfer-card">
            <p>Source Shelf</p>
            <p className="fw-bold">A</p>
          </div>
          <div className="transferLog-vertical-divider"></div>
          <div className="transfer-card">
            <p>Dest.Shelf</p>
            <p className="fw-bold">B</p>
          </div>
        </div>
        <div className="col-md-3 store">
          <div className="transfer-card">
            <p>Source Shelf Space</p>
            <p className="fw-bold">A4</p>
          </div>
          <div className="transferLog-vertical-divider"></div>
          <div className="transfer-card">
            <p>Dest.Shelf Space</p>
            <p className="fw-bold">B2</p>
          </div>
        </div>
        <div className="col-md-3 store">
          <div className="transfer-card">
            <p>Contact Person</p>
            <p className="fw-bold">Jomal</p>
          </div>
          <div className="transferLog-vertical-divider"></div>
          <div className="transfer-card">
            <p>Contact Person</p>
            <p className="fw-bold">Jason</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockTransferDetails;
