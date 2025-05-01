import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import Table from "react-bootstrap/Table";
import { InputGroup, Form, Button } from "react-bootstrap";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShipmentDetails from "./ShipmentDetails";
const ProductNewShipment = ({ backToList }) => {
  const [openShipmentDetails, setShipmentDetails] = useState(false);
  const categoryOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "furniture", label: "Furniture" },
  ];
  const handleSaveNewShipmentDetails = () => {
    setShipmentDetails(true);
  };
  return (
    <div>
      {openShipmentDetails ? (
        <ShipmentDetails
          backToList={() => setShipmentDetails(!setShipmentDetails)}
        />
      ) : (
        <div className="purchase-list">
          <h2>New Shipments</h2>
          <button onClick={backToList} className="goBack-btn">
            <span>
              <ArrowBackIosIcon />
            </span>
            Back
          </button>
          <div className="new-package-form">
          <div className="new-package-name-sales mb-4">
          <Form.Group className="col-md-5 customer-name-dropdown">
            <Form.Label className="custom-label">Customer name</Form.Label>
            <div className="form-group inventory-custom-dropdown">
              <Select
                options={categoryOptions}
                isSearchable={true}
                classNamePrefix="custom-select"
              />
            </div>
          </Form.Group>
          <Form.Group className="col-md-5 customer-name-dropdown me-md-5">
            <Form.Label className="custom-label">Sales order</Form.Label>
            <div className="form-group inventory-custom-dropdown">
              <Select
                options={categoryOptions}
                isSearchable={true}
                classNamePrefix="custom-select"
              />
            </div>
          </Form.Group>
        </div>
            <hr />
            <div className="new-package-name-sales mb-4">
              <div className="col-md-4 mt-3">
                <Form.Group>
                  <Form.Label className="custom-label">Package Slip</Form.Label>
                  <InputGroup className="mt-1">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                    />
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-4 mt-3 form-right-field">
                <Form.Group>
                  <Form.Label className="custom-label">
                    Shipment order
                  </Form.Label>
                  <InputGroup className="mt-1">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                    />
                  </InputGroup>
                </Form.Group>
              </div>
            </div>
            <div className="new-package-name-sales mb-4">
              <div className="col-md-4 mt-4">
                <Form.Group>
                  <Form.Label className="custom-label">
                    Shipment date
                  </Form.Label>
                  <InputGroup className="mt-1">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      type="date"
                    />
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-4 mt-4 form-right-field">
                <Form.Group>
                  <Form.Label className="custom-label">Carrier</Form.Label>
                  <InputGroup className="mt-1">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                    />
                  </InputGroup>
                </Form.Group>
              </div>
            </div>
            <div className="new-package-name-sales mb-4">
              <div className="col-md-4 mt-4">
                <Form.Group>
                  <Form.Label className="custom-label">
                    Shipment amount
                  </Form.Label>
                  <InputGroup className="mt-1">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                    />
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-4 mt-4 form-right-field">
                <Form.Group>
                  <Form.Label className="custom-label">Notes</Form.Label>
                  <InputGroup className="mt-1">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                    />
                  </InputGroup>
                </Form.Group>
              </div>
            </div>
            <div className="new-package-save-cancel-btn mt-5">
              <button
                onClick={handleSaveNewShipmentDetails}
                type="submit"
                className="btn btn-primary save-download-btn"
              >
                Save
              </button>
              <button
                className="btn btn-danger sales-cancel-btn"
                onClick={backToList}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductNewShipment;
