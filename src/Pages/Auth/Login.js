import { React, useState } from "react";
import loginBackground from "../../images/loginBackground.svg";
import loginForm from "../../images/login.svg";
import googleLogo from "../../images/google-logo.svg";
import fbLogo from "../../images/fb-logo.svg";
import xLogo from "../../images/x-logo.svg";
import linkedInLogo from "../../images/linkedIn-logo.svg";
import { InputGroup, Form, Button } from "react-bootstrap";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/user/updatePassword");
  };

  return (
    <div className="login">
      <div className="emp-cancel-icon" onClick={backToHome}>
        <CloseIcon className="fs-5 text-secondary" />
      </div>
      <div className="login-overlay">
        <div className="login-container">
          <div className="col-12 col-md-6">
            <img
              src={loginForm}
              alt="Login Background"
              className="login-form-img"
            />
          </div>
          <div className="col-12 col-md-6 login-form">
            <p className="login-text">Login</p>
            <Form.Group className="col-md-10 mb-3">
              <Form.Label>Account Type</Form.Label>
                            <InputGroup className="mt-2">
                              <Form.Select className="custom-textfield">
                                <option value="">Select Account type</option>
                                <option>Admin</option>
                                <option>Vendor</option>
                              </Form.Select>
                            </InputGroup>
                          </Form.Group>
            <Form.Group className="col-md-10 mb-3">
              <Form.Label>Email Id</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="email"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="col-md-10 mb-3">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="password"
                  type={showPassword ? "text" : "password"}
                />
                <InputGroup.Text
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    cursor: "pointer",
                    background: "transparent",
                  }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <div className="text-primary cursor-pointer">Forgot Password?</div>
            <div className="mt-4 d-flex col-md-10 justify-content-center">
              <button
                type="submit"
                className="btn flex-grow-1 p-2"
                style={{ color: "white", backgroundColor: "#1F3F7F" }}
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="col-md-10 login-divider mt-4">
              <hr /> <span>or</span> <hr />
            </div>
            <p>Login using</p>
            <div className="d-flex gap-3 mb-4">
              <img
                src={googleLogo}
                alt="google-logo"
                className="cursor-pointer"
              />
              <img src={fbLogo} alt="fb-logo" className="cursor-pointer" />
              <img src={xLogo} alt="x-logo" className="cursor-pointer" />
              <img
                src={linkedInLogo}
                alt="linkedIn-logo"
                className="cursor-pointer"
              />
            </div>
            <p>
              Don't have an account?
              <span
                className="text-primary cursor-pointer ms-1"
                onClick={handleSignUp}
              >
                Signup
              </span>
            </p>
          </div>
        </div>
      </div>
      <img
        src={loginBackground}
        alt="Login Background"
        className="login-background"
      />
    </div>
  );
};

export default Login;
