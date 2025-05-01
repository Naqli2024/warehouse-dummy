import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { InputGroup, Form, Button } from "react-bootstrap";
import Select from "react-select";
import Table from "react-bootstrap/Table";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newPurchaseReturnSchema } from "../../../../Helper/validation";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import NewPurchaseReturnDetails from "./NewPurchaseReturnDetails";

const NewPurchaseReturn = ({ backToList }) => {
  const [openNewPurchaseReturnDetails, setOpenNewPurchaseReturnDetails] =useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({ resolver: yupResolver(newPurchaseReturnSchema) });

  const onSubmit = (data) => {
    setOpenNewPurchaseReturnDetails(true);
  };

  const categoryOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "furniture", label: "Furniture" },
  ];

  return (
    <div>
        {openNewPurchaseReturnDetails ? <NewPurchaseReturnDetails backToList={()=>(setOpenNewPurchaseReturnDetails(false))}/>
        : (<div className="purchase-list">
            <h2>New purchase return</h2>
            <button onClick={backToList} className="goBack-btn">
              <span>
                <ArrowBackIosIcon />
              </span>
              Back
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className="new-package-form">
              <div className="new-package-name-sales mb-4">
                <Form.Group className="col-md-4 customer-name-dropdown">
                  <div className="d-flex align-items-center gap-2">
                    <Form.Label className="custom-label mb-0">
                      Vendor name
                    </Form.Label>
                    {errors.vendorName && (
                      <ErrorOutlineOutlinedIcon className="text-danger" />
                    )}
                  </div>
                  <div className="form-group inventory-custom-dropdown mt-2">
                    <Select
                      options={categoryOptions}
                      isSearchable={true}
                      classNamePrefix="custom-select"
                      onChange={(selected) => {
                        setValue("vendorName", selected.value);
                        trigger("vendorName");
                      }}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="col-md-4 customer-name-dropdown me-md-5 form-right-field">
                  <div className="d-flex align-items-center">
                    <Form.Label className="custom-label mb-0">Purchase Id</Form.Label>
                    {errors.purchaseId && (
                      <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                    )}
                  </div>
                  <div className="form-group inventory-custom-dropdown mt-2">
                    <Select
                      options={categoryOptions}
                      isSearchable={true}
                      classNamePrefix="custom-select"
                      onChange={(selected) => {
                        setValue("purchaseId", selected.value);
                        trigger("purchaseId");
                      }}
                    />
                  </div>
                </Form.Group>
              </div>
              <hr />
              <div className="new-package-name-sales mb-4">
                <div className="col-md-4 mt-3">
                  <Form.Group>
                    <div className="d-flex align-items-center">
                      <Form.Label className="custom-label mb-0">Purchase return id</Form.Label>
                      {errors.purchaseReturnId && (
                        <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                      )}
                    </div>
                    <InputGroup className="mt-2">
                      <Form.Control
                        className="custom-textfield"
                        {...register("purchaseReturnId")}
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="col-md-4 mt-3 form-right-field">
                  <Form.Group>
                    <div className="d-flex align-items-center">
                      <Form.Label className="custom-label mb-0">
                        Return date
                      </Form.Label>
                      {errors.returnDate && (
                        <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                      )}
                    </div>
                    <InputGroup className="mt-2">
                      <Form.Control
                        className="custom-textfield"
                        type="date"
                        {...register("returnDate")}
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
              </div>
              <div className="new-package-name-sales mb-4">
                <div className="col-md-4 mt-3">
                  <Form.Group>
                    <div className="d-flex align-items-center">
                      <Form.Label className="custom-label mb-0">
                        Invoice number
                      </Form.Label>
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
                      <Form.Label className="custom-label mb-0">
                        Invoice date
                      </Form.Label>
                      {errors.invoiceDate && (
                        <ErrorOutlineOutlinedIcon className="text-danger ms-2" />
                      )}
                    </div>
                    <InputGroup className="mt-2">
                      <Form.Control
                        className="custom-textfield"
                        type="date"
                        {...register("invoiceDate")}
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
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
                      <th>Qty Purchased</th>
                      <th>Return Qty</th>
                      <th>Unit price</th>
                      <th>Total value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>xxxxxxxxx</td>
                      <td><input type="text" style={{ width: "80%" }} /></td>
                      <td><input type="text" style={{ width: "50%" }} /></td>
                      <td><input type="text" style={{ width: "50%" }} /></td>
                      <td><input type="text" style={{ width: "50%" }} /></td>
                      <td><input type="text" style={{ width: "50%" }} /></td>
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

export default NewPurchaseReturn;
