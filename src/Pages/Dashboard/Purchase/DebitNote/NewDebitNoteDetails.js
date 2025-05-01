import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Menu, MenuItem, IconButton, Breadcrumbs } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import Table from "react-bootstrap/Table";
import { InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewDebitNoteDetails = ({ backToList }) => {
  const [openMoreIcon, setOpenMoreIcon] = React.useState(null);
  const openIcon = Boolean(openMoreIcon);
  const [status, setStatus] = useState("Draft");
  const [isRefundReceived, setIsRefundReceived] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const navigate = useNavigate();

  const handleOpenPurchaseInvoice = () => {
    navigate("/admin/purchase-invoice");
  }

  const handleClick = (event) => {
    setOpenMoreIcon(event.currentTarget);
  };

  const handleStatusChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Approve") {
      setStatus("Approved");
    } else if (selectedValue === "Reject") {
      setStatus("Rejected");
    } else {
      setStatus("Draft");
    }
  };

  const handleStatus = () => {
    if (!isRefundReceived) {
      setIsRefundReceived(true);
    } else {
      setIsClosed(true);
      setStatus("Closed");
    }
  };

  return (
    <div className="purchase-list">
      <h2>DN-00001</h2>
      <button onClick={backToList} className="goBack-btn">
        <span>
          <ArrowBackIosIcon />
        </span>
        Back
      </button>
      <div className="edit-print-del-btn mb-3">
        <div className="action-btn edit-btn">
          <EditOutlinedIcon className="action-icon" />
          Edit
        </div>
        <div className="divider"></div>
        <div className="action-btn print-btn">
          <PrintOutlinedIcon className="action-icon" />
          Print
        </div>
        <div className="divider"></div>
        <>
          {status === "Approved" && !isClosed && (
            <>
              <div
                className="ms-2 me-2 cursor-pointer"
                onClick={handleStatus}
              >
                {isRefundReceived ? "Mark as completed" : "Refund received"}
              </div>
              <div className="divider"></div>
            </>
          )}
           {(status === "Approved" || status === "Closed") && (
            <>
              <div className="ms-2 me-2 cursor-pointer" onClick={handleOpenPurchaseInvoice}>Create invoice</div>
              <div className="divider"></div>
            </>
          )}
          {status !== "Approved" && status !== "Closed" && (
            <>
              <Form.Select
                aria-label="Default select example"
                className="salesOrder-dropdown-style"
                defaultValue="1"
                onChange={handleStatusChange}
              >
                <option value="1" disabled>
                  Status
                </option>
                <option value="Approve">Approve</option>
                <option value="Reject">Reject</option>
              </Form.Select>
              <div className="divider"></div>
            </>
          )}
        </>
        <React.Fragment>
          <Menu
            anchorEl={openMoreIcon}
            open={openIcon}
            onClose={() => setOpenMoreIcon(null)}
            aria-labelledby="with-menu-demo-breadcrumbs"
          >
            <MenuItem onClick={() => setOpenMoreIcon(null)}>Void</MenuItem>
            <hr className="mt-0 mb-0" />
            <MenuItem onClick={() => setOpenMoreIcon(null)}>Delete</MenuItem>
          </Menu>
          <Breadcrumbs aria-label="breadcrumbs">
            <IconButton
              className="more-icon-btn"
              size="large"
              onClick={handleClick}
            >
              <MoreVertOutlinedIcon />
            </IconButton>
          </Breadcrumbs>
        </React.Fragment>
        <div className="divider"></div>
      </div>
      <div className="sales-invoice-outer-card mt-5">
        <p
          className={
            status === "Approved"
              ? "challan-approve"
              : status === "Closed"
              ? "delivered-label"
              : "package-label"
          }
        >{` ${status}`}</p>
        <div className="sales-invoice-detail">
          <div className="sales-invoice">
            <div className="sales-invoice-heading mt-2">
              <p>LOGO</p>
              <p className="sales-id-text">xxxxxxxxxxxxx</p>
              <p className="sales-id-text">xxxxxxxxxxxxx</p>
            </div>
            <div className="sales-order-date me-5">
              <p className="detail-heading mb-1">Debit notes</p>
              <p className="sales-id-text">#DN54675</p>
            </div>
          </div>
          <div className="sales-invoice mt-5">
            <div className="mb-5">
              <p className="fw-bold">Bill to</p>
              <p>xxxxxxxxxxxx</p>
              <p>xxxxxxxxxxxx</p>
            </div>
            <div className="sales-order-date me-4">
              <div className="d-flex mb-3">
                <p className="col-5">Date</p>
                <p className="col-2">:</p>
                <p className="col-6">23-04-2024</p>
              </div>
              <div className="d-flex mb-3">
                <p className="col-5">SO#</p>
                <p className="col-2">:</p>
                <p className="col-6">82545532</p>
              </div>
              <div className="d-flex mb-3">
                <p className="col-5">Invoice</p>
                <p className="col-2">:</p>
                <p className="col-6">#3654363</p>
              </div>
              <div className="d-flex mb-3">
                <p className="col-5">Invoice date</p>
                <p className="col-2">:</p>
                <p className="col-6">23-04-2024</p>
              </div>
            </div>
          </div>
          <div className="table-container delivery-tableWrapper mt-3 ms-0 me-0">
            <Table className="custom-table sales-in-outbound-table delivery-tableHeader">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="item-name-text">Item name</th>
                  <th>Reason</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>GST</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="item-name-text">xxxxxxx</td>
                  <td>xxxxxxxxx</td>
                  <td>40</td>
                  <td>400</td>
                  <td>17%</td>
                  <td>5%</td>
                  <td>5000</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="credit-note-notes mb-3">
          <div className="ms-4 mt-4">
            <p className="fw-bold">Notes</p>
            <p>xxxxxxxxxx</p>
          </div>
          <div className="credit-note-bottom-content">
            <div className="open-inventory ms-4">
              <p className="fw-bold">Total amount</p>
              <p className="fw-bold col-2">5000</p>
            </div>
            <div className="open-inventory ms-4">
              <p className="fw-bold">Refund amount</p>
              <p className="fw-bold col-2">500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDebitNoteDetails;
