import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import VendorDetails from "./VendorDetails";
import NewVendor from "./NewVendor";
const Vendors = () => {
  const [openVendorDetails, setOpenVendorDetails] = useState(false);
  const [openNewVendor, setOpenNewVendor] = useState(false);
  const handleVendorDetails = () => {
    setOpenVendorDetails(true);
  }
  const backToList = () => {
    setOpenVendorDetails(false);
    setOpenNewVendor(false);
  }
  return (
    <div>
      {openVendorDetails ? (
        <VendorDetails backToList={backToList} />
      ) : openNewVendor ? (<NewVendor backToList={backToList}/>)
        :(
          <div className="purchase-list">
          <h2>Vendors</h2>
          <div className="row purchase-textfield">
            <div className="col-md-4">
              <InputGroup className="mb-3">
                <Form.Control
                  className="text-field"
                  placeholder="Search by name,company name"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </div>
            <button type="button" className="btn create-new-btn" onClick={()=>setOpenNewVendor(true)}>
              New vendor
            </button>
          </div>
          <div className="table-container mx-5">
            <Table bordered className="custom-table sales-in-outbound-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company name</th>
                  <th>Mobile no</th>
                  <th>Email id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="purchase-id" onClick={handleVendorDetails}>John</td>
                  <td>xxxxxxxx</td>
                  <td>9863253453</td>
                  <td>xxxxxxxx</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default Vendors;
