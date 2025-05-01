import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Menu, MenuItem, IconButton, Breadcrumbs } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import { InputGroup, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const SalesReturnInvoice = ({ backToList }) => {
  const [openMoreIcon, setOpenMoreIcon] = React.useState(null);
  const openIcon = Boolean(openMoreIcon);

  const handleClick = (event) => {
    setOpenMoreIcon(event.currentTarget);
  };

  return (
    <div className="purchase-list">
      <h2>CN-00001</h2>
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
        <React.Fragment>
          <Menu
            anchorEl={openMoreIcon}
            open={openIcon}
            onClose={() => setOpenMoreIcon(null)}
            aria-labelledby="with-menu-demo-breadcrumbs"
          >
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
        <div className="sales-invoice-detail">
          <div className="sales-invoice">
            <div className="sales-invoice-heading mt-2">
              <p className="detail-heading mb-1 fw-bold">Sales return
                <span className="ms-2 closed-label">Closed</span>
              </p>
              <p className="sales-id-text">RA#855674565</p>
            </div>
          </div>
          <div className="sales-invoice mt-5">
            <div className="mb-5 d-flex flex-column gap-2">
              <p>Date: 23/4/2024</p>
              <p>Reason:xxxxxxxxxxxx</p>
            </div>
            <div className="sales-order-date d-flex flex-column gap-2">
              <p>Receive status<span className="refunded-text">Received</span></p>
              <p>Refund status<span className="refunded-text">Refunded</span></p>
            </div>
          </div>
          <div className="row invoice-table mt-3">
            <Table className="table-content sales-invoice-table delivery-tableHeader">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="item-name-text">Item name</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="item-name-text">xxxxxxx</td>
                  <td>45 returned</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="item-name-text">xxxxxxx</td>
                  <td>45 returned</td>
                  <td>20</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReturnInvoice;
