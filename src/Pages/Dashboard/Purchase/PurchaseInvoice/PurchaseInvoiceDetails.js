import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Menu, MenuItem, IconButton, Breadcrumbs } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import { InputGroup, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { refundDialogSchema } from "../../../../Helper/validation";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  Slide,
} from "@mui/material";

const PurchaseInvoiceDetails = ({backToList}) => {
    const [openMoreIcon, setOpenMoreIcon] = React.useState(null);
    const [status, setStatus] = useState("Draft");
    const [paymentStatus, setPaymentStatus] = useState("draft");
     const [openDialog, setOpenDialog] = useState(false);
    const openIcon = Boolean(openMoreIcon);
    const navigate = useNavigate();
  
    const handleClick = (event) => {
      setOpenMoreIcon(event.currentTarget);
    };
  
    const handleOpenNewDebit = () => {
      navigate("/admin/credit-note");
    }
  
    const handleStatusChange = (event) => {
      const selectedValue = event.target.value;
  
      if (selectedValue === "approve") {
        setStatus("Approved");
        setPaymentStatus("draft");
      } else if (selectedValue === "reject") {
        setStatus("Rejected");
        setStatus("reject");
      } else {
        setStatus("Draft");
      }
    };
  
    const handlePaymentStatusChange = (event) => {
      const selectedValue = event.target.value;
    
      if (selectedValue === "halfPaid") {
        setOpenDialog(true); 
      } else {
        setPaymentStatus(selectedValue); 
      }
    };
  
    const getStatus = (status) => {
      switch (status) {
        case "draft":
        case "Draft":
          return "Draft";
        case "approve":
        case "Approved":
          return "Approved";
        case "reject":
        case "Rejected":
          return "Rejected";
        default:
          return status;
      }
    };
  
    const getPaymentStatus = (status) => {
      switch (status) {
        case "draft":
          return "Approved";
        case "paid":
          return "Paid";
        case "halfPaid":
          return "Half Paid";
        case "pending":
          return "Pending";
        default:
          return "";
      }
    };
  
      const {
        register,
        handleSubmit,
        setValue,
        trigger,
        formState: { errors },
      } = useForm({ resolver: yupResolver(refundDialogSchema) });
  
      const handleDialogSubmit = async () => {
        const isValid = await trigger(["amount", "paymentMode"]);
        if (!isValid) return;
      
        setPaymentStatus("halfPaid"); 
        setOpenDialog(false); 
      };

  return (
    <div className="purchase-list">
    <h2>Purchase Invoice</h2>
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
      {paymentStatus != "paid" && (
        <>
          {status === "Approved" ? (
            <Form.Select
              aria-label="Default select example"
              className="salesOrder-dropdown-style"
              value={paymentStatus}
              onChange={handlePaymentStatusChange}
              style={{ width: "120px" }}
            >
              <option value="draft" disabled>
                Status
              </option>
              <option value="paid">Paid</option>
              <option value="halfPaid">Half Paid</option>
              <option value="pending">Pending</option>
            </Form.Select>
          ) : (
            <Form.Select
              aria-label="Default select example"
              className="salesOrder-dropdown-style"
              value={status === "Draft" ? "draft" : status}
              onChange={handleStatusChange}
            >
              <option value="draft" disabled>
                Status
              </option>
              <option value="approve">Approve</option>
              <option value="reject">Reject</option>
            </Form.Select>
          )}
          <div className="divider"></div>
        </>
      )}
      {paymentStatus == "paid" || paymentStatus == "halfPaid" || paymentStatus == "pending"? (
          <>
            <div className="ms-2 me-2 cursor-pointer" onClick={handleOpenNewDebit}>Create Debit note</div>
            <div className="divider"></div>
          </>
      ):null}
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
      <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            aria-describedby="alert-dialog-slide-description"
            sx={{
              "& .MuiDialog-paper": {
                width: "450px",
                maxWidth: "80vw",
              },
            }}
          >
            <DialogTitle className="purchase-list" sx={{ padding: 0 }}>
              <h2>Partial Payment</h2>
            </DialogTitle>
            <DialogContent>
            <div className="mt-4 d-flex align-items-center">
                <div className="col-md-8">
                  <Form.Group>
                    <div className="d-flex align-items-center">
                      <Form.Label className="custom-label mb-0">
                        Enter Amount
                      </Form.Label>
                      {errors.amount && (
                        <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                      )}
                    </div>
                    <InputGroup className="mt-1">
                      <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        className="custom-textfield"
                        {...register("amount")}
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
              </div>
              <div className="mt-4 col-md-8">
                <Form.Group>
                  <div className="d-flex align-items-center">
                    <Form.Label className="custom-label mb-0">
                      Payment mode
                    </Form.Label>
                    {errors.paymentMode && (
                      <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                    )}
                  </div>
                  <InputGroup className="mt-1">
                    <Form.Select
                      aria-label="Select"
                      className="custom-textfield"
                      name="paymentMode"
                      {...register("paymentMode")}
                    >
                      <option value="">Payment mode</option>
                      <option value="cash">Cash</option>
                      <option value="bankTransfer">Bank transfer</option>
                      <option value="cheque">Cheque</option>
                      <option value="creditCard">Credit card</option>
                      <option value="debitCard">Debit card</option>
                      <option value="payPal">Paypal</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </div>
            </DialogContent>
            <DialogActions
              sx={{
                display: "flex",
                gap: "8px",
                padding: "16px",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={handleDialogSubmit}
                sx={{
                  fontWeight: "normal",
                  paddingTop: "5px",
                  paddingBottom: "3px",
                  backgroundColor: "#1F3F7F",
                  textTransform: "capitalize",
                }}
              >
                Save
              </Button>
              <Button
                onClick={() => setOpenDialog(false)}
                sx={{
                  backgroundColor: "#CFCFCF",
                  color: "black",
                  fontWeight: "normal",
                  paddingTop: "5px",
                  paddingBottom: "3px",
                  textTransform: "capitalize",
                }}
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
      <div className="divider"></div>
    </div>
    <div className="sales-invoice-outer-card mt-5">
      <p
        className={
          paymentStatus === "paid"
            ? "paid-label"
            : paymentStatus === "halfPaid"
            ? "half-paid-label"
            : paymentStatus === "pending" 
            ? "pending-label"
            : status === "Approved"
            ? "challan-approve"
            : "package-label"
        }
      >
        {status === "Approved" && paymentStatus
          ? getPaymentStatus(paymentStatus)
          : getStatus(status)}
      </p>
      <div className="sales-invoice-detail">
        <div className="sales-invoice">
          <div className="sales-invoice-heading mt-2">
            <p>LOGO</p>
            <p className="sales-id-text">xxxxxxxxxxxxx</p>
            <p className="sales-id-text">xxxxxxxxxxxxx</p>
          </div>
          <div className="sales-order-date me-5">
            <p className="detail-heading mb-1">Invoice</p>
            <p className="sales-id-text">IN:#54675</p>
          </div>
        </div>
        <div className="sales-invoice mt-5">
          <div className="mb-5">
            <p className="fw-bold">Bill to</p>
            <p>xxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxx</p>
          </div>
          <div className="sales-order-date me-5">
            <div className="d-flex mb-3 me-5">
              <p className="col-8">SO#</p>
              <p className="col-2">:</p>
              <p className="col-2">82545532</p>
            </div>
            <div className="d-flex mb-3 me-5">
              <p className="col-8">Invoice date</p>
              <p className="col-2">:</p>
              <p className="col-2">#3654363</p>
            </div>
            <div className="d-flex mb-3 me-5">
              <p className="col-8">Due date</p>
              <p className="col-2">:</p>
              <p className="col-2">23/04/2024</p>
            </div>
          </div>
        </div>
        <div className="table-container delivery-tableWrapper mt-3 ms-0 me-0">
          <Table className="custom-table sales-in-outbound-table delivery-tableHeader">
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
      <div className="credit-note-bottom-content me-5">
        <div className="open-inventory mb-3">
          <p className="col-md-8">Subtotal</p>
          <p className="col-md-3 d-flex justify-content-center">850</p>
        </div>
        <div className="open-inventory mb-3">
          <p className="col-md-8">Shipping charges</p>
          <p className="col-md-3 d-flex justify-content-center">500</p>
        </div>
        <div className="open-inventory mb-3">
          <p className="col-md-8">VAT%</p>
          <p className="col-md-3 d-flex justify-content-center">15</p>
        </div>
        {paymentStatus === "halfPaid" &&
        <div className="open-inventory mb-3">
        <p className="col-md-8">Partial amount</p>
        <p className="col-md-3 d-flex justify-content-center text-danger">-1000</p>
      </div>
        }
        <div className="open-inventory fw-bold">
          <p className="col-md-8">Total amount</p>
          <p className="col-md-3 d-flex justify-content-center">20,000</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PurchaseInvoiceDetails