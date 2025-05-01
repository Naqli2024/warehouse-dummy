import React from "react";
import { useState } from "react";
import AccountHeader from "../../images/account-header.svg";
import PersonIcon from "@mui/icons-material/Person";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { LuSaveAll } from "react-icons/lu";
import { InputGroup, Form } from "react-bootstrap";

const UserProfile = () => {
  const [isEditClicked,setIsEditClicked] = useState(false);

  return (
    <div>
      <div className="image-container">
        <img src={AccountHeader} className="employee-bg-header" />
        <div className="account-header">
          <div className="user-account-profile">
            <PersonIcon style={{ width: "50px", height: "50px" }} />
          </div>
          <div className="account-userid">
            <p className="fw-bold account-userid m-0">Jackson.T</p>
            <p className="mt-1">User id: 888847493833</p>
          </div>
        </div>
      </div>
      <div className="userProfile-info">
        <div>
          <div className="d-md-flex justify-content-between">
            <p className="fw-bold">Personal Information</p>
            <div className="userProfile-edit gap-1" onClick={()=>(setIsEditClicked(!isEditClicked))}>
              {isEditClicked ?<LuSaveAll/> :<ModeEditOutlineOutlinedIcon />}
              {isEditClicked ? "Save" : "Edit"}
            </div>
          </div>
          <div className="col-md-7 user-content">
            <p className="col-md-2">Full name</p>
            <p className="col-md-1 hide-on-small">:</p>
            {isEditClicked 
            ? (<Form.Group className="col-md-5 col-12">
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  className="custom-textfield"
                  name="fullName"
                  type= "text"
                />
              </InputGroup>
            </Form.Group>)
            : (<p className="col-md-2">Jackson.T</p>)}
          </div>
          <div className="col-md-7 user-content ">
            <p className="col-md-2">Display name</p>
            <p className="col-md-1 hide-on-small">:</p>
            {isEditClicked 
            ? (<Form.Group className="col-md-5 col-12">
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  className="custom-textfield"
                  name="displayName"
                  type= "text"
                />
              </InputGroup>
            </Form.Group>)
            : (<p className="col-md-2">Jackson.T</p>)}
          </div>
        </div>
        <hr />
        <div>
          <p className="fw-bold">Contact Details</p>
          <div className="col-md-7 user-content">
            <p className="col-md-2">Phone number</p>
            <p className="col-md-1 hide-on-small">:</p>
            {isEditClicked 
            ? (<Form.Group className="col-md-5 col-12">
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  className="custom-textfield"
                  name="phoneNo"
                  type= "text"
                />
              </InputGroup>
            </Form.Group>)
            : (<p className="col-md-2">7685859483</p>)}
          </div>
          <div className="col-md-7 user-content">
            <p className="col-md-2">Email Id</p>
            <p className="col-md-1 hide-on-small">:</p>
            {isEditClicked 
            ? (<Form.Group className="col-md-5 col-12">
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  className="custom-textfield"
                  name="email"
                  type= "text"
                />
              </InputGroup>
            </Form.Group>)
            : (<p className="col-md-2">Jackson98@gmail.com</p>)}
          </div>
        </div>
        <hr />
        <div>
          <p className="fw-bold">Location Details</p>
          <div className="col-md-7 user-content">
            <p className="col-md-2">Country</p>
            <p className="col-md-1 hide-on-small">:</p>
            {isEditClicked 
            ? (<Form.Group className="col-md-5 col-12">
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  className="custom-textfield"
                  name="country"
                  type= "text"
                />
              </InputGroup>
            </Form.Group>)
            : (<p className="col-md-2">India</p>)}
          </div>
          <div className="col-md-7 user-content">
            <p className="col-md-2">State</p>
            <p className="col-md-1 hide-on-small">:</p>
            {isEditClicked 
            ? (<Form.Group className="col-md-5 col-12">
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  className="custom-textfield"
                  name="state"
                  type= "text"
                />
              </InputGroup>
            </Form.Group>)
            : (<p className="col-md-2">Tamilnadu</p>)}
          </div>
          <div className="col-md-7 user-content">
            <p className="col-md-2">City</p>
            <p className="col-md-1 hide-on-small">:</p>
            {isEditClicked 
            ? (<Form.Group className="col-md-5 col-12">
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  className="custom-textfield"
                  name="city"
                  type= "text"
                />
              </InputGroup>
            </Form.Group>)
            : (<p className="col-md-2">Thoothukudi</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
