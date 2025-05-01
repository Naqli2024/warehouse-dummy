import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { InputGroup, Form, Button } from "react-bootstrap";
const NewDepartment = ({ backToList }) => {
  return (
    <div className="purchase-list">
      <h2>New department</h2>
      <button onClick={backToList} className="goBack-btn">
        <span>
          <ArrowBackIosIcon />
        </span>
        Back
      </button>
      <div className="new-package-form">
        <div className="new-package-name-sales mb-5">
          <div className="col-md-3 mt-3">
            <Form.Group>
              <Form.Label className="custom-label fw-bold">
                Department name
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
          <div className="col-md-3 mt-3">
            <Form.Group>
              <Form.Label className="custom-label fw-bold">
                Department code/id
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
          <div className="col-md-3 mt-3">
            <Form.Group>
              <Form.Label className="custom-label fw-bold">Type</Form.Label>
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
        <div className="new-package-name-sales">
          <div className="col-md-3 mt-3">
            <Form.Group>
              <Form.Label className="custom-label fw-bold">Location</Form.Label>
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
          <div className="col-md-3 mt-3">
            <Form.Group>
              <Form.Label className="custom-label fw-bold">
                Contact person
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
          <div className="col-md-3 mt-3">
            <Form.Group>
              <Form.Label className="custom-label fw-bold">Status</Form.Label>
              <InputGroup className="mt-1">
                <Form.Select
                  aria-label="Select Status"
                  className="custom-textfield"
                  name="status"
                >
                  <option value="">Status</option>
                  <option value="active">Active</option>
                  <option value="notActive">Inactive</option>
                </Form.Select>
              </InputGroup>
            </Form.Group>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center button-top-padding">
            <div className="col-12 col-md-3 d-flex justify-content-between gap-2">
              <button
                type="submit"
                className="btn flex-grow-1"
                style={{ color: "white", backgroundColor: "#1F3F7F" }}
              >
                Save
              </button>
              <button
                className="btn btn-danger flex-grow-1"
                onClick={backToList}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDepartment;
