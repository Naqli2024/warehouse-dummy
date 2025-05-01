import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import NewDepartment from "./NewDepartment";
import { InputGroup, Form, Button } from "react-bootstrap";

const SourceDepartment = () => {
  const [openNewDepartment, setOpenNewDepartment] = useState(false);
  const handleNewDepartment = () => {
    setOpenNewDepartment(true);
  }; 
  const backToList = () => {
    setOpenNewDepartment(false);
  };
  return (
    <div>
      {openNewDepartment ? (
        <NewDepartment backToList={backToList}/>
      ) : (
        <div className="purchase-list">
          <h2>Source department</h2>
          <div className="sales-return search-btn">
            <div className="col-md-4">
              <InputGroup className="search-input">
                <Form.Control
                  className="text-field search-icon-btn"
                  placeholder="Search here"
                  aria-label="Search"
                />
              </InputGroup>
            </div>
            <button type="button" className="btn create-new-btn" onClick={handleNewDepartment}>
              Create new
            </button>
          </div>
          <div className="table-container mx-5 mt-5">
            <Table bordered className="custom-table sales-in-outbound-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Code/id</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Main Contact</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Assembly line-1</td>
                  <td>Mfg-01</td>
                  <td>Assembly line</td>
                  <td>Building A-West wing</td>
                  <td>Jimmy</td>
                  <td>Active</td>
                  <td className="list-icon">
                    <LiaEditSolid />
                    <RiDeleteBin6Line className="ms-2" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SourceDepartment;
