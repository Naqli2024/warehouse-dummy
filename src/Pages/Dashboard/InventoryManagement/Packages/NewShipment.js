import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PackageShipmentDetails from "./PackageShipmentDetails";
const NewShipment = ({ backToList }) => {
  const [openPackagesShipmentDetails, setPackagesShipmentDetails] =
    useState(false);
  const handleSavePackagesShipmentDetails = () => {
    setPackagesShipmentDetails(true);
  };
  return (
    <div>
      {openPackagesShipmentDetails ? (
        <PackageShipmentDetails
          backToList={() =>
            setPackagesShipmentDetails(!setPackagesShipmentDetails)
          }
        />
      ) : (
        <div className="purchase-list">
          <h2>New Shipment</h2>
          <button onClick={backToList} className="goBack-btn">
            <span>
              <ArrowBackIosIcon />
            </span>
            Back
          </button>
          <div className="sales-shipment">
            <div className="shipment-outer-border">
              <Row className="row-cols-auto justify-content-between  m-md-4 sales-order-date">
                <Col md="3" sm="12" xs="12">
                  <Form.Group className="mb-3">
                    <Form.Label>Package</Form.Label>
                    <Form.Control className="sales-order-label" type="text" />
                  </Form.Group>
                </Col>

                <Col md="3" sm="12" xs="12">
                  <Form.Group className="mb-3">
                    <Form.Label>Shipment order</Form.Label>
                    <Form.Control className="sales-order-label" type="text" />
                  </Form.Group>
                </Col>

                <Col md="3" sm="12" xs="12">
                  <Form.Group className="mb-3">
                    <Form.Label>Shipment date</Form.Label>
                    <Form.Control className="sales-order-label" type="date" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="row-cols-auto justify-content-between m-md-4 sales-order-date">
                <Col md="3" sm="12" xs="12">
                  <Form.Group className="mb-3">
                    <Form.Label>Carrier</Form.Label>
                    <Form.Control className="sales-order-label" type="text" />
                  </Form.Group>
                </Col>

                <Col md="3" sm="12" xs="12">
                  <Form.Group className="mb-3">
                    <Form.Label>Shipping charges</Form.Label>
                    <Form.Control className="sales-order-label" type="text" />
                  </Form.Group>
                </Col>
                <Col md="3" sm="12" xs="12"></Col>
              </Row>
              <div className="package-save-cancel-btn">
                <button
                  onClick={handleSavePackagesShipmentDetails}
                  type="submit"
                  className="btn btn-primary save-download-btn"
                >
                  Save
                </button>
                <button className="btn btn-danger sales-cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewShipment;
