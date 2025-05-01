import React, { useState, lazy, Suspense } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { InputGroup, Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Table from "react-bootstrap/Table";
const WarehouseDetails = lazy(() => import("./WarehouseDetails"));

const WarehouseOverView = ({ backToList }) => {
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);
  const [openWarehouseDetails, setOpenWarehouseDetails] = useState(false);

  return (
    <div>
      {openWarehouseDetails ? (
        <Suspense
          fallback={
            <p className="lazy-loading-text">
              Loading Floor Management Details...
            </p>
          }
        >
          <WarehouseDetails
            backToList={() => setOpenWarehouseDetails(false)}
          />
        </Suspense>
      ) : (
        <div className="purchase-list">
          <h2>Floor Management</h2>
          <button onClick={backToList} className="goBack-btn">
            <span>
              <ArrowBackIosIcon />
            </span>
            Back
          </button>
          <div className="sales-return d-md-flex justify-content-between">
            <div className="col-md-4">
              <InputGroup className="search-input">
                <Form.Control
                  className="text-field search-icon-btn"
                  placeholder="Search here"
                  aria-label="Search"
                />
                <div className="divider"></div>
                <Button variant="outline-secondary" className="search-icon-btn">
                  <FaSearch />
                </Button>
              </InputGroup>
            </div>
            <div className="col-md-4 d-md-flex justify-content-end">
              {isSelectAllChecked && (
                <>
                  <button type="button" className="btn floor-edit-btn">
                    Edit
                  </button>
                  <button type="button" className="btn floor-delete-btn">
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="table-container mt-5 mx-4">
            <Table bordered className="custom-table sales-in-outbound-table">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      onChange={() =>
                        setIsSelectAllChecked(!isSelectAllChecked)
                      }
                    />
                  </th>
                  <th>Warehouse name</th>
                  <th>Warehouse Manager</th>
                  <th>Location</th>
                  <th>Created on</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td
                    className="purchase-id"
                    onClick={() => setOpenWarehouseDetails(true)}
                  >
                    Warehouse 1
                  </td>
                  <td>xxxxxxxxxxxxx</td>
                  <td>xxxxxxxxxxxxx</td>
                  <td>12/05/2024,1:00 AM</td>
                  <td>Active</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default WarehouseOverView;
