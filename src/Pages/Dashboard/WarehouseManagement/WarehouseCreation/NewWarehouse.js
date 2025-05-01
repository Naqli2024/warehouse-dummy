import React, { useState, lazy, Suspense } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { InputGroup, Form, Button, FormLabel } from "react-bootstrap";
import { countries, statesIndia } from "../../../../Data/FloorManagementData";
import { newFloorManagementSchema } from "../../../../Helper/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import WarehouseOverView from "./WarehouseOverview";

const NewWarehouse = ({ backToList }) => {
  const [isFinishedProductChecked, setIsFinishedProductChecked] =
    useState(false);
  const [isSparePartsChecked, setIsSparePartsChecked] = useState(false);
  const [isRawMaterialsChecked, setIsRawMaterialsChecked] = useState(false);
  const [openWarehouseOverview, setOpenWarehouseOverview] = useState(false);
  const [openAddSpace, setOpenAddSpace] = useState(false);
  const [newSpace, setNewSpace] = useState("");
  const [spacesList, setSpacesList] = useState([]);
  const [dimensions, setDimensions] = useState({
    finishedProduct: "",
    spareParts: "",
    rawMaterials: "",
  });

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({ resolver: yupResolver(newFloorManagementSchema) });

  const handleDimensionChange = (e, field) => {
    let value = e.target.value;
    if (!value.includes("×")) {
      value = value.replace(/[^0-9]/g, "");
      value = value ? value + " × " : "";
    } else {
      const parts = value.split("×");
      const width = parts[0].replace(/[^0-9]/g, "").trim();
      const height = parts[1]?.replace(/[^0-9]/g, "").trim() || "";
      value = `${width} × ${height}`;
    }

    setDimensions((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmit = (data) => {
    setOpenWarehouseOverview(true);
  };

  return (
    <div>
      {openWarehouseOverview ? (
        <Suspense
          fallback={
            <p className="lazy-loading-text">
              Loading Floor Management Overview...
            </p>
          }
        >
          <WarehouseOverView
            backToList={() => setOpenWarehouseOverview(false)}
          />
        </Suspense>
      ) : (
        <div className="purchase-list">
          <h2>New Warehouse</h2>
          <button onClick={backToList} className="goBack-btn">
            <span>
              <ArrowBackIosIcon />
            </span>
            Back
          </button>
          <form onSubmit={onSubmit}>
            <div className="new-floor-form">
              <div className="new-floor-left-content">
                <div className="col-md-8 mb-4">
                  <Form.Group>
                    <InputGroup className="mt-2">
                      <Form.Control
                        className={`custom-textfield ${errors.warehouseName ? "is-invalid" : ""}`}
                        placeholder="Warehouse Name"
                        {...register("warehouseName")}
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="col-md-8 mt-4">
                  <Form.Group>
                    <InputGroup className="mt-2">
                      <Form.Select
                        className={`custom-textfield ${errors.country ? "is-invalid" : ""}`}
                        {...register("country")}
                      >
                        <option value="">Choose Country</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="col-md-8 mt-4">
                  <Form.Group>
                    <InputGroup className="mt-2">
                      <Form.Select
                        className={`custom-textfield ${errors.state ? "is-invalid" : ""}`}
                      >
                        <option value="">Choose State</option>
                        {statesIndia.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="col-md-8 mt-4">
                  <Form.Group>
                    <InputGroup className="mt-2">
                      <Form.Select
                        className={`custom-textfield ${errors.city ? "is-invalid" : ""}`}
                        {...register("city")}
                      >
                        <option value="">Choose City</option>
                        <option>City 1</option>
                        <option>City 2</option>
                        <option>City 3</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="col-md-8 mt-4">
                  <Form.Group>
                    <InputGroup className="mt-2">
                      <Form.Control
                        className={`custom-textfield ${errors.postalCode ? "is-invalid" : ""}`}
                        placeholder="Postal Code"
                        {...register("postalCode")}
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="col-md-8 mt-4">
                  <Form.Group>
                    <InputGroup className="mt-2">
                      <Form.Select
                        className={`custom-textfield ${errors.status ? "is-invalid" : ""}`}
                        {...register("city")}
                      >
                        <option value="">Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Under Maintenance</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="col-md-8 mt-4">
                  <Form.Group>
                    <InputGroup className="mt-2">
                      <Form.Control
                        className={`custom-textfield ${errors.warehouseManger ? "is-invalid" : ""}`}
                        placeholder="Manager"
                        {...register("warehouseManger")}
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
                <p className="fw-bold mt-3">
                  Warehouse Dimension Configuration
                </p>
                <div className="col-md-10 mt-4">
                  <Form.Group>
                    <div className="d-flex align-items-center">
                      <FormLabel>Total Warehouse Size</FormLabel>
                      {errors.status && (
                        <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                      )}
                    </div>
                    <div className="d-md-flex gap-3">
                      <InputGroup className="mt-2">
                        <Form.Control
                          className="new-warehouse-textfield"
                          placeholder="Length"
                          {...register("warehouseManger")}
                        />
                      </InputGroup>
                      <InputGroup className="mt-2">
                        <Form.Control
                          className="new-warehouse-textfield"
                          placeholder="Breadth"
                          {...register("warehouseManger")}
                        />
                      </InputGroup>
                      <InputGroup className="mt-2">
                        <Form.Control
                          className="new-warehouse-textfield"
                          placeholder="Height"
                          {...register("warehouseManger")}
                        />
                      </InputGroup>
                      <InputGroup className="mt-2">
                        <Form.Control
                          className="new-warehouse-textfield"
                          placeholder="Permissible Height"
                          {...register("warehouseManger")}
                        />
                      </InputGroup>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-10 mt-4">
                  <Form.Group>
                    <div className="d-flex align-items-center">
                      <FormLabel>Total Storage Size</FormLabel>
                      {errors.status && (
                        <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                      )}
                    </div>
                    <div className="d-md-flex gap-3">
                      <InputGroup className="mt-2">
                        <Form.Control
                          className="new-warehouse-textfield"
                          placeholder="Length"
                          {...register("warehouseManger")}
                        />
                      </InputGroup>
                      <InputGroup className="mt-2">
                        <Form.Control
                          className="new-warehouse-textfield"
                          placeholder="Breadth"
                          {...register("warehouseManger")}
                        />
                      </InputGroup>
                      <InputGroup className="mt-2">
                        <Form.Control
                          className="new-warehouse-textfield"
                          placeholder="Height"
                          {...register("warehouseManger")}
                        />
                      </InputGroup>
                      <InputGroup className="mt-2">
                        <Form.Control
                          className="new-warehouse-textfield"
                          placeholder="Permissible Height"
                          {...register("warehouseManger")}
                        />
                      </InputGroup>
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div className="new-floor-divider"></div>
              <div className="new-floor-right-content">
                <p className="fw-bold">Zone Configuration</p>
                <p className="mt-2">Select Space Type</p>
                <div className="d-flex align-items-center gap-2 mt-2">
                  <p>
                    <input
                      type="checkBox"
                      onChange={() =>
                        setIsFinishedProductChecked(!isFinishedProductChecked)
                      }
                    ></input>
                  </p>
                  <p>Finished product</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <p>
                    <input
                      type="checkBox"
                      onChange={() =>
                        setIsSparePartsChecked(!isSparePartsChecked)
                      }
                    ></input>
                  </p>
                  <p>Spare parts</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <p>
                    <input
                      type="checkBox"
                      onChange={() =>
                        setIsRawMaterialsChecked(!isRawMaterialsChecked)
                      }
                    ></input>
                  </p>
                  <p>Raw materials</p>
                </div>
                <AddCircleOutlineOutlinedIcon
                  className="fs-5"
                  onClick={() => setOpenAddSpace(true)}
                />
                {openAddSpace && (
                  <div className="col-md-4 mt-3">
                    <InputGroup>
                      <Form.Control
                        className="custom-textfield"
                        placeholder="Add Space"
                        value={newSpace}
                        onChange={(e) => setNewSpace(e.target.value)}
                      />
                      <InputGroup.Text className="bg-white">
                        <DoneOutlinedIcon
                          className="text-success fs-5"
                          onClick={() => {
                            if (newSpace.trim()) {
                              setSpacesList((prev) => [
                                ...prev,
                                newSpace.trim(),
                              ]);
                              setNewSpace("");
                            }
                            setOpenAddSpace(false);
                          }}
                        />
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                )}
                <p className="fw-bold mt-5">Zone Dimension Configuration</p>
                {isFinishedProductChecked && (
                  <div className="col-md-10 mt-4">
                    <Form.Group>
                      <div className="d-flex align-items-center">
                        <FormLabel>Finished Product Floor</FormLabel>
                        {errors.status && (
                          <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                        )}
                      </div>
                      <div className="d-md-flex gap-3">
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="new-warehouse-textfield"
                            placeholder="Length"
                            {...register("warehouseManger")}
                          />
                        </InputGroup>
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="new-warehouse-textfield"
                            placeholder="Breadth"
                            {...register("warehouseManger")}
                          />
                        </InputGroup>
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="new-warehouse-textfield"
                            placeholder="Height"
                            {...register("warehouseManger")}
                          />
                        </InputGroup>
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="new-warehouse-textfield"
                            placeholder="Permissible Height"
                            {...register("warehouseManger")}
                          />
                        </InputGroup>
                      </div>
                    </Form.Group>
                  </div>
                )}
                {isSparePartsChecked && (
                  <div className="col-md-10 mt-4">
                    <Form.Group>
                      <div className="d-flex align-items-center">
                        <FormLabel>Spare Parts Floor</FormLabel>
                        {errors.status && (
                          <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                        )}
                      </div>
                      <div className="d-md-flex gap-3">
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="new-warehouse-textfield"
                            placeholder="Length"
                            {...register("warehouseManger")}
                          />
                        </InputGroup>
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="new-warehouse-textfield"
                            placeholder="Breadth"
                            {...register("warehouseManger")}
                          />
                        </InputGroup>
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="new-warehouse-textfield"
                            placeholder="Height"
                            {...register("warehouseManger")}
                          />
                        </InputGroup>
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="new-warehouse-textfield"
                            placeholder="Permissible Height"
                            {...register("warehouseManger")}
                          />
                        </InputGroup>
                      </div>
                    </Form.Group>
                  </div>
                )}
                {isRawMaterialsChecked && (
                  <div className="col-md-10 mt-4">
                    <Form.Group>
                      <div className="d-flex align-items-center">
                        <FormLabel>Raw Materials Floor</FormLabel>
                        {errors.status && (
                          <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                        )}
                      </div>
                      <div className="d-md-flex gap-3">
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="new-warehouse-textfield"
                            placeholder="Length"
                            {...register("warehouseManger")}
                          />
                        </InputGroup>
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="new-warehouse-textfield"
                            placeholder="Breadth"
                            {...register("warehouseManger")}
                          />
                        </InputGroup>
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="new-warehouse-textfield"
                            placeholder="Height"
                            {...register("warehouseManger")}
                          />
                        </InputGroup>
                        <InputGroup className="mt-2">
                          <Form.Control
                            className="new-warehouse-textfield"
                            placeholder="Permissible Height"
                            {...register("warehouseManger")}
                          />
                        </InputGroup>
                      </div>
                    </Form.Group>
                  </div>
                )}
                {spacesList.length > 0 && (
                  <div>
                    {spacesList.map((space, index) => (
                      <div key={index}>
                        <div className="col-md-10 mt-4">
                          <Form.Group>
                            <div className="d-flex align-items-center">
                              <FormLabel>
                                {space}
                                <RemoveCircleOutlineOutlinedIcon
                                  className="ms-2 text-danger"
                                  onClick={() => setSpacesList([])}
                                />
                              </FormLabel>
                              {errors.status && (
                                <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                              )}
                            </div>
                            <div className="d-md-flex gap-3">
                              <InputGroup className="mt-2">
                                <Form.Control
                                  className="new-warehouse-textfield"
                                  placeholder="Length"
                                  {...register("warehouseManger")}
                                />
                              </InputGroup>
                              <InputGroup className="mt-2">
                                <Form.Control
                                  className="new-warehouse-textfield"
                                  placeholder="Breadth"
                                  {...register("warehouseManger")}
                                />
                              </InputGroup>
                              <InputGroup className="mt-2">
                                <Form.Control
                                  className="new-warehouse-textfield"
                                  placeholder="Height"
                                  {...register("warehouseManger")}
                                />
                              </InputGroup>
                              <InputGroup className="mt-2">
                                <Form.Control
                                  className="new-warehouse-textfield"
                                  placeholder="Permissible Height"
                                  {...register("warehouseManger")}
                                />
                              </InputGroup>
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="container-fluid">
              <div className="row justify-content-center m-5">
                <div className="col-12 col-md-3 d-flex justify-content-between gap-2">
                  <button
                    type="submit"
                    className="btn flex-grow-1"
                    style={{ color: "white", backgroundColor: "#1F3F7F" }}
                    onClick={handleSubmit}
                  >
                    Save
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
          </form>
        </div>
      )}
    </div>
  );
};

export default NewWarehouse;
