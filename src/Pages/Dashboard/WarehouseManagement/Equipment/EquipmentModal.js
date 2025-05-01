import React from "react";
import { InputGroup, Form } from "react-bootstrap";
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

const EquipmentModal = ({
  openCreateEquipmentModal,
  setOpenCreateEquipmentModal,
}) => {
  return (
    <div className="purchase-list">
      <Dialog
        open={openCreateEquipmentModal}
        onClose={() => setOpenCreateEquipmentModal(false)}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "650px",
            maxWidth: "80vw",
          },
        }}
      >
        <DialogTitle className="purchase-list" sx={{ padding: 0 }}>
          <h2>New Equipments</h2>
        </DialogTitle>
        <DialogContent>
          <div className="d-md-flex justify-content-between mt-3 mb-3">
            <div className="col-md-5 mb-4">
              <Form.Group>
                <Form.Label className="custom-label">Equipment type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  style={{ height: "45px" }}
                >
                  <option value="forkLifts">Forklifts</option>
                  <option value="palletJacks">Pallet Jacks</option>
                  <option value="conveyorSystems">Conveyor Systems</option>
                  <option value="cranesHoists">Cranes & Hoists</option>
                  <option value="guidedVehicles">
                    Automated Guided Vehicles
                  </option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-5 mb-4">
              <Form.Group>
                <Form.Label className="custom-label">Serial number</Form.Label>
                <InputGroup>
                  <Form.Control className="custom-textfield" />
                </InputGroup>
              </Form.Group>
            </div>
          </div>
          <div className="d-md-flex justify-content-between mt-3 mb-3">
            <div className=" col-md-5">
              <Form.Group>
                <Form.Label className="custom-label">Location</Form.Label>
                <InputGroup>
                  <Form.Control className="custom-textfield" />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-md-5 mb-4">
              <Form.Group>
                <Form.Label className="custom-label">Status</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  style={{ height: "45px" }}
                >
                  <option value="Active">Active</option>
                  <option value="Maintenance">Maintenance</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
          <div className="d-md-flex justify-content-between mt-3 mb-3">
            <div className="col-md-5">
              <Form.Group>
                <Form.Label className="custom-label">Purchase date</Form.Label>
                <InputGroup>
                  <Form.Control className="custom-textfield" type="date" />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-md-5 mb-4">
              <Form.Group>
                <Form.Label className="custom-label">
                  Equipment image
                </Form.Label>
                <InputGroup>
                  <Form.Control type="file" />
                </InputGroup>
              </Form.Group>
            </div>
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
            // onClick={handleDialogSubmit}
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
            onClick={() => setOpenCreateEquipmentModal(false)}
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
    </div>
  );
};

export default EquipmentModal;
