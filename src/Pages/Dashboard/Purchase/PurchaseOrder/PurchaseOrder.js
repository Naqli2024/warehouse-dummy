import React, { useState } from "react";
import PurchaseOrderSidebar from "./PurchaseOrderSidebar";
import { InputGroup, Form, Button, FormLabel } from "react-bootstrap";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import PurchaseIndentLogo from "../../../../images/purchase-indent.svg";
import PurchaseOrderCompanyLogo from "../../../../images/quote-request-logo.svg";
import { useEffect } from "react";
import PurchaseOrderTable from "./PurchaseOrderTable";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import SavePurchaseOrder from "./SavePurchaseOrder";

const PurchaseOrder = () => {
  const [openPISidebar, setOpenPISidebar] = useState(true);
  const [inputType, setInputType] = useState("text");
  const [isManuallyToggled, setIsManuallyToggled] = useState(false);
  const [createPO, setCreatePO] = useState(false);
  const [dropdowns, setDropdowns] = useState(["", "", ""]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1600) {
        setOpenPISidebar(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isManuallyToggled]);

  const toggleSidebar = () => {
    setOpenPISidebar((prev) => !prev);
    setIsManuallyToggled(true);
  };

  const handleChange = (index, value) => {
    const updated = [...dropdowns];
    updated[index] = value;
    setDropdowns(updated);
  };

  const addDropdown = () => {
    setDropdowns([...dropdowns, ""]);
  };

  return (
    <div>
      {createPO ? <SavePurchaseOrder/>
      : (<div className="purchase-order-container">
        {openPISidebar && <PurchaseOrderSidebar />}
        <div className={openPISidebar ? "col-10" : "col-12"}>
          <div className="pi-right-head">
            <div className="pi-title">
              {openPISidebar ? (
                <IoMdArrowDropleftCircle
                  size={25}
                  className="cursor-pointer"
                  onClick={toggleSidebar}
                />
              ) : (
                <IoMdArrowDroprightCircle
                  size={25}
                  className="cursor-pointer"
                  onClick={toggleSidebar}
                />
              )}
              <p>Purchase Order #0000345</p>
            </div>
            <div className="pi-head-options">
              <div className="pi-option-divider" />
              <p className="d-flex align-items-center gap-1">
                <MdOutlineEdit size={15} />
                Edit
              </p>
              <div className="pi-option-divider" />
              <p className="d-flex align-items-center gap-1">
                <MdOutlineLocalPrintshop size={15} />
                Print
              </p>
              <div className="pi-option-divider" />
              <p className="d-flex align-items-center gap-1">
                <MdDeleteOutline size={15} />
                Delete
              </p>
              <div className="pi-option-divider" />
              <p className= "d-flex align-items-center gap-1 text-secondary" >
                <FaRegSave size={15} />
                Save
              </p>
            </div>
          </div>
          <div className="d-md-flex flex-column">
            <div className="po-top-right-content">
              <div className="col-md-3 pi-first-column">
                <img
                  src={PurchaseIndentLogo}
                  alt="purchase-order"
                />
                <p className="mt-3">Grandag Saudi Ltd,</p>
                <p>Xxxx</p>
                <p className="mb-3">Xxxxxxx</p>
                <p>91 97947 13297</p>
                  <div className="mt-4">
                    <Form.Group>
                      <InputGroup className="mt-2">
                        <Form.Control
                          className="small-custom-textfield"
                          placeholder="PO Date"
                          type={inputType}
                          onFocus={() => setInputType("date")}
                          onBlur={(e) => {
                            if (!e.target.value) setInputType("text");
                          }}
                        />
                      </InputGroup>
                    </Form.Group>
                  </div>
              </div>
                  <div className="col-md-3 pi-second-column">
                    <Form.Group>
                      <InputGroup>
                        <Form.Control
                          className="small-custom-textfield"
                          placeholder="PO No: #0000345"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <InputGroup className="mt-2">
                        <Form.Select className="small-custom-textfield">
                          <option value="">Currency</option>
                          <option>Person 1</option>
                          <option>Person 2</option>
                          <option>Person 3</option>
                        </Form.Select>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <InputGroup className="mt-2">
                        <Form.Select className="small-custom-textfield">
                          <option value="">Payment Terms</option>
                          <option>On receiving Goods</option>
                          <option>7 Days</option>
                          <option>10 Days</option>
                          <option>15 Days</option>
                          <option>30 Days</option>
                          <option>45 Days</option>
                          <option>60 Days</option>
                          <option>75 Days</option>
                          <option>90 Days</option>
                        </Form.Select>
                      </InputGroup>
                    </Form.Group>
                  </div>
                  <div className="col-md-3 pi-second-column">
                    <Form.Group>
                      <InputGroup>
                        <Form.Select className="small-custom-textfield">
                          <option value="">Monthly Contract</option>
                          <option>One Time Purchase</option>
                          <option>Yearly Rate Contract</option>
                        </Form.Select>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <InputGroup className="mt-2">
                        <Form.Control
                          className="small-custom-textfield"
                          placeholder="Delivery Date"
                          type={inputType}
                          onFocus={() => setInputType("date")}
                          onBlur={(e) => {
                            if (!e.target.value) setInputType("text");
                          }}
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <InputGroup className="mt-2">
                        <Form.Select className="small-custom-textfield">
                          <option value="">Advance Payment</option>
                          <option>On receiving Goods</option>
                          <option>7 Days</option>
                          <option>10 Days</option>
                          <option>15 Days</option>
                          <option>30 Days</option>
                          <option>45 Days</option>
                          <option>60 Days</option>
                          <option>75 Days</option>
                          <option>90 Days</option>
                        </Form.Select>
                      </InputGroup>
                    </Form.Group>
                  </div>
            </div>
              <div className="po-dropdown-container">
                <div className="col-md-3 po-domestic-drp">
                  <Form.Group>
                    <InputGroup className="mt-2">
                      <Form.Select className="small-custom-textfield">
                        <option value="">Domestic</option>
                        <option>Person 1</option>
                        <option>Person 2</option>
                        <option>Person 3</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="transport-mode-selector">
                  <span className="me-3 text-muted">Transport Mode</span>
                  <div className="vr mx-2" />
                  {dropdowns.map((value, index) => (
                    <div key={index} className="d-flex align-items-center">
                      <Form.Select
                        value={value}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className="border-0 shadow-none"
                        style={{
                          width: "120px",
                          height: "30px",
                          fontSize: "10px",
                        }}
                      >
                        <option value="">Select</option>
                        <option>By Road</option>
                        <option>Air Freight</option>
                        <option>Seaway</option>
                      </Form.Select>
                      <div className="vr mx-2" />
                    </div>
                  ))}
                  <div className="ms-auto d-flex align-items-center">
                    <button className="add-btn ms-2" onClick={addDropdown}>
                      <FaPlus size={12} />
                    </button>
                  </div>
                </div>
              </div>
          </div>
          <div
            className="col-md-6 purchase-deliver-to mt-3 mb-4">
            <div className="purchaser-order-to">
              <p className="mb-3 fw-bold">Purchase order To</p>
              <div className="d-flex gap-3">
                <img src={PurchaseOrderCompanyLogo} alt="purchase-order" />
                <div>
                  <p className="fw-bold">Indruck Systems Ltd</p>
                  <p>Vendor Id: xxxxx</p>
                  <p>xxxxxx</p>
                  <p>91 97947 13297</p>
                </div>
              </div>
            </div>
            <div className="purchaser-order-to">
              <p className="mb-3 fw-bold">Deliver To</p>
              <div className="d-flex">
                <div>
                  <p className="fw-bold">Grandag Saudi Ltd,</p>
                  <p>Vendor Id: xxxxx</p>
                  <p>xxxxxx</p>
                  <p>91 97947 13297</p>
                </div>
              </div>
            </div>
          </div>
          <PurchaseOrderTable />
          <div className="po-discount">
            <div className="d-flex align-items-center gap-3">
              <p>Transport</p>
                <Form.Group>
                  <InputGroup>
                    <Form.Control className="po-custom-textfield" />
                  </InputGroup>
                </Form.Group>
            </div>
            <div className="d-flex align-items-center gap-3">
              <p>
                  <AiOutlinePlusCircle className="me-2 cursor-pointer" />
                Loading
              </p>
                <Form.Group>
                  <InputGroup>
                    <Form.Control className="po-custom-textfield" />
                  </InputGroup>
                </Form.Group>
            </div>
            <div className="d-flex align-items-center gap-3">
              <p>Discount</p>
                <Form.Group>
                  <InputGroup>
                    <Form.Control className="po-custom-textfield" />
                  </InputGroup>
                </Form.Group>
            </div>
            <div className="po-grand-total">GRAND TOTAL: 22,000 SAR</div>
          </div>
          <div className="pi-bottom-content">
            <div></div>
              <div className="pi-signs">
                <div className="pi-bottom-sign">
                  <div
                    className="po-create-po-btn"
                    onClick={() => setCreatePO(true)}
                  >
                    Create PO
                  </div>
                </div>
                <div className="pi-bottom-sign">
                  <div className="po-send-btn">Send for Authorization</div>
                </div>
              </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default PurchaseOrder;
