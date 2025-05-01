import React, { useState, lazy, Suspense } from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
const StockTransferDetails = lazy(() => import('./StockTransferDetails'));
const BinTransferDetails = lazy(() => import('./BinTransferDetails'));

const TransferLog = () => {
  const [activeTab, setActiveTab] = useState("stock-transfer");
  const [openStockTransferDetails, setOpenStockTransferDetails] = useState(false);
  const [openBinTransferDetails, setOpenBinTransferDetails] = useState(false);

  return (
    <div>
      <Suspense fallback={<p className="lazy-loading-text">Loading...</p>}>
      {openStockTransferDetails 
      ? (<StockTransferDetails backToList={()=>setOpenStockTransferDetails(false)}/>) 
      : openBinTransferDetails 
      ? (<BinTransferDetails backToList={()=>setOpenBinTransferDetails(false)}/>) 
      : (<div className="purchase-list">
        <h2>Transfer Log</h2>
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
                  <option value="pending">In-transit</option>
                  <option value="pending">Pending</option>
                  <option value="delivered">Delivered</option>
                </Form.Select>
              </Form.Group>
          </div> 
          </div>
        </div>
        <div className='transfer-history'>
            <p className={activeTab === "stock-transfer" ?'transfer-classify text-dark' : "transfer-classify text-secondary"} onClick={() => setActiveTab("stock-transfer")}>Stock transfer</p>
            <p className={activeTab === "bin-transfer" ? "transfer-classify text-dark me-md-5" : "transfer-classify text-secondary me-md-5"} onClick={() => setActiveTab("bin-transfer")}>Bin location transfer</p>
        </div>
        {activeTab === "stock-transfer"
        ? (<div className="table-container mx-5">
          <Table bordered className="custom-table sales-in-outbound-table delivery-tableHeader">
            <thead>
              <tr>
                <th>Transfer Id</th>
                <th>Product name</th>
                <th>SKU</th>
                <th>Source warehouse</th>
                <th>Destination warehouse</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="purchase-id" onClick={() => setOpenStockTransferDetails(true)}>#983988889</td>
                <td>Product name 1</td>
                <td>566432</td>
                <td>Warehouse 1</td>
                <td>Warehouse 2</td>
                <td>50</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td className="purchase-id">#983988889</td>
                <td>Product name 2</td>
                <td>254235</td>
                <td>Warehouse 1</td>
                <td>Warehouse 3</td>
                <td>50</td>
                <td>In-transit</td>
              </tr>
              <tr>
                <td className="purchase-id">#983988889</td>
                <td>Product name 3</td>
                <td>452353</td>
                <td>Warehouse 2</td>
                <td>Warehouse 3</td>
                <td>50</td>
                <td>Delivered</td>
              </tr>
            </tbody>
          </Table>
      </div>)
      : (<div className="table-container mx-5">
        <Table bordered className="custom-table sales-in-outbound-table delivery-tableHeader">
          <thead>
            <tr>
              <th>Transfer Id</th>
              <th>Product name</th>
              <th>SKU</th>
              <th>Warehouse</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className="purchase-id" onClick={() => setOpenBinTransferDetails(true)}>#983988889</td>
            <td>Product name 1</td>
              <td>566432</td>
              <td>Warehouse 1</td>
              <td>50</td>
              <td>Pending</td>
            </tr>
            <tr>
            <td className="purchase-id">#983988889</td>
              <td>Product name 2</td>
              <td>566432</td>
              <td>Warehouse 2</td>
              <td>50</td>
              <td>In-transit</td>
            </tr>
            <tr>
            <td className="purchase-id">#983988889</td>
              <td>Product name 3</td>
              <td>566432</td>
              <td>Warehouse 3</td>
              <td>50</td>
              <td>Delivered</td>
            </tr>
          </tbody>
        </Table>
    </div>)
      } 
    </div>)}
    </Suspense>
    </div>
  )
}

export default TransferLog