import { ReactSortable } from "react-sortablejs";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { MdDragIndicator } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const PurchaseIntentTable = () => {
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
      "2025-05-01",
      "500.00",
      "Supplier X",
      "CostCentre 1",
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
      "2025-05-03",
      "1500.00",
      "Supplier Y",
      "CostCentre 2",
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
      "2025-05-02",
      "720.00",
      "Supplier Z",
      "CostCentre 3",
    ],
  ]);

  return (
    <div className="mt-2 mb-5 mx-4 pi-table">
      <div className="pi-table-scroll-wrapper">
        <div className="pi-table-scroll">
          <Table bordered>
            <thead>
              <tr className="pi-table-head">
                <th colSpan="13">
                  <div className="pi-table-header-row">
                    <span>Item Master</span>
                    <span className="edit-icon">
                      <FaRegEdit /> Edit Master
                    </span>
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
                <th>UOM</th>
                <th>Required Qty</th>
                <th>Stock Qty</th>
                <th>Indent Qty</th>
                <th>Previous Purchase Rate</th>
                <th>Scheduled Date</th>
                <th>Estimated Value</th>
                <th>Previous Supplier Name</th>
                <th>Cost Centre</th>
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
          <div className="pi-table-footer">
            <button className="add-item-button">
              Add an Item <span>＋</span>
            </button>
            <div className="curve-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseIntentTable;
