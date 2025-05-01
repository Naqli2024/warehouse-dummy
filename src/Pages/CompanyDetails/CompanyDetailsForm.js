import React, { useState, Suspense, lazy } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { companyDetailsSchema } from "../../Helper/validation";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { createCompany } from "../../Redux/company/companySlice";
const CompanyDetails = lazy(() => import("./CompanyDetails"));

const CompanyDetailsForm = () => {
  const [openCompanyDetails, setOpenCompanyDetails] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  // const { loading, error } = useSelector((state) => state.company);

  const handleDrop = async (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (file) {
      const isValid = await validateFile(file);
      if (isValid) {
        setSelectedFile(file);
      }
    }
  };

  const validateFile = (file) => {
    return new Promise((resolve) => {
      const allowedTypes = ["image/png", "image/jpeg", "image/svg+xml"];
      const maxWidth = 800;
      const maxHeight = 400;

      if (!allowedTypes.includes(file.type)) {
        alert("Invalid file type! Only SVG, PNG, and JPEG are allowed.");
        resolve(false);
        return;
      }

      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width > maxWidth || img.height > maxHeight) {
          alert(`Image dimensions exceed ${maxWidth}x${maxHeight}px`);
          resolve(false);
        } else {
          resolve(true);
        }
      };
    });
  };

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({ resolver: yupResolver(companyDetailsSchema) });

  const [formData, setFormData] = useState({
    companyLogo: null,
    companyId: "",
    companyType: "",
    website: "",
    country: "",
    state: "",
    city: "",
    streetName1: "",
    streetName2: "",
    zipCode: "",
    faxNumber: "",
    mobileNumber: "",
    twitter: "",
    faceBook: "",
    linkedIn: "",
    instagram: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFormData((prevState) => ({
        ...prevState,
        companyLogo: file,
      }));
    }
  };

  const onSubmit = (data) => {
    const finalData = { ...formData, companyLogo: selectedFile };
    const formDataToSend = new FormData();
    Object.keys(finalData).forEach((key) => {
      formDataToSend.append(key, finalData[key]);
    });

    dispatch(createCompany(formDataToSend));
  };

  return (
    <div>
      {openCompanyDetails ? (
        <Suspense
          fallback={
            <div className="lazy-loading-text">Loading Company Details...</div>
          }
        >
          <CompanyDetails backToList={() => setOpenCompanyDetails(false)} />
        </Suspense>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="purchase-list">
          <h2>Company Details</h2>
          <p className="mt-3 ms-3">Company name: Fedx logistics</p>
          <hr />
          <div className="user-company-details">
            <p className="fw-bold mb-5">Profile Information</p>
            <div className="d-md-flex align-items-center">
              <div className="col-md-5">
                <p>Company logo</p>
                <p>
                  Upload your company’s logo for better brand identification,
                  and it will be reflected across all your other documents.
                </p>
              </div>
              <div
                className="col-md-5 upload-company-logo"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept=".svg,.png,.jpeg,.jpg"
                  onChange={(e) => {
                    handleFileChange(e);
                    setFormData((prevState) => ({
                      ...prevState,
                      companyLogo: e.target.files[0],
                    }));
                  }}
                  style={{ display: "none" }}
                  id="fileInput"
                />

                <label htmlFor="fileInput" className="upload-label">
                  <AiOutlineCloudUpload size={40} className="mb-3" />
                  {selectedFile ? (
                    <p className="text-success">{selectedFile.name}</p>
                  ) : formData.companyLogo ? (
                    <p className="text-success">{formData.companyLogo.name}</p>
                  ) : (
                    <p className="text-secondary">
                      <span className="text-dark text-decoration-underline cursor-pointer">
                        Click to upload
                      </span>{" "}
                      or drag and drop SVG, PNG, JPEG (max 800x400px)
                    </p>
                  )}
                </label>
              </div>
            </div>
            <Form.Group className="col-md-8 mt-5 d-md-flex align-items-center">
              <Form.Label className="col-md-4">Company Id</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="companyId"
                  {...register("companyId")}
                  value={formData.companyId}
                  onChange={handleChange}
                />
                {errors.companyId && (
                  <InputGroup.Text>
                    {<ErrorOutlineOutlinedIcon className="text-danger" />}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
            <Form.Group className="col-md-8 mt-5 d-md-flex align-items-center">
              <Form.Label className="col-md-4">Company type</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="companyType"
                  {...register("companyType")}
                  value={formData.companyType}
                  onChange={handleChange}
                />
                {errors.companyType && (
                  <InputGroup.Text>
                    {<ErrorOutlineOutlinedIcon className="text-danger" />}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
            <Form.Group className="col-md-8 mt-5 d-md-flex align-items-center">
              <Form.Label className="col-md-4">Website</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="website"
                  {...register("website")}
                  value={formData.website}
                  onChange={handleChange}
                />
                {errors.website && (
                  <InputGroup.Text>
                    {<ErrorOutlineOutlinedIcon className="text-danger" />}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
          </div>
          <hr />
          <div className="user-company-details">
            <p className="fw-bold mb-5">Company Location</p>
            <Form.Group className="col-md-8 mt-5 d-md-flex align-items-center">
              <Form.Label className="col-md-4">Country</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="country"
                  {...register("country")}
                  value={formData.country}
                  onChange={handleChange}
                />
                {errors.country && (
                  <InputGroup.Text>
                    {<ErrorOutlineOutlinedIcon className="text-danger" />}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
            <Form.Group className="col-md-8 mt-5 d-md-flex align-items-center">
              <Form.Label className="col-md-4">State</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="state"
                  {...register("state")}
                  value={formData.state}
                  onChange={handleChange}
                />
                {errors.state && (
                  <InputGroup.Text>
                    {<ErrorOutlineOutlinedIcon className="text-danger" />}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
            <Form.Group className="col-md-8 mt-5 d-md-flex align-items-center">
              <Form.Label className="col-md-4">City</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="city"
                  {...register("city")}
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && (
                  <InputGroup.Text>
                    {<ErrorOutlineOutlinedIcon className="text-danger" />}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
          </div>
          <hr />
          <div className="user-company-details">
            <p className="fw-bold mb-5">Company Address</p>
            <Form.Group className="col-md-8 mt-5 d-md-flex align-items-center">
              <Form.Label className="col-md-4">Street name 1</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="streetName1"
                  {...register("streetName1")}
                  value={formData.streetName1}
                  onChange={handleChange}
                />
                {errors.streetName1 && (
                  <InputGroup.Text>
                    {<ErrorOutlineOutlinedIcon className="text-danger" />}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
            <Form.Group className="col-md-8 mt-5 d-md-flex align-items-center">
              <Form.Label className="col-md-4">Street name 2</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="streetName2"
                  value={formData.streetName2}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="col-md-8 mt-5 d-md-flex align-items-center">
              <Form.Label className="col-md-4">Zip code</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="zipCode"
                  {...register("zipCode")}
                  value={formData.zipCode}
                  onChange={handleChange}
                />
                {errors.zipCode && (
                  <InputGroup.Text>
                    {<ErrorOutlineOutlinedIcon className="text-danger" />}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
            <Form.Group className="col-md-8 mt-5 d-md-flex align-items-center">
              <Form.Label className="col-md-4">Fax number</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="faxNumber"
                  {...register("faxNumber")}
                  value={formData.faxNumber}
                  onChange={handleChange}
                />
                {errors.faxNumber && (
                  <InputGroup.Text>
                    {<ErrorOutlineOutlinedIcon className="text-danger" />}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
            <Form.Group className="col-md-8 mt-5 d-md-flex align-items-center">
              <Form.Label className="col-md-4">Mobile number</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="custom-textfield"
                  name="mobileNumber"
                  {...register("mobileNumber")}
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
                {errors.mobileNumber && (
                  <InputGroup.Text>
                    {<ErrorOutlineOutlinedIcon className="text-danger" />}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
          </div>
          <hr />
          <div className="user-company-details">
            <p className="fw-bold">Social media</p>
            <div className="d-md-flex">
              <div className="col-md-4">
                <p className="mb-5">Add your social media links</p>
              </div>
              <div className="col-md-4 mb-5">
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Text style={{ background: "transparent" }}>
                      Twitter.com/
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mt-5">
                  <InputGroup>
                    <InputGroup.Text style={{ background: "transparent" }}>
                      Facebook.com/
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="faceBook"
                      value={formData.faceBook}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mt-5">
                  <InputGroup>
                    <InputGroup.Text style={{ background: "transparent" }}>
                      Linkedin.com/
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mt-5">
                  <InputGroup>
                    <InputGroup.Text style={{ background: "transparent" }}>
                      Instagram.com/
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      className="custom-textfield"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row justify-content-center mt-5 mb-5">
              <div className="col-12 col-md-3 d-flex justify-content-between gap-3">
                <button
                  type="submit"
                  className="btn flex-grow-1"
                  style={{ color: "white", backgroundColor: "#1F3F7F" }}
                  // onClick={handleSubmit}
                >
                  Save
                </button>
                <button className="btn btn-danger flex-grow-1">Cancel</button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CompanyDetailsForm;
