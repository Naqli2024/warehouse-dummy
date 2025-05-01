import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { InputGroup, Form, Button } from "react-bootstrap";
import EmployeeDetails from "./EmployeeDetails";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { newEmployeeSchema } from "../../../Helper/validation";
import EmployeeDeptJobModal from "./EmployeeDeptJobModal";

const NewEmployees = ({ backToList }) => {
  const [openEmployeeDetails, setOpenEmployeeDetails] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({ resolver: yupResolver(newEmployeeSchema) });

  const onSubmit = () => {
    setOpenEmployeeDetails(true);
  };

  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      emailId: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      mobileNo: "",
      password: "",
      confirmPassword: "",
      dob: "",
      profile: "",
      jobTitle: "",
      department: "",
      typeOfHire: "",
      dateOfJoining: "",
      nationality: "",
      gender: "",
      accessTo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      {openEmployeeDetails ? (
        <EmployeeDetails
          backToList={() => {
            setOpenEmployeeDetails(false);
          }}
        />
      ) : (
        <div className="purchase-list">
          <h2>New Employee</h2>
          <button onClick={backToList} className="goBack-btn">
            <span>
              <ArrowBackIosIcon />
            </span>
            Back
          </button>
          <form onSubmit={handleSubmit(onSubmit)} className="new-employee-form">
            <div className="p-5">
              <div className="col-md-12 mb-5">
                <Form.Group className="new-employee-field">
                  <Form.Label className="col-md-2">Name</Form.Label>
                  <InputGroup className="me-5">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                  <InputGroup>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-12 mb-5">
                <Form.Group className="new-employee-field">
                  <Form.Label className="col-md-2">Email id</Form.Label>
                  <InputGroup>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="emailId"
                      value={formData.emailId}
                      onChange={handleChange}
                      {...register("email")}
                    />
                    {errors.email && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-12 mb-5">
                <Form.Group className="new-employee-field">
                  <Form.Label className="col-md-2">Address</Form.Label>
                  <InputGroup>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      {...register("address")}
                    />
                    {errors.address && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-12 mb-5">
                <Form.Group className="new-employee-field">
                  <Form.Label className="col-md-2">City</Form.Label>
                  <InputGroup className="me-5">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      {...register("city")}
                    />
                    {errors.city && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                  <Form.Label className="col-md-2">State</Form.Label>
                  <InputGroup>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      {...register("state")}
                    />
                    {errors.state && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-12 mb-5">
                <Form.Group className="new-employee-field">
                  <Form.Label className="col-md-2">Zip code</Form.Label>
                  <InputGroup className="me-5">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      {...register("zipCode")}
                    />
                    {errors.zipCode && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                  <Form.Label className="col-md-2">Mobile no</Form.Label>
                  <InputGroup>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      {...register("mobileNo")}
                    />
                    {errors.mobileNo && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-12 mb-5">
                <Form.Group className="new-employee-field">
                  <Form.Label className="col-md-2">Password</Form.Label>
                  <InputGroup className="me-5">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      type="password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                  <Form.Label className="col-md-2">Confirm Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      type="password"
                      {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-12 mb-5">
                <Form.Group className="new-employee-field">
                  <Form.Label className="col-md-2">DOB</Form.Label>
                  <InputGroup className="me-5">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      type="date"
                      {...register("dob")}
                    />
                    {errors.dob && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                  <Form.Label className="col-md-2">Profile Picture</Form.Label>
                  <div className="upload-profile">Upload</div>
                </Form.Group>
              </div>
              <EmployeeDeptJobModal />
              <div className="col-md-12 mb-5">
                <Form.Group className="new-employee-field">
                  <Form.Label className="col-md-2">Type of hire</Form.Label>
                  <InputGroup className="me-5">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      {...register("typeOfHire")}
                    />
                    {errors.typeOfHire && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                  <Form.Label className="col-md-2">Date of joining</Form.Label>
                  <InputGroup>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      type="date"
                      {...register("dateOfJoining")}
                    />
                    {errors.dateOfJoining && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-12 mb-5">
                <Form.Group className="new-employee-field">
                  <Form.Label className="col-md-2">Nationality</Form.Label>
                  <InputGroup className="me-5">
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      {...register("nationality")}
                    />
                    {errors.nationality && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                  <Form.Label className="col-md-2">Gender</Form.Label>
                  <InputGroup>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      {...register("gender")}
                    />
                    {errors.gender && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-12 mb-5">
                <Form.Group className="new-employee-field">
                  <Form.Label className="col-md-2">Access to</Form.Label>
                  <InputGroup>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="packageReceipt"
                      {...register("accessTo")}
                    />
                    {errors.accessTo && (
                      <InputGroup.Text>
                        {<ErrorOutlineOutlinedIcon className="text-danger" />}
                      </InputGroup.Text>
                    )}
                  </InputGroup>
                  <div className="col-md-6 ms-md-4">
                    <div className="addAccess cursor-pointer">+</div>
                    <div>Add Access</div>
                  </div>
                </Form.Group>
              </div>
              <div className="container-fluid">
                <div className="row justify-content-center mt-5">
                  <div className="col-12 col-md-3 d-flex justify-content-between gap-3">
                    <button
                      type="submit"
                      className="btn flex-grow-1"
                      style={{ color: "white", backgroundColor: "#1F3F7F" }}
                      onClick={handleSubmit}
                    >
                      Create login
                    </button>
                    <button
                      className="btn btn-danger flex-grow-1"
                      onClick={backToList}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewEmployees;
