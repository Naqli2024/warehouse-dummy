import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { InputGroup, Form, Button } from "react-bootstrap";
import Select from "react-select";
import Table from "react-bootstrap/Table";
import NewSalesReturnDetails from "./NewSalesReturnDetails";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newSalesReturnSchema } from "../../../../Helper/validation";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const NewSalesReturn = ({ backToList }) => {
  const [openNewSalesReturnDetails, setOpenNewSalesReturnDetails] =
    useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({ resolver: yupResolver(newSalesReturnSchema) });

  const onSubmit = (data) => {
    setOpenNewSalesReturnDetails(true);
  };

  const categoryOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "furniture", label: "Furniture" },
  ];

  return (
    <div>
      {openNewSalesReturnDetails ? (
        <NewSalesReturnDetails
          backToList={() => setOpenNewSalesReturnDetails(false)}
          isChecked={isChecked}
        />
      ) : (
        <div className="purchase-list">
          <h2>New sales return</h2>
          <button onClick={backToList} className="goBack-btn">
            <span>
              <ArrowBackIosIcon />
            </span>
            Back
          </button>
          <form onSubmit={handleSubmit(onSubmit)} className="new-package-form">
            <p>Company name - #23455</p>
            <hr/>
            <div className="new-package-name-sales mb-4 mt-5">
              <Form.Group className="col-md-4 customer-name-dropdown">
                <div className="d-flex align-items-center gap-2">
                  <Form.Label className="custom-label mb-0">
                    Customer name
                  </Form.Label>
                  {errors.customerName && (
                    <ErrorOutlineOutlinedIcon className="text-danger" />
                  )}
                </div>
                <div className="form-group inventory-custom-dropdown mt-2">
                  <Select
                    options={categoryOptions}
                    isSearchable={true}
                    classNamePrefix="custom-select"
                    onChange={(selected) => {
                      setValue("customerName", selected.value);
                      trigger("customerName"); 
                    }
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group className="col-md-4 customer-name-dropdown me-md-5 form-right-field">
                <div className="d-flex align-items-center">
                  <Form.Label className="custom-label mb-0">
                    Sales order
                  </Form.Label>
                  {errors.salesOrder && (
                    <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                  )}
                </div>
                <div className="form-group inventory-custom-dropdown mt-2">
                  <Select
                    options={categoryOptions}
                    isSearchable={true}
                    classNamePrefix="custom-select"
                    onChange={(selected) => {
                      setValue("salesOrder", selected.value)
                      trigger("salesOrder");
                    }
                    }
                  />
                </div>
              </Form.Group>
            </div>
            <hr />
            <div className="new-package-name-sales mb-4">
              <div className="col-md-4 mt-3">
                <Form.Group>
                  <div className="d-flex align-items-center">
                    <Form.Label className="custom-label mb-0">#RA</Form.Label>
                    {errors.raNumber && (
                      <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                    )}
                  </div>
                  <InputGroup className="mt-2">
                    <Form.Control
                      className="custom-textfield"
                      {...register("raNumber")}
                    />
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-4 mt-3 form-right-field">
                <Form.Group>
                  <div className="d-flex align-items-center">
                    <Form.Label className="custom-label mb-0">Sale return Date</Form.Label>
                    {errors.date && (
                      <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                    )}
                  </div>
                  <InputGroup className="mt-2">
                    <Form.Control
                      className="custom-textfield"
                      type="date"
                      {...register("date")}
                    />
                  </InputGroup>
                </Form.Group>
              </div>
            </div>
            <div className="new-package-name-sales mb-4">
              <div className="col-md-4 mt-3">
                <Form.Group>
                  <div className="d-flex align-items-center">
                    <Form.Label className="custom-label mb-0">Invoice number</Form.Label>
                    {errors.invoiceNumber && (
                      <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                    )}
                  </div>
                  <InputGroup className="mt-2">
                    <Form.Control
                      className="custom-textfield"
                      {...register("invoiceNumber")}
                    />
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="col-md-4 mt-3 form-right-field">
                <Form.Group>
                  <div className="d-flex align-items-center">
                    <Form.Label className="custom-label mb-0">Invoice Date</Form.Label>
                    {errors.invoiceDate && (
                      <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                    )}
                  </div>
                  <InputGroup className="mt-2">
                    <Form.Control
                      className="custom-textfield"
                      type="date"
                      {...register("invoiceDate")}                    />
                  </InputGroup>
                </Form.Group>
              </div>
            </div>
            <div className="new-package-name-sales mb-4">
              <div className="col-md-4 mt-4">
                <Form.Group>
                  <div className="d-flex align-items-center">
                    <Form.Label className="custom-label mb-0">
                      Warehouse
                    </Form.Label>
                    {errors.warehouse && (
                      <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                    )}
                  </div>
                  <InputGroup className="mt-2">
                    <Form.Select
                      className="custom-textfield"
                      {...register("warehouse")}
                    >
                      <option value="">Select Warehouse</option>
                      <option value="warehouse1">Warehouse 1</option>
                      <option value="warehouse2">Warehouse 2</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </div>
            </div>
            <div className="new-sales-return-checkbox d-flex mb-5">
              <input
                className="me-2"
                type="checkbox"
                onChange={() => setIsChecked(!isChecked)}
              />
              <p>This return is for credit only items</p>
            </div>
            <div className="table-container mt-5 ms-0 me-5">
              <Table
                bordered
                className="custom-table sales-in-outbound-table new-sales-return-table"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item name</th>
                    <th>Reason</th>
                    <th>Shipped</th>
                    <th>Returned</th>
                    <th>
                      {isChecked ? "Receivable Qty" : "Return Qty"}
                    </th>
                    {isChecked ? <th>Credit Qty</th> : ""}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>xxxxxxxxx</td>
                    <td>
                      <input type="text" style={{ width: "80%" }} />
                    </td>
                    <td>50</td>
                    <td>
                      <input type="text" style={{ width: "50%" }} />
                    </td>
                    <td>
                      <input type="text" style={{ width: "50%" }} />
                    </td>
                    {isChecked && (
                      <td>
                        <input type="text" style={{ width: "50%" }} />
                      </td>
                    )}
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="container-fluid">
              <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-3 d-flex justify-content-between gap-2">
                  <button
                    type="submit"
                    className="btn flex-grow-1"
                    style={{ color: "white", backgroundColor: "#1F3F7F" }}
                  >
                    Create
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

export default NewSalesReturn;
