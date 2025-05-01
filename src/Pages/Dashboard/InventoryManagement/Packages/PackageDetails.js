import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import Table from "react-bootstrap/Table";
import NewShipment from "./NewShipment";
const PackageDetails = ({ backToList }) => {
  const [openPackageShipment, setPackageShipment] = useState(false);
  const handlePackageShipment = () => {
    setPackageShipment(true);
  };
  return (
    <div>
      {openPackageShipment ? (
        <NewShipment
          backToList={() => setPackageShipment(!setPackageShipment)}
        />
      ) : (
        <div className="purchase-list">
          <h2>Packages</h2>
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
            <div
              className="action-btn print-btn"
              onClick={handlePackageShipment}
            >
              Ship
            </div>
            <div className="divider"></div>
            <div className="action-btn delete-btn">
              <DeleteOutlineSharpIcon className="action-icon" />
              Delete
            </div>
            <div className="divider"></div>
          </div>
          <div className="sales-invoice-outer-card mt-5">
            <div className="package-label">Not shipped</div>
            <div className="sales-invoice-detail">
              <div className="sales-invoice">
                <div></div>
                <div className="sales-order-date">
                  <div className="fw-bold fs-5">Package</div>
                  <div className="sales-id-text">Package id:PK-970</div>
                </div>
              </div>
              <div className="package-details">
                <div className="ms-5 package-order-date">
                  Order date:12/08/2024
                </div>
                <div>Sales order:SO-7689</div>
                <div className="me-5">Total quantity:2</div>
              </div>
              <div className="sales-invoice">
                <div className="sales-order-bill">
                  <div className="fw-bold">Bill to</div>
                  <div>xxxxxxxxxxxx</div>
                  <div>xxxxxxxxxxxx</div>
                  <div>xxxxxxxxxxxx</div>
                </div>
              </div>
              <div className="row invoice-table">
                <Table className="table-content sales-invoice-table">
                  <thead>
                    <tr>
                      <th>Item name</th>
                      <th>Ordered</th>
                      <th>Packed</th>
                      <th>QTY to pack</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>xxxxxxxxxxxxxxx</td>
                      <td>2</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetails;
