import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import { InputGroup, Form, Button } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import NewEmployees from "./NewEmployees";
import EmployeeDetails from "./EmployeeDetails";

const Employees = () => {
  const [openNewEmployees, setOpenNewEmployees] = useState(false);
  const [openNewEmployeeDetails, setOpenNewEmployeeDetails] = useState(false);

  const backToList = () => {
    setOpenNewEmployees(false);
  };

  return (
    <div>
      {openNewEmployees ? (
        <NewEmployees backToList={backToList} />
      ) : openNewEmployeeDetails ? (
        <EmployeeDetails backToList={()=>(setOpenNewEmployeeDetails(false))} />
      ) : (
        <div className="purchase-list">
          <h2>Employees</h2>
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
            <button
              type="button"
              className="btn create-new-btn"
              onClick={() => setOpenNewEmployees(true)}
            >
              Create new
            </button>
          </div>
          <div className="table-container mx-4 mt-5">
            <Table bordered className="custom-table sales-in-outbound-table">
              <thead>
                <tr>
                  <th>Employee name</th>
                  <th>Employee id</th>
                  <th>Email id</th>
                  <th>Mobile no</th>
                  <th>Access to</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="d-flex align-items-center gap-3">
                    <div className="personAvatar">
                      <PersonIcon />
                    </div>
                    Rahul
                  </td>
                  <td className="purchase-id" onClick={()=>(setOpenNewEmployeeDetails(true))}>
                    ID-867757576</td>
                  <td>Rahul123@gmail.com</td>
                  <td>8676767679</td>
                  <td>Sales order</td>
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

export default Employees;
