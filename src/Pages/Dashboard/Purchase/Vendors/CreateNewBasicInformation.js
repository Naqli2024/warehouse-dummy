import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from '@mui/icons-material/Person';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const CreateNewBasicInformation = ({backToList}) => {
  const [filter, setFilter] = React.useState("mr");
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div>
      <div className="vendor-logo text-center pt-3"><PersonIcon/></div>
      <div className="text-primary ms-4 mt-1">Upload Logo</div>
      <div className="new-vendor-info">
        <div className="col-md-8 mb-5">
          <Form.Group className="new-vendor-field">
            <Form.Label className="col-md-3">Name</Form.Label>
            <div className="col-md-2 col-sm-12">
              <FormControl sx={{ minWidth: 60 }}>
                <Select
                  className="package-filter"
                  displayEmpty
                  value={filter}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    height: "40px",
                  }}
                >
                  <MenuItem value="mr">Mr</MenuItem>
                  <MenuItem value="mrs">Mrs</MenuItem>
                </Select>
              </FormControl>
            </div>
            <InputGroup className="me-5">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className="custom-textfield"
                name="packageReceipt"
                placeholder="First name"
              />
            </InputGroup>
            <InputGroup>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className="custom-textfield"
                name="packageReceipt"
                placeholder="Last name"
              />
            </InputGroup>
          </Form.Group>
        </div>
        <div className="col-md-8 mb-5">
          <Form.Group className="new-vendor-field">
            <Form.Label className="col-md-3">Company name</Form.Label>
            <InputGroup>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className="custom-textfield"
                name="packageReceipt"
              />
            </InputGroup>
          </Form.Group>
        </div>
        <div className="col-md-8 mb-5">
          <Form.Group className="new-vendor-field">
            <Form.Label className="col-md-3">Email id</Form.Label>
            <InputGroup>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className="custom-textfield"
                name="packageReceipt"
              />
            </InputGroup>
          </Form.Group>
        </div>
        <div className="col-md-8 mb-5">
          <Form.Group className="new-vendor-field">
            <Form.Label className="col-md-3">Mobile</Form.Label>
            <InputGroup>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className="custom-textfield"
                name="packageReceipt"
              />
            </InputGroup>
            <Form.Label className="col-md-3 landline-field">Landline</Form.Label>
            <InputGroup>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className="custom-textfield"
                name="packageReceipt"
              />
            </InputGroup>
          </Form.Group>
        </div>
        <div className="col-md-8 mb-5">
          <Form.Group className="new-vendor-field">
            <Form.Label className="col-md-3">Website</Form.Label>
            <InputGroup>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className="custom-textfield"
                name="packageReceipt"
              />
            </InputGroup>
            <Form.Label className="col-md-3 landline-field">GST</Form.Label>
            <InputGroup>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className="custom-textfield"
                name="packageReceipt"
              />
            </InputGroup>
          </Form.Group>
        </div>
      </div>
      <hr/>
      <div className="container-fluid p-4">
          <div className="col-12 col-md-3 d-flex justify-content-between gap-2">
            <button
              type="submit"
              className="btn flex-grow-1"
              style={{ color: "white", backgroundColor: "#1F3F7F" }}
            >
              Save
            </button>
            <button className="btn btn-danger flex-grow-1" onClick={backToList}>
              Cancel
            </button>
          </div>
      </div>
    </div>
  );
};

export default CreateNewBasicInformation;
