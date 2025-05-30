import React, { useState } from "react";
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
import VendorQuotationSidebar from "./VendorQuotationSidebar";
import VendorQuotationTable from "./VendorQuotationTable";

const VendorQuotation = () => {
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
      <div className="purchase-order-container">
        {openPISidebar && <VendorQuotationSidebar />}
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
              <p>Quotation #0000345</p>
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
              <p className="d-flex align-items-center gap-1 text-secondary">
                <FaRegSave size={15} />
                Save
              </p>
            </div>
          </div>
          <div className="quotation-top-right-content">
            <div className="purchaser-order-to">
              <div className="d-flex gap-3">
                <img src={PurchaseOrderCompanyLogo} alt="purchase-order" />
                <div>
                  <p className="fw-bold">Indruck Systems Ltd</p>
                  <p>Vendor Id: xxxxx</p>
                  <p>xxxxxx</p>
                  <p>xxxxxx</p>
                  <p className="mt-3">91 97947 13297</p>
                </div>
              </div>
              <div className="purchaser-order-to mt-5">
                <div className="d-flex gap-3">
                  <img src={PurchaseIndentLogo} alt="purchase-order" />
                  <div>
                    <p className="fw-bold">Grandag Saudi Ltd</p>
                    <p>xxxxx</p>
                    <p>xxxxxx</p>
                    <p className="mt-2">91 97947 13297</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 vendor-rfq-column">
              <p>Indent No: #0000345</p>
              <p>Delivery Date: 12/02/2025</p>
              <p>Authorized Person</p>
              <p>Monthly Contract</p>
              <div className="purchaser-order-to mt-5">
                <p className="mb-2 fw-bold">Deliver To</p>
                <div className="d-flex">
                  <div>
                    <p className="fw-bold">Grandag Saudi Ltd,</p>
                    <p>Vendor Id: xxxxx</p>
                    <p>xxxxxx</p>
                    <p className="mt-2 mb-3">91 97947 13297</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-start justify-content-start vendor-rfq-column">
              <div className="quotation-text mb-2">Quotation</div>
              <p>Quotation Date: 12/02/2025</p>
              <p>Quotation No: 03456</p>
            </div>
          </div>
          <VendorQuotationTable />
        </div>
      </div>
    </div>
  );
};

export default VendorQuotation;
