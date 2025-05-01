import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const TransferHistory = () => {
    const [activeTab, setActiveTab] = useState("stock-transfer");

  return (
    <div>
        <div className='transfer-history mt-5'>
            <p className={activeTab === "stock-transfer" ?'transfer-classify text-dark' : "transfer-classify text-secondary"} onClick={() => setActiveTab("stock-transfer")}>Stock transfer</p>
            <p className={activeTab === "bin-transfer" ? "transfer-classify text-dark me-md-5" : "transfer-classify text-secondary me-md-5"} onClick={() => setActiveTab("bin-transfer")}>Bin location transfer</p>
        </div>
        {activeTab === "stock-transfer"
        ? (<div className="table-container mx-5">
          <Table bordered className="custom-table sales-in-outbound-table delivery-tableHeader">
            <thead>
              <tr>
                <th><input type='checkBox'/></th>
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
                <td><input type='checkBox'/></td>
                <td>Product name 1</td>
                <td>566432</td>
                <td>Warehouse 1</td>
                <td>Warehouse 2</td>
                <td>50</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td><input type='checkBox'/></td>
                <td>Product name 2</td>
                <td>254235</td>
                <td>Warehouse 1</td>
                <td>Warehouse 3</td>
                <td>50</td>
                <td>In-transit</td>
              </tr>
              <tr>
                <td><input type='checkBox'/></td>
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
              <th><input type='checkBox'/></th>
              <th>Product name</th>
              <th>SKU</th>
              <th>Warehouse</th>
              <th>Dest.Rack</th>
              <th>Dest.Shelf</th>
              <th>Dest.Shelf Space</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type='checkBox'/></td>
              <td>Product name 1</td>
              <td>566432</td>
              <td>Warehouse 1</td>
              <td>3</td>
              <td>A</td>
              <td>A4</td>
              <td>50</td>
              <td>Pending</td>
            </tr>
            <tr>
            <td><input type='checkBox'/></td>
              <td>Product name 2</td>
              <td>566432</td>
              <td>Warehouse 2</td>
              <td>2</td>
              <td>B</td>
              <td>B2</td>
              <td>50</td>
              <td>In-transit</td>
            </tr>
            <tr>
            <td><input type='checkBox'/></td>
              <td>Product name 3</td>
              <td>566432</td>
              <td>Warehouse 3</td>
              <td>1</td>
              <td>C</td>
              <td>C3</td>
              <td>50</td>
              <td>Delivered</td>
            </tr>
          </tbody>
        </Table>
    </div>)
      } 
        
    </div>
  )
}

export default TransferHistory