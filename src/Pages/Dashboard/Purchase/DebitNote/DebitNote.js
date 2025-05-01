import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import NewDebitNote from "./NewDebitNote";
import NewDebitNoteDetails from "./NewDebitNoteDetails";

const DebitNote = () => {
  const [openNewDebitNote, setOpenNewDebitNote] = useState(false);
  const [openDebitNoteStatus, setOpenDebitNoteStatus] = useState(false);

  const backToList = () => {
    setOpenNewDebitNote(false);
    setOpenDebitNoteStatus(false);
  }

  return (
    <div>
      {openNewDebitNote ? (
        <NewDebitNote backToList={backToList}/>
      ) : openDebitNoteStatus ?
        <NewDebitNoteDetails backToList={backToList}/>
      : (
        <div className="purchase-list">
          <h2>Debit note</h2>
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
              onClick={() => setOpenNewDebitNote(true)}
            >
              Create new
            </button>
          </div>
          <div className="table-container mt-5 mx-4">
            <Table bordered className="custom-table sales-in-outbound-table">
              <thead>
                <tr>
                  <th>Debit note id</th>
                  <th>Date</th>
                  <th>Vendor</th>
                  <th>Scenario</th>
                  <th>Re-invoice</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="purchase-id" onClick={()=>(setOpenDebitNoteStatus(true))}>DB-959564</td>
                  <td>24/4/2024</td>
                  <td>John doe</td>
                  <td>Invoice mistake</td>
                  <td className="purchase-id">RVI-86754</td>
                  <td>50</td>
                  <td>Draft</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DebitNote;
