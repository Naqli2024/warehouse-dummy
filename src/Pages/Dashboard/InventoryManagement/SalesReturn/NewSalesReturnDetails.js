import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Menu, MenuItem, IconButton, Breadcrumbs } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import Table from "react-bootstrap/Table";
import NewCreditNote from "../CreditNote/NewCreditNote";
import { useNavigate } from "react-router-dom";
import { InputGroup, Form } from "react-bootstrap";

const NewSalesReturnDetails = ({ backToList, isChecked}) => {
  const [openMoreIcon, setOpenMoreIcon] = React.useState(null);
  const [openUpdateStatus, setOpenUpdateStatus] = React.useState(null);
  const [openCreditNote, setOpenCreditNote] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const openIcon = Boolean(openMoreIcon);
  const openStatus = Boolean(openUpdateStatus);
  const navigate = useNavigate();

  const handleClick = (event) => {
      setOpenMoreIcon(event.currentTarget);
  };

  const handleUpdateStatusClick = (event) => {
    setOpenUpdateStatus(event.currentTarget);
  };

  const handleApprove = () => {
    setOpenUpdateStatus(null);
    setIsApproved(true);
  }

  const handleOpenNewCredit = () => {
    navigate("/admin/credit-note");
    setOpenCreditNote(true);
  }

  return (
    <div>
      {openCreditNote ? (
        <NewCreditNote backToList={() => setOpenCreditNote(false)} />
      ) : (
        <div className="purchase-list">
          <h2>New sales return</h2>
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
            <div
              className="action-btn print-btn"
              onClick={handleOpenNewCredit}
            >
              Create credit note
            </div>
            <div className="divider"></div>
            {!isApproved && (
              <>
               <React.Fragment>
              <Menu
                anchorEl={openUpdateStatus}
                open={openStatus}
                onClose={() => setOpenUpdateStatus(null)}
                aria-labelledby="with-menu-demo-breadcrumbs"
              >
                <MenuItem onClick={handleApprove}>
                  Approve
                </MenuItem>
              </Menu>
              <Breadcrumbs aria-label="breadcrumbs">
                <IconButton
                  className="ms-2 me-2 text-dark cursor-pointer"
                  onClick={handleUpdateStatusClick}
                >
                  Update Status
                </IconButton>
              </Breadcrumbs>
            </React.Fragment>
            <div className="divider"></div>
            </>
            )}
            <React.Fragment>
              <Menu
                anchorEl={openMoreIcon}
                open={openIcon}
                onClose={() => setOpenMoreIcon(null)}
                aria-labelledby="with-menu-demo-breadcrumbs"
              >
                <MenuItem onClick={() => setOpenMoreIcon(null)}>
                  Delete
                </MenuItem>
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
            <p className= {isApproved ? "delivered-label" : "pending-label"}>
              {isApproved ? 'Closed' : 'Pending' }</p>
            <div className="sales-invoice-detail">
              <div className="sales-invoice">
                <div className="sales-invoice-heading mt-2">
                  <p>LOGO</p>
                  <p className="sales-id-text">xxxxxxxxxxxxx</p>
                  <p className="sales-id-text">xxxxxxxxxxxxx</p>
                </div>
                <div className="sales-order-date">
                  <p className="detail-heading mb-1 fw-bold">SALES RETURN</p>
                  <p className="sales-id-text">RA#36646367</p>
                </div>
              </div>
              <div className="sales-invoice mt-4">
                <div className="mt-5">
                  <p>Customer</p>
                  <p>xxxxxxxxxxxx</p>
                  <p>xxxxxxxxxxxx</p>
                </div>
                <div className="sales-order-date me-5">
                <div className="d-flex mb-4">
                    <p>Refund Status - <span className="text-danger">Pending</span></p>
                  </div>
                  <div className="d-flex mb-3">
                    <p className="col-7">Date</p>
                    <p className="col-2">:</p>
                    <p className="col-5">23/04/2024</p>
                  </div>
                  <div className="d-flex mb-3">
                    <p className="col-7">SO#</p>
                    <p className="col-2">:</p>
                    <p className="col-3">85363634</p>
                  </div>
                  <div className="d-flex mb-3">
                    <p className="col-7">Invoice</p>
                    <p className="col-2">:</p>
                    <p className="col-5">#85363634</p>
                  </div>
                  <div className="d-flex">
                    <p className="col-7">Invoice date</p>
                    <p className="col-2">:</p>
                    <p className="col-2">23/04/2024</p>
                  </div>
                </div>
              </div>
              <div className="row invoice-table mt-5">
                <Table className="table-content sales-invoice-table delivery-tableHeader">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th className="item-name-text">Item name</th>
                      <th>Reason</th>
                      {isChecked && <th>Returned</th>}
                      {isChecked && <th>Received</th>}
                      {isChecked && <th>Credit</th>}
                      {!isChecked && <th>Quantity</th>}
                      <th>Unit price</th>
                      <th>Total amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="item-name-text">xxxxxxx</td>
                      <td>xxxxxxxxxx</td>
                      {isChecked && <td>45</td>}
                      {isChecked && <td>40</td>}
                      {isChecked && <td>5</td>}
                      {!isChecked && <td>45 returned</td>}
                      <td>20</td>
                      <td>900</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewSalesReturnDetails;
