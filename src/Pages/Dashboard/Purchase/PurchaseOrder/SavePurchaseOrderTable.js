import { ReactSortable } from 'react-sortablejs';
import { useState } from 'react';
import Table from "react-bootstrap/Table";
import { MdDragIndicator } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const SavePurchaseOrderTable = () => {
  const [rows, setRows] = useState([
    ["1", "Item A", "A123", "PCS", "100", "50", "50", "10.00", "100","100", "2025", "500.00"],
    ["2", "Item B", "B456", "PCS", "200", "80", "120", "12.50","100","100", "5056", "100"],
    ["3", "Item C", "C789", "PCS", "150", "70", "80", "9.00","100","100", "2055", "100"]
  ]);

  return (
    <div className="mt-5 mb-5 mx-4 pi-table print-purchase-order-table">
       <div className="pi-table-scroll-wrapper">
        <div className="pi-table-scroll">
      <Table bordered className="text-center">
        <thead>
          <tr className="pi-table-head">
          </tr>
          <tr className="text-center align-middle pi-head">
            <th rowSpan={2}>S.No</th>
            <th rowSpan={2}>Item Details</th>
            <th rowSpan={2}>Item Code</th>
            <th rowSpan={2}>Item Classification</th>
            <th rowSpan={2}>Tax Code</th>
            <th rowSpan={2}>UOM</th>
            <th rowSpan={2}>Qty</th>
            <th rowSpan={2}>Rate</th>
            <th colSpan={2}>Tax</th>
            <th rowSpan={2}>Currency</th>
            <th rowSpan={2}>Amount</th>
          </tr>
           <tr style={{ textAlign: 'center' }} className='pi-head'>
            <th>IGST</th>
            <th>SGST</th>
          </tr>
        </thead>
        <tbody>
             {rows.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ fontSize: '13px', height: '35px'}}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>{cell}</td>
              ))}
            </tr>
          ))}
          <tr className='po-table-total'>
            <td colSpan="12" className="text-end">Total<span className='ms-5'>20,000 SAR</span></td>
          </tr>
        </tbody> 
      </Table>
    </div>
    </div>
    </div>
  );
}

export default SavePurchaseOrderTable