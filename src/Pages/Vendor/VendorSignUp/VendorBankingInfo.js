import React, { useEffect, useState } from "react";
import BankInfo from "../../../images/bank-info.svg";
import { InputGroup, Form, Button, FormLabel } from "react-bootstrap";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useForm, Controller } from "react-hook-form"; // Import Controller
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; // Keep if you use yup directly in schema, otherwise remove
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { vendorBankingInfoSchema } from "../../../Helper/validation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateBankingInfo } from "../../../Redux/Vendor/BankingInfoSlice";
import saudiData from "../../../Data/saudi";
import Cookies from "js-cookie";
import { getVendorById } from "../../../Redux/Vendor/VendorSlice";
import { TbFileUpload } from "react-icons/tb"

const VendorBankingInfo = ({ setActiveStep }) => {
  // Removed formData state as Controller will manage form state
  // const [formData, setFormData] = useState({});
  const [dynamicFormFields, setDynamicFormFields] = useState([]);
  // bankDocumentFile state will be managed by Controller's value
  // const [bankDocumentFile, setBankDocumentFile] = useState("Bank Document Upload");

  const dispatch = useDispatch();

  const { vendors } = useSelector((state) => state.vendorReducer);
  const personalInformation = vendors?.data?.personalInformation;
  const vendorCountry = personalInformation?.country;
  const vendorCompanyType = personalInformation?.companyType;

  const {
    register,
    handleSubmit,
    setValue,
    control, // Added control for Controller
    formState: { errors },
    // trigger, // No longer needed if using Controller for file input
    reset,
  } = useForm({
    resolver: yupResolver(vendorBankingInfoSchema),
    mode: "onBlur",
  });

  const ALLOWED_FILE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
  ];
  const MAX_FILE_SIZE_BYTES = 1048576; // 1 MB in bytes

  // Effect to fetch vendor data
  useEffect(() => {
    const id = Cookies.get("vendorId");
    if (id) {
      dispatch(getVendorById(id));
    }
  }, [dispatch]);

  // Effect to set dynamic form fields and their initial values
  useEffect(() => {
    if (vendorCountry && vendorCompanyType && saudiData[vendorCountry] && saudiData[vendorCountry][vendorCompanyType]) {
      const bankingInfoConfig = saudiData[vendorCountry][vendorCompanyType].bankingDetails;
      setDynamicFormFields(bankingInfoConfig);

      const initialFormData = {};
      bankingInfoConfig.forEach(field => {
        if (typeof field === 'string') {
          // For string fields (text, file)
          initialFormData[field] = "";
        } else if (typeof field === 'object') {
          // For object fields (radio groups)
          const key = Object.keys(field)[0];
          const options = field[key];
          // Set the first option as default for radio groups
          if (options && options.length > 0) {
            initialFormData[key] = options[0].toLowerCase().replace(/\s/g, '-');
          } else {
            initialFormData[key] = "";
          }
        }
      });
      // Set the initial form data for react-hook-form
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

    // *** ADD THIS console.log ***
    for (let pair of formDataToSend.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    console.log("FormData to be sent:", formDataToSend); // This will show the FormData object itself

    try {
      const resultAction = await dispatch(updateBankingInfo(formDataToSend));

      if (updateBankingInfo.fulfilled.match(resultAction)) {
        console.log("Submission successful:", resultAction.payload);
        setActiveStep((prev) => prev + 1);
        toast.success("Banking Information updated successfully!");
      } else if (updateBankingInfo.rejected.match(resultAction)) {
        console.error("Submission failed:", resultAction.payload);
        toast.error(`Submission failed: ${resultAction.payload?.message || "Please check server logs."}`);
      }
    } catch (error) {
      console.error("Network or Unexpected Error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  // Removed this useEffect as default values are handled by reset in the main useEffect
  // useEffect(() => { ... }, [formData, dynamicFormFields, setValue]);


  if (!personalInformation) {
    return <div>Loading personal information...</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="vendor-company-info-content">
          <div className="col-md-6 vendor-form-img">
            <img src={BankInfo} alt="bank-info" className="vendor-img" />
          </div>
          <div className="col-md-6 vendor-form-field">
            <div className="vendor-heading">Banking Details</div>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column align-items-center gap-3"
            >
              {dynamicFormFields.map((field) => {
                if (typeof field === "string") {
                  const fieldName = field;
                  const label = fieldName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

                  // Handle file upload for bankDocumentUpload using Controller
                  if (fieldName === "bankDocumentUpload") {
                    return (
                      <Form.Group key={fieldName} className="col-md-7 mt-3">
                        <Controller
                          name={fieldName}
                          control={control}
                          defaultValue={null} // Ensure default value is null for files
                          render={({ field: { onChange, value, ...restField } }) => (
                            <div className="file-upload-box">
                              <label htmlFor={fieldName} className="upload-label">
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
                                        `Invalid file type for ${label}. Only JPG, PNG, PDF are allowed.`
                                      );
                                      e.target.value = null; // Clear the input
                                      onChange(null); // Set form value to null
                                    } else if (file.size > MAX_FILE_SIZE_BYTES) {
                                      toast.error(
                                        `${label} size exceeds 1MB. Please choose a smaller file.`
                                      );
                                      e.target.value = null; // Clear the input
                                      onChange(null); // Set form value to null
                                    } else {
                                      onChange(file); // Set the file object
                                    }
                                  } else {
                                    onChange(null); // Clear the file
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
                  } else {
                    // Render standard text input fields
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
                            {...register(fieldName)} // Use register for simple inputs
                            // value={formData[field] || ""} // Removed, react-hook-form manages this
                            // onChange={handleChange} // Removed, react-hook-form manages this
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
                } else if (typeof field === "object") {
                  const fieldName = Object.keys(field)[0];
                  const options = field[fieldName];
                  const label = fieldName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());


                  // Handle Radio Groups like 'bankAccountType' and 'paymentCurrency'
                  if (fieldName === 'bankAccountType' || fieldName === 'paymentCurrency') {
                    return (
                      <Form.Group className="col-md-7" key={fieldName}>
                        <FormControl component="fieldset">
                          <FormLabel id={`${fieldName}-radio-group-label`}>
                            <div className="d-flex align-items-center gap-2">
                              {label}
                              {errors[fieldName] && (
                                <ErrorOutlineOutlinedIcon className="text-danger" />
                              )}
                            </div>
                          </FormLabel>
                          <Controller
                            name={fieldName}
                            control={control}
                            // defaultValue will be set by the reset in useEffect
                            render={({ field }) => (
                              <RadioGroup
                                row
                                aria-labelledby={`${fieldName}-radio-group-label`}
                                className="gap-4"
                                {...field} // Spreads value, onChange, etc. from Controller
                              >
                                {options.map((option) => {
                                  const radioValue = option.toLowerCase().replace(/\s/g, '-');
                                  return (
                                    <FormControlLabel
                                      key={option}
                                      value={radioValue}
                                      control={<Radio />}
                                      label={option}
                                      // {...register(fieldName)} // register not needed here if using {...field} on RadioGroup
                                    />
                                  );
                                })}
                              </RadioGroup>
                            )}
                          />
                          {errors[fieldName] && (
                            <Form.Text className="text-danger error-text">
                              {errors[fieldName].message}
                            </Form.Text>
                          )}
                        </FormControl>
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

export default VendorBankingInfo;