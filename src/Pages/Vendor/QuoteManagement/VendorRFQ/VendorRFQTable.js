import { ReactSortable } from "react-sortablejs";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { MdDragIndicator } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const VendorRFQTable = () => {
    const [rows, setRows] = useState([
      [
        "1",
        "Item A",
        "A123",
        "PCS",
        "100",
        "50",
        "50",
        "10.00",
        "100",
        "100",
      ],
      [
        "2",
        "Item B",
        "B456",
        "PCS",
        "200",
        "80",
        "120",
        "12.50",
        "100",
        "100",
      ],
      [
        "3",
        "Item C",
        "C789",
        "PCS",
        "150",
        "70",
        "80",
        "9.00",
        "100",
        "100",
      ],
    ]);
  return (
     <div className="mt-5 mb-5 mx-4 pi-table">
      <div className="pi-table-scroll-wrapper">
        <div className="pi-table-scroll">
          <Table bordered>
            <thead>
              <tr className="pi-table-head">
                <th colSpan="15">
                  <div className="pi-table-header-row">
                    <span>Item Master</span>
                  </div>
                </th>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <th>
                  <MdDragIndicator />
                </th>
                <th>S.No</th>
                <th>Item Details</th>
                <th>Item Code</th>
                <th>Item Classification</th>
                <th>UOM</th>
                <th>Required Qty</th>
                <th>Scheduled Date</th>
                <th>Previously Supplied</th>
                <th>Previous Supply Date</th>
                <th>Previous Supply Price</th>
              </tr>
            </thead>
            <ReactSortable tag="tbody" list={rows} setList={setRows}>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  style={{ fontSize: "13px", height: "35px", cursor: "move" }}
                >
                  <td style={{ width: "40px", textAlign: "center" }}>
                    <MdDragIndicator style={{ cursor: "move" }} />
                  </td>
                  {row.map((cell, colIndex) => (
                    <td key={colIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </ReactSortable>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default VendorRFQTable