import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Menu, MenuItem, IconButton, Breadcrumbs, Link } from "@mui/material";
import { Table } from "react-bootstrap";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
const PackageShipmentDetails = ({ backToList }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [updateStatus,setUpdateStatus]=useState(false)
  const [openMoreIcon, setMoreIcon] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdate = () => {
    handleClose();
    setUpdateStatus(true);
  };
  const openIcon = Boolean(openMoreIcon);
  const handleClick = (event) => {
    if (event) {
      setMoreIcon(event.currentTarget);
    }
  };
  const handleIconClose = () => {
    setMoreIcon(null);
  };
  return (
    <div className="purchase-list">
      <h2>PCK-9506</h2>
      <button onClick={backToList} className="goBack-btn">
        <span>
          <ArrowBackIosIcon />
        </span>
        Back
      </button>
      <div className="edit-print-del-btn mt-3">
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
        <div className="action-btn print-btn" onClick={handleOpen}>
        {updateStatus ? 'Update status':'Set as delivered'}
        </div>
        <div className="divider"></div>
        <React.Fragment>
              <Menu
                anchorEl={openMoreIcon}
                open={openIcon}
                onClose={handleIconClose}
                aria-labelledby="with-menu-demo-breadcrumbs"
              >
                <MenuItem onClick={handleIconClose}>Delete</MenuItem>
              </Menu>
              <Breadcrumbs aria-label="breadcrumbs">
                <IconButton size="small" onClick={handleClick}>
                  <MoreVertOutlinedIcon />
                </IconButton>
              </Breadcrumbs>
            </React.Fragment>
              <div className="divider"></div>
      </div>
      <div className="package-shipment-details">
        <div className="ms-5 package-order-date"><span className="fw-bold">Shipment order:</span>#75798</div>
        <div><span className="fw-bold">Shipment date:</span>23/12/2024</div>
        <div className="me-5"><span className="fw-bold">Carrier:</span>Fedx</div>
      </div>
      <div className="sales-invoice-outer-card">
        <div className={updateStatus?"delivered-label":"shipped-label"}>{updateStatus ? 'Delivered':'Shipped'}</div>
        <div className="sales-invoice-detail">
          <div className="sales-invoice">
            <div className="sales-invoice-heading">
              <div className="fw-bold">LOGO</div>
              <div className="sales-id-text">xxxxxxxxxxxxx</div>
              <div className="sales-id-text">xxxxxxxxxxxxx</div>
            </div>
            <div className="sales-order-date">
              <div className="fw-bold fs-5">Package</div>
              <div className="sales-id-text">Package id:PK-970</div>
            </div>
          </div>
          <div className="package-details">
            <div className="ms-5 package-order-date">Order date:12/08/2024</div>
            <div>Sales order:SO-7689</div>
            <div className="me-5">Total quantity:2</div>
          </div>
          <div className="sales-invoice">
            <div className="sales-order-bill">
              <div className="fw-bold">Bill to</div>
              <div>xxxxxxxxxxxx</div>
              <div>xxxxxxxxxxxx</div>
            </div>
          </div>
          <div className="row invoice-table">
            <Table className="table-content sales-invoice-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item name</th>
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
                  <td>xxxxxxxxxxxxxxx</td>
                  <td>27</td>
                  <td>56,965</td>
                  <td>5,000</td>
                  <td>5%</td>
                  <td>57,958</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="purchase-list">
           <h2>Set as delivered</h2> 
            </DialogTitle>
        <DialogContent>
          <TextField
            label="Delivered Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            label="Delivered Time"
            type="time"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button className="shipment-confirm-btn" onClick={handleUpdate} variant="contained">
            Confirm
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PackageShipmentDetails;
