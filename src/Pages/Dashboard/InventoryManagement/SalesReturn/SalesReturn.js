import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import NewSalesReturn from "./NewSalesReturn";
import SalesReturnInvoice from "./SalesReturnInvoice";

const SalesReturn = () => {
  const [openNewSalesReturn, setOpenNewSalesReturn] = useState(false);
  const [openSalesReturnInvoice, setOpenSalesReturnInvoice] = useState(false);

  const handleNewSalesReturn = () => {
    setOpenNewSalesReturn(true);
  };

  const backToList = () => {
    setOpenNewSalesReturn(false);
  };

  return (
    <div>
      {openNewSalesReturn ? (
        <NewSalesReturn backToList={backToList} />
      ) : openSalesReturnInvoice ? (
        <SalesReturnInvoice backToList={()=>(setOpenSalesReturnInvoice(false))}/>
      ) : (
        <div className="purchase-list">
          <h2>Sales Return</h2>
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
              onClick={handleNewSalesReturn}
            >
              Create new
            </button>
          </div>
          <div className="table-container mt-5 mx-4">
            <Table bordered className="custom-table sales-in-outbound-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>RA#</th>
                  <th>Sales order</th>
                  <th>Customer name</th>
                  <th>Status</th>
                  <th>Receive status</th>
                  <th>Refund status</th>
                  <th>Returned</th>
                  <th>Amount refunded</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>24/4/2024</td>
                  <td className="purchase-id" onClick={()=>(setOpenSalesReturnInvoice(true))}>RA00021</td>
                  <td>SO-0001</td>
                  <td>Martin</td>
                  <td>Approved</td>
                  <td>Received</td>
                  <td>Received</td>
                  <td>10</td>
                  <td>10,000</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesReturn;
