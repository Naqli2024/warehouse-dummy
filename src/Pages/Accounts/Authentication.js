import { React, useState } from "react";
import AuthenticationBg from "../../images/authentication.svg";
import MooitLogo from "../../images/mooit-logo.svg";
import { InputGroup, Form, Button } from "react-bootstrap";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Slide,
} from "@mui/material";
import { forgotPasswordEmailSchema } from "../../Helper/validation";

const Authentication = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [openForgotPasswordDialog, setOpenForgotPasswordDialog] =
    useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [passwordData, setPasswordData] = useState({
    emailId: "",
    newPassword: "",
    confirmNewPassword: ""
  })

  const {
    register,
    handleFormSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordEmailSchema),
    mode: "onBlur",
  });

  const backToHome = () => {
    navigate("/admin/dashboard");
  };

  const handleSubmit = () => {
    navigate("/admin/account");
  };

  const handleDialogSubmit = async () => {
    const isValid = await trigger(["emailId","newPassword", "confirmPassword"]);
    if (!isValid) return;
  };

  return (
    <div className="login">
      <div className="emp-cancel-icon" onClick={backToHome}>
        <CloseIcon className="fs-5 text-secondary" />
      </div>
      <div className="updatePassword-overlay">
        <div className="updatePassword-container">
          <div className="login-form">
            <div className="text-center mt-4">
              {<img src={MooitLogo} alt="mooit-logo" />}
            </div>
            <p className="login-text">Authentication Required</p>
            <p>
              To proceed please verify your identity by entering your password
            </p>
            <div className="d-flex justify-content-center mt-3 mb-3 gap-3">
              <MdAccountCircle size={20} />
              <p>
                UserId:{" "}
                <span className="text-primary">J**son****@gmail.com</span>
              </p>
            </div>
            <Form.Group className="col-12 mb-3">
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="password"
                  placeholder="Enter your Password"
                  type={showNewPassword ? "text" : "password"}
                />
                <InputGroup.Text
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  style={{
                    cursor: "pointer",
                    background: "transparent",
                  }}
                >
                  {showNewPassword ? <Visibility /> : <VisibilityOff />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <div
              className="text-primary cursor-pointer text-end"
              onClick={() => setOpenForgotPasswordDialog(true)}
            >
              Forgot Password?
            </div>
            <div className="mt-5 mb-5 d-flex col-12 justify-content-center">
              <button
                type="submit"
                className="btn flex-grow-1 p-2"
                style={{ color: "white", backgroundColor: "#1F3F7F" }}
                onClick={handleSubmit}
              >
                Verify & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={AuthenticationBg}
        alt="Auth Background"
        className="login-background"
      />
      <Dialog
        open={openForgotPasswordDialog}
        onClose={() => setOpenForgotPasswordDialog(false)}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "500px",
            maxWidth: "80vw",
          },
        }}
      >
        <DialogTitle className="purchase-list" sx={{ padding: 0 }}>
          <h2 className="dialog-cancel-icon">
            Change Password
            <span>
              <CloseIcon onClick={() => setOpenForgotPasswordDialog(false)} />
            </span>
          </h2>
        </DialogTitle>
        <DialogContent>
          <p className="mt-3 mb-3 fw-bold">
            "Create a secure password to protect your account from unauthorized
            access."
          </p>
          <div className="mt-5 d-flex align-items-center">
          <div className="col-md-8">
            <Form.Group>
              <div className="d-flex align-items-center">
                <Form.Label className="custom-label mb-0">Email</Form.Label>
                {errors.emailId && (
                  <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                )}
              </div>
              <InputGroup className="mt-1">
                <Form.Control
                  type="text"
                  aria-label="emailId"
                  className="custom-textfield"
                  name="emailId"
                  {...register("emailId")}
                />
              </InputGroup>
            </Form.Group>
          </div>
          </div>
          <div className="mt-5 d-flex align-items-center">
            <div className="col-md-8">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-0">
                    New Password
                  </Form.Label>
                  {errors.newPassword && (
                    <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                  )}
                </div>
                <InputGroup className="mt-1">
                  <Form.Control
                    type={showNewPassword ? "text" : "password"}
                    aria-label="Password"
                    className="custom-textfield"
                    {...register("newPassword")}
                  />
                  <InputGroup.Text
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    style={{
                      cursor: "pointer",
                      background: "transparent",
                    }}
                  >
                    {showNewPassword ? <Visibility /> : <VisibilityOff />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </div>
          </div>
          <div className="mt-5 mb-5 d-flex align-items-center">
            <div className="col-md-8">
              <Form.Group>
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-0">
                    Confirm Password
                  </Form.Label>
                  {errors.confirmPassword && (
                    <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                  )}
                </div>
                <InputGroup className="mt-1">
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    aria-label="Password"
                    className="custom-textfield"
                    {...register("confirmPassword")}
                  />
                  <InputGroup.Text
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                      cursor: "pointer",
                      background: "transparent",
                    }}
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </InputGroup.Text>
                </InputGroup>
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
            onClick={handleDialogSubmit}
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

export default Authentication;
