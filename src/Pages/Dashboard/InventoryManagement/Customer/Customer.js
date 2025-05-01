import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import NewCustomer from "./NewCustomer";
import CustomerDetails from "./CustomerDetails";

const Customer = () => {
  const [openNewCustomer, setOpenNewCustomer] = useState(false);
  const [openCustomerDetails, setOpenCustomerDetails] = useState(false);
  return (
    <div>
      {openNewCustomer ? (
        <NewCustomer backToList={()=>(setOpenNewCustomer(false))}/>
      ) : (openCustomerDetails ? (<CustomerDetails backToList={()=>(setOpenCustomerDetails(false))}/>)
      : (
        <div className="purchase-list">
          <h2>Customer</h2>
          <div className="sales-return search-btn">
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
            <button
              type="button"
              className="btn create-new-btn"
              onClick={() => setOpenNewCustomer(true)}
            >
              Create new
            </button>
          </div>
          <div className="table-container mt-5 mx-4">
            <Table bordered className="custom-table sales-in-outbound-table">
              <thead>
                <tr>
                  <th>Customer Id</th>
                  <th>Name</th>
                  <th>Company name</th>
                  <th>Mobile no</th>
                  <th>Email id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="purchase-id" onClick={()=>(setOpenCustomerDetails(true))}>#748857454</td>
                  <td>Jason</td>
                  <td>Zyphron</td>
                  <td>9876543213</td>
                  <td>Jason@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      )
      )}
    </div>
  );
};

export default Customer;
