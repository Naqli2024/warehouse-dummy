import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import Select from "react-select";
import { Menu, MenuItem, Checkbox } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Slide,
} from "@mui/material";

const EmployeeDeptJobModal = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedJobOption, setSelectedJobOption] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openJobDialog, setOpenJobDialog] = useState(false);
  const [openAddNewDepartmentDialog, setOpenAddNewDepartmentDialog] =
    useState(false);
  const [openManageDepartmentDialog, setOpenManageDepartmentDialog] =
    useState(false);
  const [openAddNewJobDialog, setOpenAddNewJobDialog] = useState(false);
  const [openManageJobDialog, setOpenManageJobDialog] = useState(false);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [departmentName, setDepartmentName] = useState("");
  const [newDepartments, setNewDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSave = () => {
    if (departmentName.trim() !== "") {
      setNewDepartments([...newDepartments, departmentName]);
      setDepartmentName("");
      setOpenManageDepartmentDialog(true);
      setOpenAddNewDepartmentDialog(false);
    }
  };

  const handleSaveJob = () => {
    if (departmentName.trim() !== "") {
      setNewDepartments([...newDepartments, departmentName]);
      setDepartmentName("");
      setOpenManageJobDialog(true);
      setOpenAddNewJobDialog(false);
    }
  };

  const handleSelectAll = () => {
    if (selectedDepartments.length === newDepartments.length) {
      setSelectedDepartments([]);
    } else {
      setSelectedDepartments([...newDepartments]);
    }
  };

  const handleCheckboxChange = (department) => {
    setSelectedDepartments((prev) =>
      prev.includes(department)
        ? prev.filter((d) => d !== department)
        : [...prev, department]
    );
  };

  const options = [
    {
      value: "manage",
      label: "Manage Department",
      icon: <SettingsIcon style={{ color: "blue", marginRight: 8 }} />,
    },
  ];

  const JobOptions = [
    {
      value: "manage",
      label: "Manage Job title",
      icon: <SettingsIcon style={{ color: "blue", marginRight: 8 }} />,
    },
  ];

  const handleChange = (selected) => {
    if (selected?.value === "manage") {
      setOpenDialog(true);
      setSelectedOption(null);
    } else {
      setSelectedOption(selected);
    }
  };

  const handleJobChange = (selected) => {
    if (selected?.value === "manage") {
      setOpenJobDialog(true);
      setSelectedJobOption(null);
    } else {
      setSelectedJobOption(selected);
    }
  };

  const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {data.icon && data.icon}
        {data.label}
      </div>
    );
  };

  const customSingleValue = ({ data }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      {data.icon && data.icon}
      {data.label}
    </div>
  );

  const handleAddNewDept = () => {
    setOpenAddNewDepartmentDialog(true);
    setOpenDialog(false);
  };

  const handleAddNewJob = () => {
    setOpenAddNewJobDialog(true);
    setOpenJobDialog(false);
  };

  return (
    <div className="col-md-12 mb-5">
      <Form.Group className="new-employee-field">
        <Form.Label className="col-md-2">Job title</Form.Label>
        <div className="col-md-4 form-group inventory-custom-dropdown">
          <Select
            value={selectedJobOption}
            onChange={handleJobChange}
            options={JobOptions}
            isSearchable
            placeholder="Select JobTitle"
            className="me-4 department-dropdown"
            classNamePrefix="select"
            components={{
              Option: customOption,
              SingleValue: customSingleValue,
            }}
          />
          <Dialog
            open={openJobDialog}
            onClose={() => setOpenJobDialog(false)}
            aria-describedby="alert-dialog-slide-description"
            sx={{
              "& .MuiDialog-paper": {
                width: "450px",
                maxWidth: "80vw",
              },
            }}
          >
            <DialogTitle className="purchase-list" sx={{ padding: 0 }}>
              <h2>Manage Job title</h2>
            </DialogTitle>
            <DialogContent>
              <div className="mt-3">
                <button
                  type="submit"
                  className="btn flex-grow-1"
                  style={{
                    color: "white",
                    backgroundColor: "#1F3F7F",
                  }}
                  onClick={handleAddNewJob}
                >
                  + Add new Job title
                </button>
                <hr />
                <div className="mt-3 mb-3">No Job title found</div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog
            open={openAddNewJobDialog}
            onClose={() => setOpenAddNewJobDialog(false)}
            aria-describedby="alert-dialog-slide-description"
            sx={{
              "& .MuiDialog-paper": {
                width: "450px",
                maxWidth: "80vw",
              },
            }}
          >
            <DialogTitle className="purchase-list" sx={{ padding: 0 }}>
              <h2>Add New Job title</h2>
            </DialogTitle>
            <DialogContent>
              <div className="col-md-8 mt-3">
                <Form.Group className="new-employee-field">
                  <Form.Label className="col-md-3">Name</Form.Label>
                  <InputGroup>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="departmentName"
                      value={departmentName}
                      onChange={(e) => setDepartmentName(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-between gap-3 mt-4">
                <button
                  type="submit"
                  className="btn flex-grow-1"
                  style={{
                    color: "white",
                    backgroundColor: "#1F3F7F",
                  }}
                  onClick={handleSaveJob}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger flex-grow-1"
                  onClick={() => setOpenAddNewJobDialog(false)}
                >
                  Cancel
                </button>
              </div>
              <hr />
              <div className="mt-3 mb-3">
                {newDepartments.length > 0 ? (
                  <div>
                    {newDepartments.map((dept, index) => (
                      <div key={index}>{dept}</div>
                    ))}
                  </div>
                ) : (
                  "No Job title found"
                )}
              </div>
            </DialogContent>
          </Dialog>
          <Dialog
            open={openManageJobDialog}
            onClose={() => setOpenManageJobDialog(false)}
            aria-describedby="alert-dialog-slide-description"
            sx={{
              "& .MuiDialog-paper": {
                width: "600px",
                maxWidth: "80vw",
              },
            }}
          >
            <DialogTitle className="purchase-list" sx={{ padding: 0 }}>
              <h2>Manage Job title</h2>
            </DialogTitle>
            <DialogContent>
              <div className="mt-3 d-md-flex gap-3 align-items-center">
                <div className="col-md-7 mt-3">
                  <Form.Group className="new-employee-field">
                    <InputGroup>
                      <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        className="custom-textfield"
                        name="departmentSearch"
                        placeholder="Search Job title"
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="col-12 col-md-5 mt-3">
                  <button
                    type="button"
                    className="btn flex-grow-1"
                    style={{
                      color: "white",
                      backgroundColor: "#1F3F7F",
                    }}
                    onClick={() => setOpenAddNewJobDialog(true)}
                  >
                    + Add new Job title
                  </button>
                </div>
              </div>
              <hr />
              {selectedDepartments.length > 0 && (
                <div className="d-flex align-items-center gap-3">
                  <div
                    onClick={handleSelectAll}
                    className="dept-select-all-btn"
                  >
                    {selectedDepartments.length === newDepartments.length
                      ? "Unselect all"
                      : "Select all"}
                  </div>
                  <div
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    className="dept-select-all-btn"
                  >
                    More action
                  </div>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem>Rename</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </Menu>
                </div>
              )}
              {newDepartments.length > 0 ? (
                newDepartments
                  .filter((dept) =>
                    dept.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((dept, index, array) => (
                    <div key={index} className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <Checkbox
                          checked={selectedDepartments.includes(dept)}
                          onChange={() => handleCheckboxChange(dept)}
                        />
                        <span>{dept}</span>
                      </div>
                      {index !== array.length - 1 && (
                        <hr className="mt-1 mb-1" />
                      )}
                    </div>
                  ))
              ) : (
                <p>No Job title found</p>
              )}
            </DialogContent>
          </Dialog>
        </div>
        <Form.Label className="col-md-2 dept-left">Department</Form.Label>
        <div className="col-md-4 form-group inventory-custom-dropdown">
          <Select
            className="me-4 department-dropdown"
            classNamePrefix="select"
            value={selectedOption}
            onChange={handleChange}
            options={options}
            isSearchable
            placeholder="Select Department"
            components={{
              Option: customOption,
              SingleValue: customSingleValue,
            }}
          />
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
              <h2>Manage Department</h2>
            </DialogTitle>
            <DialogContent>
              <div className="mt-3">
                <button
                  type="submit"
                  className="btn flex-grow-1"
                  style={{
                    color: "white",
                    backgroundColor: "#1F3F7F",
                  }}
                  onClick={handleAddNewDept}
                >
                  + Add Department
                </button>
                <hr />
                <div className="mt-3 mb-3">No Department found</div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog
            open={openAddNewDepartmentDialog}
            onClose={() => setOpenAddNewDepartmentDialog(false)}
            aria-describedby="alert-dialog-slide-description"
            sx={{
              "& .MuiDialog-paper": {
                width: "450px",
                maxWidth: "80vw",
              },
            }}
          >
            <DialogTitle className="purchase-list" sx={{ padding: 0 }}>
              <h2>Add New Department</h2>
            </DialogTitle>
            <DialogContent>
              <div className="col-md-8 mt-3">
                <Form.Group className="new-employee-field">
                  <Form.Label className="col-md-3">Name</Form.Label>
                  <InputGroup>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="departmentName"
                      value={departmentName}
                      onChange={(e) => setDepartmentName(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-between gap-3 mt-4">
                <button
                  type="submit"
                  className="btn flex-grow-1"
                  style={{
                    color: "white",
                    backgroundColor: "#1F3F7F",
                  }}
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger flex-grow-1"
                  onClick={() => setOpenAddNewDepartmentDialog(false)}
                >
                  Cancel
                </button>
              </div>
              <hr />
              <div className="mt-3 mb-3">
                {newDepartments.length > 0 ? (
                  <div>
                    {newDepartments.map((dept, index) => (
                      <div key={index}>{dept}</div>
                    ))}
                  </div>
                ) : (
                  "No Department found"
                )}
              </div>
            </DialogContent>
          </Dialog>
          <Dialog
            open={openManageDepartmentDialog}
            onClose={() => setOpenManageDepartmentDialog(false)}
            aria-describedby="alert-dialog-slide-description"
            sx={{
              "& .MuiDialog-paper": {
                width: "600px",
                maxWidth: "80vw",
              },
            }}
          >
            <DialogTitle className="purchase-list" sx={{ padding: 0 }}>
              <h2>Manage Department</h2>
            </DialogTitle>
            <DialogContent>
              <div className="mt-3 d-md-flex gap-3 align-items-center">
                <div className="col-md-7 mt-3">
                  <Form.Group className="new-employee-field">
                    <InputGroup>
                      <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        className="custom-textfield"
                        name="departmentSearch"
                        placeholder="Search department"
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="col-12 col-md-5 mt-3">
                  <button
                    type="button"
                    className="btn flex-grow-1"
                    style={{
                      color: "white",
                      backgroundColor: "#1F3F7F",
                    }}
                    onClick={() => setOpenAddNewDepartmentDialog(true)}
                  >
                    + Add Department
                  </button>
                </div>
              </div>
              <hr />
              {selectedDepartments.length > 0 && (
                <div className="d-flex align-items-center gap-3">
                  <div
                    onClick={handleSelectAll}
                    className="dept-select-all-btn"
                  >
                    {selectedDepartments.length === newDepartments.length
                      ? "Unselect all"
                      : "Select all"}
                  </div>
                  <div
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    className="dept-select-all-btn"
                  >
                    More action
                  </div>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem>Rename</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </Menu>
                </div>
              )}
              {newDepartments.length > 0 ? (
                newDepartments
                  .filter((dept) =>
                    dept.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((dept, index, array) => (
                    <div key={index} className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <Checkbox
                          checked={selectedDepartments.includes(dept)}
                          onChange={() => handleCheckboxChange(dept)}
                        />
                        <span>{dept}</span>
                      </div>
                      {index !== array.length - 1 && (
                        <hr className="mt-1 mb-1" />
                      )}
                    </div>
                  ))
              ) : (
                <p>No Department found</p>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </Form.Group>
    </div>
  );
};

export default EmployeeDeptJobModal;
