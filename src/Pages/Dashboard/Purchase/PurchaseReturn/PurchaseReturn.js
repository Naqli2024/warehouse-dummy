import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import NewPurchaseReturn from "./NewPurchaseReturn";
import NewPurchaseReturnDetails from "./NewPurchaseReturnDetails";

const PurchaseReturn = () => {
  const [openNewPurchaseReturn, setOpenNewPurchaseReturn] = useState(false);
  const [openPurchaseReturnStatus, setOpenPurchaseReturnStatus] = useState(false);

  const backToList = () => {
    setOpenNewPurchaseReturn(false);
    setOpenPurchaseReturnStatus(false);
  };

  return (
    <div>
      {openNewPurchaseReturn ? (
        <NewPurchaseReturn backToList={backToList} />
      ) : openPurchaseReturnStatus ?
        <NewPurchaseReturnDetails backToList={backToList}/>
      : (
        <div className="purchase-list">
          <h2>Purchase Return</h2>
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
              onClick={() => (setOpenNewPurchaseReturn(true))}
            >
              Create new
            </button>
          </div>
          <div className="table-container mt-5 mx-4">
            <Table bordered className="custom-table sales-in-outbound-table">
              <thead>
                <tr>
                  <th>Return Id</th>
                  <th>Return date</th>
                  <th>Vendor</th>
                  <th>Item</th>
                  <th>Return Qty</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="purchase-id" onClick={()=>(setOpenPurchaseReturnStatus(true))}>RE-76487</td>
                  <td>23/04/2024</td>
                  <td>Martin</td>
                  <td>Dinning table</td>
                  <td>3</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseReturn;
