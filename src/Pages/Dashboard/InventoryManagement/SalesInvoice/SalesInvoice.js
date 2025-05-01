import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NewSalesInvoice from "./NewSalesInvoice";
import ReviseInvoice from "./ReviseInvoice";

const SalesInvoice = () => {
  const [filter, setFilter] = React.useState("");
  const [openNewSalesInvoice,setOpenNewSalesInvoice] = useState(false);
  const [openReviseInvoice,setOpenReviseInvoice] = useState(false);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      {openNewSalesInvoice ? (<NewSalesInvoice backToList={()=>(setOpenNewSalesInvoice(false))}/>)
      : openReviseInvoice ? (<ReviseInvoice backToList={()=>(setOpenReviseInvoice(false))}/>)
      : (<div className="purchase-list">
        <h2>Sales Invoice</h2>
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
                  Draft
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} value="Delivered">
                  Overdue
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} value="Not Delivered">
                 Paid
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} value="Not Delivered">
                 Pending
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} value="Not Delivered">
                 HalfPaid
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} value="Not Delivered">
                 Void
                </MenuItem>
              </Select>
            </FormControl>
          </div> 
          </div>
          <button type="button" className="btn create-new-btn" onClick={()=>(setOpenNewSalesInvoice(true))}>
            New Invoice
          </button>
        </div>
        <div className="table-container mx-5">
          <Table bordered className="custom-table sales-in-outbound-table">
            <thead>
              <tr>
                <th>Invoice id</th>
                <th>Date</th>
                <th>Sales order</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Due date</th>
                <th>Total amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="purchase-id" onClick={()=> (setOpenReviseInvoice(true))}>
                  IN-075868
                </td>
                <td>22/03/2024</td>
                <td>SO-5325487</td>
                <td>Fedx</td>
                <td className="draft-status">Draft</td>
                <td>22/03/2024</td>
                <td>45,654</td>
              </tr>
              <tr>
                <td className="purchase-id">
                  IN-075868
                </td>
                <td>22/03/2024</td>
                <td>SO-5325487</td>
                <td>Fedx</td>
                <td className="overdue-status">Overdue</td>
                <td>22/03/2024</td>
                <td>45,654</td>
              </tr>
              <tr>
                <td className="purchase-id">
                  IN-075868
                </td>
                <td>22/03/2024</td>
                <td>SO-5325487</td>
                <td>Fedx</td>
                <td className="paid-status">Paid</td>
                <td>22/03/2024</td>
                <td>45,654</td>
              </tr>
              <tr>
                <td className="purchase-id">
                  IN-075868
                </td>
                <td>22/03/2024</td>
                <td>SO-5325487</td>
                <td>Fedx</td>
                <td className="pending-status">Pending</td>
                <td>22/03/2024</td>
                <td>45,654</td>
              </tr>
              <tr>
                <td className="purchase-id">
                  IN-075868
                </td>
                <td>22/03/2024</td>
                <td>SO-5325487</td>
                <td>Fedx</td>
                <td className="half-paid-status">HalfPaid</td>
                <td>22/03/2024</td>
                <td>45,654</td>
              </tr>
              <tr>
                <td className="purchase-id">
                  IN-075868
                </td>
                <td>22/03/2024</td>
                <td>SO-5325487</td>
                <td>Fedx</td>
                <td>Void</td>
                <td>22/03/2024</td>
                <td>45,654</td>
              </tr>
            </tbody>
          </Table>
        </div>
    </div>
  )}
    </div>
  )
}

export default SalesInvoice