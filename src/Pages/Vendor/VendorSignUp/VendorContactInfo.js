import React, { useEffect, useState } from "react";
import ContactInfo from "../../../images/contact-info.svg";
import { InputGroup, Form, Button } from "react-bootstrap";
import { TbFileUpload } from "react-icons/tb";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { vendorContactInfoSchema } from "../../../Helper/validation";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { updateContactInfo } from "../../../Redux/Vendor/ContactInfoSlice";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import saudiData from "../../../Data/saudi";
import { getVendorById } from "../../../Redux/Vendor/VendorSlice";

const VendorContactInfo = ({ setActiveStep }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [dynamicFormFields, setDynamicFormFields] = useState([]);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const dispatch = useDispatch();

  const { vendors } = useSelector((state) => state.vendorReducer);
  const personalInformation = vendors?.data?.personalInformation;
  const vendorCountry = personalInformation?.country;
  const vendorCompanyType = personalInformation?.companyType;

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(vendorContactInfoSchema),
    mode: "onBlur",
  });

  const ALLOWED_FILE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/svg+xml",
  ];
  const MAX_FILE_SIZE_BYTES = 1048576; // 1 MB in bytes

  // Effect to fetch vendor data
  useEffect(() => {
    const id = Cookies.get("vendorId");
    if (id) {
      dispatch(getVendorById(id));
    }
  }, [dispatch]);

  // Effect to set dynamic form fields based on country and company type
  useEffect(() => {
    if (
      vendorCountry &&
      vendorCompanyType &&
      saudiData[vendorCountry] &&
      saudiData[vendorCountry][vendorCompanyType]
    ) {
      const contactInfoConfig =
        saudiData[vendorCountry][vendorCompanyType].contactInformation;
      setDynamicFormFields(contactInfoConfig);

      const initialFormData = {};
      contactInfoConfig.forEach((field) => {
        if (
          typeof field === "string" &&
          field !== "authoritySignature" &&
          field !== "companyLogo"
        ) {
          initialFormData[field] = "";
        }
      });
      reset(initialFormData);
    }
  }, [vendors, vendorCountry, vendorCompanyType, reset]);

  const onSubmit = async (data) => {
    console.log("Final Form Data (from React Hook Form):", data);

    const formDataToSend = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] instanceof File) {
          formDataToSend.append(key, data[key]);
        } else if (data[key] !== null && data[key] !== undefined) {
          formDataToSend.append(key, data[key]);
        }
      }
    }

    try {
      const resultAction = await dispatch(updateContactInfo(formDataToSend));

      if (updateContactInfo.fulfilled.match(resultAction)) {
        console.log("Submission successful:", resultAction.payload);
        const vendorId =
          resultAction.payload?.vendorInformation?._id ||
          resultAction.payload?.companyInformation?._id;

        if (vendorId) {
          Cookies.set("vendorId", vendorId, { expires: 7 });
          console.log("Stored vendorId in cookies:", vendorId);
        }
        setActiveStep((prev) => prev + 1);
        toast.success("Contact Information submitted successfully!");
      } else if (updateContactInfo.rejected.match(resultAction)) {
        console.error("Submission failed:", resultAction.payload);
        toast.error(
          `Submission failed: ${
            resultAction.payload?.message || "Please check server logs."
          }`
        );
      }
    } catch (error) {
      console.error("Network or Unexpected Error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  if (!personalInformation) {
    return <div>Loading personal information...</div>;
  }

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <div className="vendor-company-info-content">
          <div className="col-md-6 vendor-form-img">
            <img src={ContactInfo} alt="contact-info" className="vendor-img" />
          </div>
          <div className="col-md-6 vendor-form-field">
            <div className="vendor-heading">Contact Information</div>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column align-items-center gap-3"
            >
              {dynamicFormFields.map((field) => {
                if (typeof field === "string") {
                  const fieldName = field;
                  const label = fieldName
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase());

                  if (
                    fieldName === "authoritySignature" ||
                    fieldName === "companyLogo"
                  ) {
                    return (
                      <Form.Group key={fieldName} className="col-md-7 mt-3">
                        <Controller
                          name={fieldName}
                          control={control}
                          defaultValue={null}
                          render={({ field: { onChange, value, ...restField } }) => (
                            <div className="file-upload-box">
                              <label
                                htmlFor={fieldName}
                                className="upload-label"
                              >
                                <span className="file-name">
                                  {value ? value.name : label}
                                </span>
                                <TbFileUpload className="upload-icon" />
                              </label>
                              <input
                                id={fieldName}
                                type="file"
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  if (file) {
                                    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                                      toast.error(
                                        `Invalid file type for ${label}. Only JPG, PNG, SVG, JPEG are allowed.`
                                      );
                                      e.target.value = null;
                                      onChange(null);
                                    } else if (file.size > MAX_FILE_SIZE_BYTES) { // ADDED FILE SIZE CHECK
                                      toast.error(
                                        `${label} size exceeds 1MB. Please choose a smaller file.`
                                      );
                                      e.target.value = null; // Clear the input
                                      onChange(null); // Set form value to null
                                    }
                                    else {
                                      onChange(file);
                                    }
                                  } else {
                                    onChange(null);
                                  }
                                }}
                                className="hidden-file-input"
                                {...restField}
                              />
                            </div>
                          )}
                        />
                        {errors[fieldName] && (
                          <Form.Text className="text-danger error-text">
                            {errors[fieldName].message}
                          </Form.Text>
                        )}
                      </Form.Group>
                    );
                  } else if (fieldName === "password") {
                    return (
                      <Form.Group className="col-md-7" key={fieldName}>
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="small-custom-textfield"
                            placeholder={label}
                            name={fieldName}
                            type={showPassword ? "text" : "password"}
                            {...register(fieldName)}
                          />
                          <InputGroup.Text
                            onClick={togglePasswordVisibility}
                            style={{ cursor: "pointer" }}
                          >
                            {showPassword ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </InputGroup.Text>
                          {errors[fieldName] && (
                            <InputGroup.Text>
                              <ErrorOutlineOutlinedIcon className="text-danger" />
                            </InputGroup.Text>
                          )}
                        </InputGroup>
                        {errors[fieldName] && (
                          <Form.Text className="text-danger error-text">
                            {errors[fieldName].message}
                          </Form.Text>
                        )}
                      </Form.Group>
                    );
                  } else {
                    return (
                      <Form.Group className="col-md-7" key={fieldName}>
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="small-custom-textfield"
                            placeholder={label}
                            name={fieldName}
                            type={
                              fieldName.toLowerCase().includes("date")
                                ? "date"
                                : "text"
                            }
                            {...register(fieldName)}
                          />
                          {errors[fieldName] && (
                            <InputGroup.Text>
                              <ErrorOutlineOutlinedIcon className="text-danger" />
                            </InputGroup.Text>
                          )}
                        </InputGroup>
                        {errors[fieldName] && (
                          <Form.Text className="text-danger error-text">
                            {errors[fieldName].message}
                          </Form.Text>
                        )}
                      </Form.Group>
                    );
                  }
                }
                return null;
              })}
            </Form>
          </div>
        </div>
      </div>
      <div className="vendor-bottom-navigate">
        <CiCircleChevLeft
          size={50}
          onClick={() => setActiveStep((prev) => prev - 1)}
          style={{ cursor: "pointer" }}
        />
        <CiCircleChevRight
          size={50}
          onClick={handleSubmit(onSubmit)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default VendorContactInfo;