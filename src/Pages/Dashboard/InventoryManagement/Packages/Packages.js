import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PackageDetails from "./PackageDetails";
import NewPackage from "./NewPackage";

const Packages = () => {
  const [filter, setFilter] = React.useState("");
  const [openPackageDetails, setPackageDetails] = useState(false);
  const [openNewPackage, setNewPackage] = useState(false);
  const handleNewPackage = () => {
    setNewPackage(true);
  };
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handlePackageId = () => {
    setPackageDetails(true);
  };
  const backToList = () => {
    setPackageDetails(false);
    setNewPackage(false);
  };

  return (
    <div>
      {openPackageDetails ? (
        <PackageDetails backToList={backToList}/>
      ) : (openNewPackage ? (<NewPackage backToList={backToList}/>) 
      : ( <div className="purchase-list">
        <h2>Packages</h2>
        <div className="package-text-field">
          <div className="d-md-flex">
          <div className="shipment-search-field">
            <InputGroup>
              <Form.Control
                placeholder="Search by product"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </div>
          <div className="col-md-3 col-sm-12 mt-2 mt-md-0 ms-md-3">
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                className="package-filter"
                value={filter}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  fontSize: "14px",
                }}
              >
                <MenuItem sx={{ fontSize: "14px" }} value="">
                  <em>Status</em>
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} value="All">
                  All
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} value="Shipped">
                  Delivered
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} value="Delivered">
                  Shipped
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} value="Not Delivered">
                  Not Delivered
                </MenuItem>
              </Select>
            </FormControl>
          </div> 
          </div>
          <button type="button" className="btn create-new-btn" onClick={handleNewPackage}>
            New Package
          </button>
        </div>
        <div className="table-container mx-5">
          <Table bordered className="custom-table sales-in-outbound-table">
            <thead>
              <tr>
                <th>Package id</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Carrier</th>
                <th>Sales order</th>
                <th>Status</th>
                <th>Shipment date</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="purchase-id" onClick={handlePackageId}>
                  PK-075868
                </td>
                <td>22/03/2024</td>
                <td>Jake</td>
                <td>Fedx</td>
                <td>JH-657</td>
                <td>Not Shipped</td>
                <td>12/04/2024</td>
                <td>10</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>)
       
      )}
    </div>
  );
};

export default Packages;
