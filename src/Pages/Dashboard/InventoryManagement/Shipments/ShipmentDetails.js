import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import Table from "react-bootstrap/Table";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Menu, MenuItem, IconButton, Breadcrumbs, Link } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Form } from "react-bootstrap";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
const ShipmentDetails = ({ backToList }) => {
  const [openMoreIcon, setMoreIcon] = React.useState(null);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [status, setStatus] = React.useState("");
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
      <h2>SH-76885</h2>
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
        <div className="action-btn print-btn" onClick={handleOpen}>
          {updateStatus ? "Update status" : "Set as delivered"}
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
      <div>
        <div>
          <Accordion
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Packages details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="shipment-dropdown-details">
                  <div className="shipment-package-id">
                    <div className="fw-bold mb-2">Package id</div>
                    <div className="text-primary">Pck-6574</div>
                  </div>
                  <div className="shipment-package-id">
                    <div className="fw-bold mb-2">Date</div>
                    <div>22/12/2024</div>
                  </div>
                  <div className="shipment-package-id">
                    <div className="fw-bold mb-2">Quantity</div>
                    <div>45</div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              boxShadow: "none",
              borderBottom: "1px solid #ddd",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Shipment details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="shipment-dropdown-details">
                  <div className="shipment-package-id">
                    <div className="fw-bold mb-2">Carrier</div>
                    <div>xxxx</div>
                  </div>
                  <div className="shipment-package-id">
                    <div className="fw-bold mb-2">Shipment value</div>
                    <div>76587</div>
                  </div>
                  <div className="shipment-package-id">
                    <div className="fw-bold mb-2">Shipment date</div>
                    <div>22/12/2024</div>
                  </div>
                  <div className="shipment-notes">
                    <div className="fw-bold">Notes</div>
                    <div>
                      xxxxxxxxxxxx
                      <span className="text-primary ms-1">View more</span>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="sales-invoice-outer-card mt-5">
        <div className={updateStatus ? "delivered-label" : "shipped-label"}>
          {updateStatus ? "Delivered" : "Shipped"}
        </div>
        <div className="sales-invoice-detail">
          <div className="sales-invoice">
            <div className="sales-invoice-heading mt-2">
              <div>LOGO</div>
              <div className="sales-id-text">xxxxxxxxxxxxx</div>
              <div className="sales-id-text">xxxxxxxxxxxxx</div>
            </div>
            <div className="sales-order-date">
              <div className="detail-heading mb-1">Shipment Order</div>
              <div className="sales-id-text">Shipment id:#SH-UYI706</div>
            </div>
          </div>
          <div className="shipments-carrier mt-5 me-2">
            <div>Shipment date:12/08/2024</div>
            <div>Shipment Carrier: sfsfsfsfs</div>
          </div>
          <div className="sales-invoice mt-5">
            <div className="mb-5">
              Ship to:
              <div>xxxxxxxxxxxx</div>
              <div>xxxxxxxxxxxx</div>
            </div>
            <div className="sales-order-date">
              <div className="shipment-order-row">
                <div className="shipment-label">Sales Order:</div>
                <div className="shipment-value">SA-06976</div>
              </div>
              <div className="shipment-order-row">
                <div className="shipment-label">Order Date:</div>
                <div className="shipment-value">23/04/2024</div>
              </div>
            </div>
          </div>
          <div className="row invoice-table mt-5">
            <Table className="table-content sales-invoice-table delivery-tableHeader">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="item-name-text">Item name</th>
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
      <Dialog
  open={open}
  onClose={handleClose}
  sx={{
    "& .MuiDialog-paper": {
      width: "400px", 
      padding: "10px",
    },
  }}
>
  <DialogTitle>
    <h2>Set as Delivered</h2>
  </DialogTitle>
  <DialogContent>
    <FormControl fullWidth margin="normal">
      <Form.Label className="custom-label">Status</Form.Label>
      <Select
        labelId="delivery-type-label"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        sx={{
          height: 48,
          width: "100%", 
        }}
      >
        <MenuItem value=""> <em>None</em> </MenuItem>
        <MenuItem value="in-Transit">In-Transit</MenuItem>
        <MenuItem value="outForDelivery">Out For Delivery</MenuItem>
        <MenuItem value="failedDelivery">Failed Delivery Attempt</MenuItem>
        <MenuItem value="shipped">Shipped</MenuItem>
        <MenuItem value="customsClearance">Customs Clearance</MenuItem>
        <MenuItem value="readyForPickup">Ready For Pickup</MenuItem>
        <MenuItem value="delayed">Delayed</MenuItem>
      </Select>
    </FormControl>
    
    <TextField
      label="Delivered Date"
      type="date"
      fullWidth
      margin="normal"
      InputLabelProps={{ shrink: true }}
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
    <TextField
      label="Delivered Time"
      type="time"
      fullWidth
      margin="normal"
      InputLabelProps={{ shrink: true }}
      value={time}
      onChange={(e) => setTime(e.target.value)}
    />
  </DialogContent>

  <DialogActions
    sx={{
      display: "flex",
      justifyContent: "flex-end",
      gap: "8px", 
      padding: "16px",
    }}
  >
    <Button
      onClick={handleUpdate}
      variant="contained"
      sx={{ backgroundColor: "#1F3F7F", color: "#fff",fontWeight: "normal" }}
    >
      Confirm
    </Button>
    <Button onClick={handleClose} sx={{ border: "1px solid #ddd", color: "black", fontWeight: "normal" }}>Cancel</Button>
  </DialogActions>
</Dialog>

    </div>
  );
};

export default ShipmentDetails;
