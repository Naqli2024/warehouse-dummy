import React, { useState } from "react";
import { InputGroup, Form, Button, FormLabel } from "react-bootstrap";
import { MdMoreVert } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Table from "react-bootstrap/Table";

const QuoteRequestSidebar = () => {
    const [isRowChecked, setIsRowChecked] = useState(false);
    const [selectedColumn, setSelectedColumn] = useState(null);

  return (
    <div className="col-md-4 qr-sidebar">
      <div className="fixed-divider">
    <div className="qr-sidebar-top">
      <div>
        <Form.Group>
          <Form.Select className="no-border text-muted">
            <option value="" className="no-border text-muted">
              All RFQ
            </option>
            <option className="no-border text-muted">Approved</option>
            <option className="no-border text-muted">Rejected</option>
            <option className="no-border text-muted">
              Waiting For Approval
            </option>
          </Form.Select>
        </Form.Group>
      </div>
      <Form.Group>
        <InputGroup className="qr-input-group">
          <Form.Control
            className="qr-search-textfield"
            placeholder="Search with PI No"
          />
          <InputGroup.Text className="qr-input-group-text">
            <FaSearch className="text-muted" size={10}/>
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <div className="pi-options">
        <div className="new-pi-btn">Create PO</div>
        <div className="more-pi-btn">
          <MdMoreVert size={14} />
        </div>
      </div>
    </div>
    </div>
    <div>
      <Table className="qr-table" bordered responsive>
        <tbody>
          <tr
            style={{
              backgroundColor: isRowChecked ? "#D9E3F7" : "transparent",
            }}
          >
            <td
              style={{
                backgroundColor: isRowChecked ? "#D9E3F7" : "transparent",
              }}
            >
              <div className="d-flex gap-4">
                <input
                  type="checkbox"
                  onChange={(e) => setIsRowChecked(e.target.checked)}
                />
                <div>
                  <p className="mb-2">PI NO: XXXXXX</p>
                  <p className="fw-bold">RFQ NO: XXXXXX</p>
                </div>
              </div>
            </td>

            {[1, 2, 3].map((col) => (
              <td
                key={col}
                style={{
                  backgroundColor:
                    selectedColumn === col ? "#E6FBE8" : "transparent",
                }}
              >
                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    name="columnRadio"
                    disabled={!isRowChecked}
                    onChange={() => setSelectedColumn(col)}
                  />
                  <div>
                    <p>Zahir Enterprises</p>
                    <div className="qr-table-amount">45,000 SAR</div>
                    <p>RFQ #000{col}</p>
                    <p>Delivery Date: 03/05/2025</p>
                  </div>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
  )
}

export default QuoteRequestSidebar