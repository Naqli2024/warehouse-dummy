import { React, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Slide,
} from "@mui/material";

const StockLocationModal = ({
  openStockLocationDialog,
  setOpenStockLocationDialog,
}) => {
  return (
    <div>
      <Dialog
        open={openStockLocationDialog}
        onClose={() => setOpenStockLocationDialog(false)}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "1200px",
            maxWidth: "100vw",
          },
        }}
      >
        <DialogTitle className="purchase-list" sx={{ padding: 0 }}>
          <h2 className="dialog-cancel-icon">
            Create Stock Transfer
            <span>
              <CloseIcon onClick={() => setOpenStockLocationDialog(false)} />
            </span>
          </h2>
        </DialogTitle>
        <DialogContent>
          <div className="stock-transfer-modal">
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-0">
                    Product name
                  </Form.Label>
                </div>
                <InputGroup className="mt-1">
                  <Form.Control
                    type="text"
                    aria-label="productName"
                    className="custom-textfield"
                    name="productName"
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-0">SKU</Form.Label>
                </div>
                <InputGroup className="mt-1">
                  <Form.Control
                    type="text"
                    aria-label="sku"
                    className="custom-textfield"
                    name="sku"
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-0">
                    Transfer date
                  </Form.Label>
                </div>
                <InputGroup className="mt-1">
                  <Form.Control
                    type="date"
                    aria-label="transferDate"
                    className="custom-textfield"
                    name="transferDate"
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>
          <div className="stock-transfer-modal">
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-1">
                    Source warehouse
                  </Form.Label>
                </div>
                <Form.Select aria-label="Default select example">
                  <option value="warehouse1">Warehouse 1</option>
                  <option value="warehouse2">Warehouse 2</option>
                  <option value="warehouse3">Warehouse 3</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-1">
                    Destination warehouse
                  </Form.Label>
                </div>
                <Form.Select aria-label="Default select example">
                  <option value="warehouse1">Warehouse 1</option>
                  <option value="warehouse2">Warehouse 2</option>
                  <option value="warehouse3">Warehouse 3</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-1">
                    Source warehouse contact person
                  </Form.Label>
                </div>
                <Form.Select aria-label="Default select example">
                  <option value="warehouse1">Warehouse 1</option>
                  <option value="warehouse2">Warehouse 2</option>
                  <option value="warehouse3">Warehouse 3</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
          <div className="stock-transfer-modal">
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-1">
                    Destination warehouse contact person
                  </Form.Label>
                </div>
                <Form.Select aria-label="Default select example">
                  <option value="warehouse1">Warehouse 1</option>
                  <option value="warehouse2">Warehouse 2</option>
                  <option value="warehouse3">Warehouse 3</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-1">
                    Quantity
                  </Form.Label>
                </div>
                <InputGroup className="mt-1">
                  <Form.Control
                    type="text"
                    aria-label="quantity"
                    className="custom-textfield"
                    name="quantity"
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-1">
                    New rack no
                  </Form.Label>
                </div>
                <Form.Select aria-label="Default select example">
                  <option value="warehouse1">Warehouse 1</option>
                  <option value="warehouse2">Warehouse 2</option>
                  <option value="warehouse3">Warehouse 3</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
          <div className="stock-transfer-modal">
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-1">
                    New shelf
                  </Form.Label>
                </div>
                <Form.Select aria-label="Default select example">
                  <option value="warehouse1">Warehouse 1</option>
                  <option value="warehouse2">Warehouse 2</option>
                  <option value="warehouse3">Warehouse 3</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-1">
                    New shelf space
                  </Form.Label>
                </div>
                <Form.Select aria-label="Default select example">
                  <option value="warehouse1">Warehouse 1</option>
                  <option value="warehouse2">Warehouse 2</option>
                  <option value="warehouse3">Warehouse 3</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-0">
                    Estimated arrival time
                  </Form.Label>
                </div>
                <InputGroup className="mt-1">
                  <Form.Control
                    type="time"
                    aria-label="quantity"
                    className="custom-textfield"
                    name="quantity"
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>
          <div className="stock-transfer-modal">
            <div className="col-md-3">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-1">
                    Reason for transfer
                  </Form.Label>
                </div>
                <Form.Select aria-label="Default select example">
                  <option value="warehouse1">Warehouse 1</option>
                  <option value="warehouse2">Warehouse 2</option>
                  <option value="warehouse3">Warehouse 3</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
        </DialogContent>
        <DialogActions
          sx={{
            marginBottom: "20px",
            justifyContent: "center",
          }}
        >
          <Button
            className="px-5"
            // onClick={handleDialogSubmit}
            sx={{
              fontWeight: "normal",
              backgroundColor: "#1F3F7F",
              textTransform: "capitalize",
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StockLocationModal;
