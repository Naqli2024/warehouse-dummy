import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { InputGroup, Form } from "react-bootstrap";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloseIcon from '@mui/icons-material/Close';

const PrintBarcodeDialog = ({ open, handleClose }) => {
  const [isPreviewChecked, setIsPreviewChecked] = useState(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: isPreviewChecked ? "1200px" : "600px",
          maxWidth: "80vw",
        },
      }}
    >
      <DialogTitle className="purchase-list" sx={{ padding: 0 }}>
        <h2 className="dialog-cancel-icon">Barcode Generator
          <span><CloseIcon onClick={() => handleClose(false)}/></span></h2>
      </DialogTitle>
      <DialogContent className="barcode-dialog-content">
        <div className="barcode-dialog-left-content">
          <div className="dialog-height-width">
            <div className="mt-3 col-md-3">
              <Form.Group>
                <Form.Label className="custom-label mb-0">Width</Form.Label>
                <InputGroup className="mt-1">
                  <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="mt-3 col-md-3">
              <Form.Group>
                <Form.Label className="custom-label mb-0">Height</Form.Label>
                <InputGroup className="mt-1">
                  <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>
          <div className="col-10">
            <div className="d-flex mt-5">
              <p className="col-4">
                <span className="me-2 ">
                  <LockOutlinedIcon />
                </span>
                Item name
              </p>
              <p className="col-2">-</p>
              <p className="col-4">xxxxxxxxx</p>
            </div>
            <div className="d-flex">
              <p className="col-4">
                <span className="me-2 ">
                  <LockOutlinedIcon />
                </span>
                Manufacture
              </p>
              <p className="col-2">-</p>
              <p className="col-4">xxxxxxxxx</p>
            </div>
            <div className="d-flex">
              <p className="col-4">
                <span className="me-2 ">
                  <LockOutlinedIcon />
                </span>
                Expiry date
              </p>
              <p className="col-2">-</p>
              <p className="col-4">23/02/2024</p>
            </div>
            <div className="d-flex">
              <p className="col-4">
                <span className="me-2 ">
                  <LockOutlinedIcon />
                </span>
                Part no
              </p>
              <p className="col-2">-</p>
              <p className="col-4">#734635665335</p>
            </div>
            <div className="d-flex align-items-center mt-2">
              <p className="col-4">Product name</p>
              <p className="col-2">-</p>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </div>
            <div className="d-flex align-items-center mt-2">
              <p className="col-4">Price</p>
              <p className="col-2">-</p>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </div>
            <div className="d-flex align-items-center mt-2">
              <p className="col-4">MRP</p>
              <p className="col-2">-</p>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </div>
          </div>
          <div className="dialog-add-field-btn">Add</div>
          <div className="d-flex mt-4">
            <input
              type="checkbox"
              checked={isPreviewChecked}
              onChange={() => setIsPreviewChecked(!isPreviewChecked)}
            />
            <p className="ms-2 m-0 p-0">Preview Barcode</p>
          </div>
        </div>
        {isPreviewChecked && <div className="dialog-vertical-divider" />}
        {isPreviewChecked && (
          <div className="barcode-dialog-right-content ">
            <div className="mt-4 w-100">
              <Form.Group className="text-center w-100">
                <Form.Label className="custom-label">Preview</Form.Label>
                <InputGroup className="mt-4 justify-content-center">
                  <Form.Select
                    aria-label="Select Template"
                    className="custom-textfield text-center"
                    style={{ width: "100%", maxWidth: "200px" }}
                  >
                    <option value="template1">Template 1</option>
                    <option value="template2">Template 2</option>
                    <option value="template3">Template 3</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
            </div>
            <div className="barcode-ticket">
              <div className="d-flex gap-3 justify-content-center">
                <div className="d-flex col-md-5">
                  <p className="col-3">I/N</p>
                  <p className="col-1">-</p>
                  <p className="col-3">xxxxxxxxx</p>
                </div>
                <div className="d-flex col-md-5">
                  <p className="col-3">Mfg</p>
                  <p className="col-1">-</p>
                  <p className="col-3">xxxxxxxxx</p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center">
                <div className="d-flex col-md-5">
                  <p className="col-3">P/N</p>
                  <p className="col-1">-</p>
                  <p className="col-3">#9792380808</p>
                </div>
                <div className="d-flex col-md-5">
                  <p className="col-3">Exp</p>
                  <p className="col-1">-</p>
                  <p className="col-3">23/04/2024</p>
                </div>
              </div>
              <div className="text-center mt-4">BARCODE</div>
              <div className="ms-5 me-5 mb-4 barcode-divider"/>
              <div className="d-flex gap-3 ms-5 me-5 justify-content-center">
                <div className="d-flex col-md-5">
                  <p className="me-3">Mrp</p>
                  <p className="me-3">-</p>
                  <p className="me-3">4000</p>
                </div>
                <div className="d-flex col-md-5">
                  <p className="ms-3 me-3">Price</p>
                  <p className="me-3">-</p>
                  <p className="me-3">23456</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          gap: "8px",
          padding: "16px",
          marginLeft: "30px",
          justifyContent: "start",
        }}
      >
        <Button
          variant="contained"
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
          onClick={() => handleClose(false)}
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
  );
};

export default PrintBarcodeDialog;
