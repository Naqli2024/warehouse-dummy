import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ShipmentDetails from './ShipmentDetails'
import ProductNewShipment from './ProductNewShipment'

const Shipments = () => {
      const [filter, setFilter] = React.useState("");
      const [openShipmentDetails, setShipmentDetails] = useState(false);
      const [openNewShipment, setNewShipment] = useState(false);
      const handleNewShipment = () => {
        setNewShipment(true);
      };
      const handleChange = (event) => {
        setFilter(event.target.value);
      };
    
      const handleShipmentId = () => {
        setShipmentDetails(true);
      };
      const backToList = () => {
        setShipmentDetails(false);
        setNewShipment(false);
      };
  return (
    <div>
    {openShipmentDetails ? (
      <ShipmentDetails backToList={backToList}/>
    ) : (openNewShipment ? (<ProductNewShipment backToList={backToList}/>) 
    : ( <div className="purchase-list">
      <h2>Shipments</h2>
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
        <button type="button" className="btn create-new-btn" onClick={handleNewShipment}>
          New Shipment
        </button>
      </div>
      <div className="table-container mx-5">
        <Table bordered className="custom-table sales-in-outbound-table">
          <thead>
            <tr>
              <th>Shipment no</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Sales order no</th>
              <th>Package no</th>
              <th>Carrier</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="purchase-id" onClick={handleShipmentId}>
                BF-075868
              </td>
              <td>22/03/2024</td>
              <td>Jake</td>
              <td className="purchase-id">JH-657</td>
              <td>76857678</td>
              <td>Fedx</td>
              <td className="delivered-text">Delivered</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>)
     
    )}
  </div>
  )
}

export default Shipments