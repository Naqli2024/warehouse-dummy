import React, { useState, lazy, Suspense } from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
const StorageDetails = lazy(() => import('./StorageDetails'));

const Storage = () => {
  const[openStorageDetails,setOpenStorageDetails] = useState(false);
  return (
    <div>
      <Suspense fallback={<p className="lazy-loading-text">Loading...</p>}>
      {openStorageDetails ? <StorageDetails backToList = {()=>setOpenStorageDetails(false)}/> 
      : (<div className="purchase-list">
        <h2>Storage</h2>
        <div className="package-text-field">
          <div className="d-md-flex">
          <div className="shipment-search-field">
            <InputGroup>
              <Form.Control
                placeholder="Search"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </div>
          <div className="col-md-3 col-sm-12 mt-2 mt-md-0 ms-md-3">
          <Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  style={{ height: "35px" }}
                >
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="delivered">Delivered</option>
                </Form.Select>
              </Form.Group>
          </div> 
          </div>
        </div>
        <div className="table-container mt-5 mx-5">
            <Table bordered className="custom-table sales-in-outbound-table">
              <thead>
                <tr>
                  <th>Product Id</th>
                  <th>Product name</th>
                  <th>Vendor name</th>
                  <th>SKU number</th>
                  <th>HNS code</th>
                  <th>Warehouse</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="purchase-id"
                    onClick={() => setOpenStorageDetails(true)}
                  >
                    #983988889
                  </td>
                  <td>xxxxxxxxxxxxx</td>
                  <td>xxxxxxxxxxxxx</td>
                  <td>3425532545</td>
                  <td>6534565436</td>
                  <td>Warehouse 1</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>)}
        </Suspense>
    </div>
  )
}

export default Storage