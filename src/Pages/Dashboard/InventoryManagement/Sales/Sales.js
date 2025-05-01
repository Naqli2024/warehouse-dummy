import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TocRoundedIcon from "@mui/icons-material/TocRounded";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import SalesGraphView from "./SalesGraphView";

const Sales = () => {
  const [activeView, setActiveView] = useState("table");
  const [activeTab, setActiveTab] = useState("outBound");
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className="purchase-list">
      <h2>Sales</h2>
      <div className="d-flex align-items-center">
        {activeView === "table" && (
          <div className="sales-text-field d-flex align-items-center">
            <div className="col-md-12 d-flex align-items-center">
              <InputGroup className="mb-0 w-100">
                <Form.Control
                  className="sales-search-field"
                  placeholder="Search sales"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <FormControl sx={{ minWidth: 120 }}>
                <Select
                  value={filter}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    width: "90%",
                    height: "35px",
                    fontSize: "14px",
                  }}
                >
                  <MenuItem sx={{ fontSize: "14px" }} value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem sx={{ fontSize: "14px" }} value="Weekly">
                    Weekly
                  </MenuItem>
                  <MenuItem sx={{ fontSize: "14px" }} value="Monthly">
                    Monthly
                  </MenuItem>
                  <MenuItem sx={{ fontSize: "14px" }} value="Yearly">
                    Yearly
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        )}
        <div className="sales-icons">
          <div
            className="list-icon"
            onClick={() => setActiveView("table")}
            style={{
              color: activeView === "table" ? "#007bff" : "black",
            }}
          >
            <TocRoundedIcon />
          </div>
          <div
            className="chart-icon"
            onClick={() => setActiveView("graph")}
            style={{
              color: activeView === "graph" ? "#007bff" : "black",
            }}
          >
            <SignalCellularAltRoundedIcon />
          </div>
        </div>
      </div>
      {activeView === "table" ? (
        <div>
          <div className="in-outbound-btn mx-5 d-flex">
            <div
              className={`btn-salesOrder ${
                activeTab === "outBound" ? "active-btn" : ""
              }`}
              onClick={() => setActiveTab("outBound")}
            >
              outBound
            </div>
            <div
              className={`btn-salesOrder ${
                activeTab === "InBound" ? "active-btn" : ""
              }`}
              onClick={() => setActiveTab("InBound")}
            >
              InBound
            </div>
          </div>
          <div className="table-container mx-5">
            <Table bordered className="custom-table sales-in-outbound-table">
              <thead>
                <tr>
                  <th>Sales order id</th>
                  <th>
                    {activeTab === "outBound"
                      ? "Customer name"
                      : "Source Department"}
                  </th>
                  <th>Sales date</th>
                  <th>Invoice id</th>
                  <th>Invoice date</th>
                  <th>Shipping date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SO-75868</td>
                  <td>xxxxxxxxx</td>
                  <td>22/03/2024</td>
                  <td>IN-75868</td>
                  <td>12/04/2024</td>
                  <td>02/02/2025</td>
                  <td>Delivered</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <SalesGraphView />
      )}
    </div>
  );
};

export default Sales;
