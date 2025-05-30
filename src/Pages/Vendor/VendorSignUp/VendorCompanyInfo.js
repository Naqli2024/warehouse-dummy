import { useEffect, useState } from "react";
import CompanyInfo from "../../../images/company-info.svg";
import { InputGroup, Form, Button, FormLabel } from "react-bootstrap";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { vendorCompanyInfoSchema } from "../../../Helper/validation";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { CiCircleChevRight } from "react-icons/ci";
import {
  getAllVendors,
  getVendorById,
} from "../../../Redux/Vendor/VendorSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { createCompanyInfo } from "../../../Redux/Vendor/CompanyInfoSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { Controller } from "react-hook-form";
import Cookies from "js-cookie";
import saudiData from "../../../Data/saudi";
import CancelIcon from "@mui/icons-material/Cancel";
import Chip from "@mui/material/Chip";

const VendorCompanyInfo = ({ setActiveStep }) => {
  const [inputType, setInputType] = useState("text");
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  const { vendors } = useSelector((state) => state.vendorReducer);
  const personalInformation = vendors?.data?.personalInformation;
  const vendorCountry = personalInformation?.country;
  const vendorCompanyType = personalInformation?.companyType;

  const [dynamicFormFields, setDynamicFormFields] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(vendorCompanyInfoSchema),
  });

  useEffect(() => {
    const id = Cookies.get("vendorId");
    if (id) {
      dispatch(getVendorById(id));
    }
  }, [dispatch]);

  useEffect(() => {
    if (
      vendorCountry &&
      vendorCompanyType &&
      saudiData[vendorCountry] &&
      saudiData[vendorCountry][vendorCompanyType]
    ) {
      const companyInfoConfig =
        saudiData[vendorCountry][vendorCompanyType].companyInformation;

      setDynamicFormFields(companyInfoConfig);

      const initialFormData = {};
      companyInfoConfig.forEach((field) => {
        if (typeof field === "string") {
          initialFormData[field] = "";
        } else if (typeof field === "object") {
          const key = Object.keys(field)[0];
          initialFormData[key] = "";
        }
      });

      reset(initialFormData);
    }
  }, [vendors, vendorCountry, vendorCompanyType, reset]);

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(createCompanyInfo(data));
      if (createCompanyInfo.fulfilled.match(resultAction)) {
        toast.success("Company Information submitted successfully!");
        setActiveStep((prevStep) => prevStep + 1);
      } else {
        toast.error(resultAction.payload || "Failed to create Company");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!personalInformation) {
    return <div>Loading personal information...</div>;
  }
  return (
    <div>
      <div className="container">
        <div className="vendor-company-info-content">
          <div className="col-md-6 vendor-form-img">
            <img src={CompanyInfo} alt="company-info" className="vendor-img" />
          </div>
          <div className="col-md-6 vendor-form-field">
            <div className="vendor-heading">Company Information</div>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column align-items-center gap-3"
            >
              {dynamicFormFields.map((field, index) => {
                if (
                  typeof field === "object" &&
                  Object.keys(field)[0] === "itemClassification"
                ) {
                  const key = "itemClassification";
                  const options = field[key];
                  return (
                    <Form.Group className="col-md-7" key="itemClassification">
                      <Controller
                        name="itemClassification"
                        control={control}
                        defaultValue={[]}
                        render={({ field }) => {
                          const selectedItems = Array.isArray(field.value)
                            ? field.value
                            : [];
                          const menuHeight = Math.min(
                            300,
                            48 * (options.length + 1)
                          );
                          const dynamicHeight = Math.max(
                            200,
                            48 * (selectedItems.length + 2)
                          );
                          return (
                            <Select
                              multiple
                              displayEmpty
                              size="small"
                              className="w-100"
                              value={selectedItems}
                              onChange={(event) => {
                                const {
                                  target: { value },
                                } = event;
                                field.onChange(
                                  typeof value === "string"
                                    ? value.split(",")
                                    : value
                                );
                              }}
                              renderValue={(selected) => {
                                if (selected.length === 0) {
                                  return (
                                    <span className="small-text">
                                      Select Item Classification
                                    </span>
                                  );
                                }
                                return (
                                  <div className="d-flex flex-wrap gap-1">
                                    {selected.map((value) => (
                                      <Chip
                                        key={value}
                                        label={value}
                                        size="small"
                                        onMouseDown={(event) =>
                                          event.stopPropagation()
                                        }
                                        onDelete={(event) => {
                                          event.stopPropagation();
                                          const newValue = selected.filter(
                                            (item) => item !== value
                                          );
                                          field.onChange(newValue);
                                        }}
                                        deleteIcon={<CancelIcon />}
                                        style={{ margin: 2 }}
                                      />
                                    ))}
                                  </div>
                                );
                              }}
                              MenuProps={{
                                PaperProps: {
                                  style: {
                                    maxHeight: dynamicHeight,
                                    overflowY: "auto",
                                    backgroundColor: "white",
                                  },
                                },
                              }}
                              sx={{
                                backgroundColor: "white",
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#dee2e6",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "#dee2e6",
                                  },
                              }}
                            >
                              {options.map((option, idx) => (
                                <MenuItem key={idx} value={option}>
                                  <ListItemText primary={option} />
                                </MenuItem>
                              ))}
                            </Select>
                          );
                        }}
                      />
                      {errors["itemClassification"] && (
                        <Form.Text className="error-message text-danger error-text">
                          {errors["itemClassification"].message}
                        </Form.Text>
                      )}
                    </Form.Group>
                  );
                }

                return null;
              })}

              {dynamicFormFields.map((field, index) => {
                if (typeof field === "string") {
                  return (
                    <Form.Group className="col-md-7" key={field}>
                      <InputGroup className="mt-2">
                        <Form.Control
                          className="small-custom-textfield"
                          placeholder={field
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase())}
                          name={field}
                          {...register(field)}
                          type={
                            field.toLowerCase().includes("date")
                              ? "date"
                              : "text"
                          }
                          onFocus={() =>
                            field.toLowerCase().includes("date") &&
                            setInputType("date")
                          }
                          onBlur={() =>
                            field.toLowerCase().includes("date") &&
                            setInputType("text")
                          }
                        />
                        {errors[field] && (
                          <InputGroup.Text>
                            <ErrorOutlineOutlinedIcon className="text-danger" />
                          </InputGroup.Text>
                        )}
                      </InputGroup>
                    </Form.Group>
                  );
                } else if (typeof field === "object") {
                  const key = Object.keys(field)[0];
                  const options = field[key];
                  if (key === "itemClassification") return null;
                  if (key === "businessType") {
                    return (
                      <div
                        className="d-flex justify-content-center gap-5"
                        key={key}
                      >
                        <FormControl
                          component="fieldset"
                          className="col-md-7 text-center"
                        >
                          <Form.Label className="d-flex small-text mb-2">
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </Form.Label>
                          <RadioGroup name={key}>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                              {options.map((option) => (
                                <div
                                  key={option}
                                  className="d-flex"
                                  style={{ width: "45%" }}
                                >
                                  <FormControlLabel
                                    value={option
                                      .toLowerCase()
                                      .replace(/\s/g, "-")}
                                    control={<Radio />}
                                    label={option}
                                    sx={{
                                      width: "100%",
                                      "& .MuiFormControlLabel-label": {
                                        fontSize: "12px !important",
                                        color: "#6F6363",
                                      },
                                    }}
                                    {...register(key)}
                                  />
                                </div>
                              ))}
                            </div>
                          </RadioGroup>
                          {errors[key] && (
                            <Form.Text className="error-message text-danger error-text">
                              {errors[key].message}
                            </Form.Text>
                          )}
                        </FormControl>
                      </div>
                    );
                  } else {
                    // Generic dropdowns
                    return (
                      <Form.Group className="col-md-7" key={key}>
                        <Form.Label className="form-label">
                          {key
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase())}
                        </Form.Label>
                        <Form.Select
                          className="small-custom-textfield"
                          {...register(key)}
                          name={key}
                        >
                          <option value="">Select {key}</option>
                          {options.map((option, idx) => (
                            <option key={idx} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Select>
                        {errors[key] && (
                          <Form.Text className="error-message text-danger error-text">
                            {errors[key].message}
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
        <div></div>
        <CiCircleChevRight
          size={50}
          onClick={handleSubmit(onSubmit)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default VendorCompanyInfo;
