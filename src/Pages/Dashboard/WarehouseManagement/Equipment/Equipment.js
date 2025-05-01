import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import PersonIcon from "@mui/icons-material/Person";
import Select from "react-select";
import CloseIcon from "@mui/icons-material/Close";
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
import EquipmentModal from "./EquipmentModal";

const Equipment = () => {
  const [openCreateEquipmentModal, setOpenCreateEquipmentModal] =
    useState(false);
  const [openFilterCategoryModal, setOpenFilterCategoryModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const equipmentOptions = [
    { value: "forkLifts", label: "Forklifts" },
    { value: "palletJacks", label: "Pallet Jacks" },
    { value: "conveyorSystems", label: "Conveyor Systems" },
    { value: "cranesHoists", label: "Cranes & Hoists" },
    { value: "automatedGuidedVehicles", label: "Automated Guided Vehicles" },
    { value: "divider", label: "divider", isDivider: true, isDisabled: true },
    { value: "selectCategory", label: "Select by Category" },
  ].filter((option) => !openFilterCategoryModal || (option.value !== "selectCategory" && !option.isDivider));

  const handleChange = (selected) => {
    if (selected?.value === "selectCategory") {
      setOpenFilterCategoryModal(true);
    } else {
      setSelectedOption(selected);
    }
  };

  return (
    <div>
      <div className="sales-return search-btn">
        <div className="col-md-4">
          <Select
            options={equipmentOptions}
            isSearchable={true}
            classNamePrefix="custom-select"
            placeholder="Search equipments"
            value={selectedOption}
            onChange={handleChange}
            getOptionLabel={(e) =>
              e.isDivider ? <hr style={{ margin: "0" }} /> : e.label
            }
          />
        </div>
        <button
          type="button"
          className="btn create-new-btn"
          onClick={() => setOpenCreateEquipmentModal(true)}
        >
          Create new
        </button>
      </div>
      <div className="table-container mt-5 mx-4">
        <Table
          bordered
          className="custom-table sales-in-outbound-table delivery-tableHeader"
        >
          <thead>
            <tr>
              <th>Equipment type</th>
              <th>S/N</th>
              <th>Location</th>
              <th>Status</th>
              <th>Purchase date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="d-flex align-items-center gap-3">
                <div className="personAvatar">
                  <PersonIcon />
                </div>
                Forklift
              </td>
              <td>76575435462</td>
              <td>Pallet storage floor</td>
              <td>Active</td>
              <td>21/04/2024</td>
              <td className="action-icons">
                <LiaEditSolid className="cursor-pointer"/>
                <RiDeleteBin6Line className="ms-2 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Dialog
        open={openFilterCategoryModal}
        onClose={() => setOpenFilterCategoryModal(false)}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "650px",
            maxWidth: "80vw",
          },
        }}
      >
        <DialogTitle className="purchase-list" sx={{ padding: 0 }}>
          <h2 className="dialog-cancel-icon">
            Filter
            <span>
              <CloseIcon onClick={() => setOpenFilterCategoryModal(false)} />
            </span>
          </h2>
        </DialogTitle>
        <DialogContent>
          <div className="d-flex align-items-center mt-4">
            <Form.Label className="mb-0 me-3">Search</Form.Label>
            <Select
              className="col-md-5"
              options={equipmentOptions}
              isSearchable={true}
              classNamePrefix="custom-select"
              placeholder="Search equipments"
              value={selectedOption}
              onChange={handleChange}
            />
          </div>
          <hr />
          <div className="d-md-flex justify-content-between mt-3 mb-3">
            <div className="col-md-5 mb-4">
              <Form.Group>
                <Form.Label className="custom-label">Serial number</Form.Label>
                <InputGroup>
                  <Form.Control className="custom-textfield" />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-md-5 mb-4">
              <Form.Group>
                <Form.Label className="custom-label">Location</Form.Label>
                <InputGroup>
                  <Form.Control className="custom-textfield" />
                </InputGroup>
              </Form.Group>
            </div>
          </div>
          <div className="d-md-flex justify-content-between mt-3 mb-3">
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
            <div className="col-md-5">
              <Form.Group>
                <Form.Label className="custom-label">Purchase date</Form.Label>
                <InputGroup>
                  <Form.Control className="custom-textfield" type="date" />
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
            className="bg-primary col-md-5"
            sx={{
              fontWeight: "normal",
              paddingTop: "5px",
              paddingBottom: "3px",
              backgroundColor: "#1F3F7F",
              textTransform: "capitalize",
            }}
          >
            Search
          </Button>
        </DialogActions>
      </Dialog>
      {openCreateEquipmentModal && (
        <EquipmentModal
          openCreateEquipmentModal={openCreateEquipmentModal}
          setOpenCreateEquipmentModal={setOpenCreateEquipmentModal}
        />
      )}
    </div>
  );
};

export default Equipment;
