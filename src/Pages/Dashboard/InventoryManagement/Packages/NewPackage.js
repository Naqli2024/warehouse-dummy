import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Select from "react-select";
import { InputGroup, Form, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import PackageDetails from "./PackageDetails";
const NewPackage = ({ backToList }) => {
  const [openPackageDetails, setPackageDetails] = useState(false);
  const categoryOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "furniture", label: "Furniture" },
  ];

  const handleSaveNewPackageDetails = () => {
    setPackageDetails(true);
  };
  return (
    <div>
      {openPackageDetails ? (
        <PackageDetails
          backToList={() => setPackageDetails(!setPackageDetails)}
        />
      ) : (
        <div className="purchase-list">
          <h2>New Package</h2>
          <button onClick={backToList} className="goBack-btn">
            <span>
              <ArrowBackIosIcon />
            </span>
            Back
          </button>
          <div className="new-package-form">
            <div className="new-package-name-sales mb-5">
              <Form.Group className="col-md-4 inventory-category-dropdown">
                <Form.Label className="custom-label">Customer name</Form.Label>
                <div className="form-group inventory-custom-dropdown">
                  <Select
                    options={categoryOptions}
                    isSearchable={true}
                    classNamePrefix="custom-select"
                  />
                </div>
              </Form.Group>
              <Form.Group className="col-md-4 inventory-category-dropdown">
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
              <div className="col-md-4 mt-4">
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
              <div className="col-md-4 mt-4">
                <Form.Group>
                  <Form.Label className="custom-label">Date</Form.Label>
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
            </div>
            <div className="row invoice-table mt-5">
              <Table className="table-content sales-invoice-table">
                <thead>
                  <tr>
                    <th>Item & Description</th>
                    <th>Ordered</th>
                    <th>Packed</th>
                    <th>Quantity to pack</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      xxxxxxxxxxxxxxx <br />
                      SKU:657465
                    </td>
                    <td style={{ textAlign: "center", width: "100px" }}>
                      <input type="text" className="form-control" />
                    </td>
                    <td style={{ textAlign: "center", width: "100px" }}>
                      <input type="text" className="form-control" />
                    </td>
                    <td>1</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="new-package-save-cancel-btn">
              <button
                onClick={handleSaveNewPackageDetails}
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
      )}
    </div>
  );
};

export default NewPackage;
