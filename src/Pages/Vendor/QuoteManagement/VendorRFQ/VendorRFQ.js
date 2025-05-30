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
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import VendorRFQSidebar from "./VendorRFQSidebar";
import VendorRFQTable from "./VendorRFQTable";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getVendorById } from "../../../../Redux/Vendor/VendorSlice";

const VendorRFQ = () => {
    const [openPISidebar, setOpenPISidebar] = useState(true);
    const [isManuallyToggled, setIsManuallyToggled] = useState(false);
    const [dropdowns, setDropdowns] = useState(["", "", ""]);
    const [selectedRFQs, setSelectedRFQs] = useState(null);
    const dispatch = useDispatch();
    const { vendors } = useSelector((state) => state.vendorReducer);
    const purchaseRequests = vendors?.purchaseRequests || [];

    useEffect(() => {
      const id = Cookies.get("vendorId");
      if (id) {
        dispatch(getVendorById(id));
      }
    }, [dispatch]);
  
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
        {openPISidebar && <VendorRFQSidebar  purchaseRequests={purchaseRequests}
             selectedRFQs={selectedRFQs}
  onSelectionChange={setSelectedRFQs}
    vendorId={vendors?._id}
  purchaseIndentId={purchaseRequests?.[0]?.purchaseIndentId}/>}
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
              <p>Request For Quote #2345</p>
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
                <div className="vendor-rfq-date">Indent Date: 22/05/2025</div>
              </div>
                  <div className="col-md-3 vendor-rfq-column">
                    <p>Indent No: #0000345</p>
                    <p>Required Delivery Date: 12/02/2025</p>
                    <p>Authorized Person</p>
                    <p>Purchase Indent</p>
                    <p>Monthly Contract</p>
                  </div>
                  <div className="col-md-3 vendor-rfq-column">
                    <p>Delivery To</p>
                    <div className="vendor-deliver-to">
                       <p className="mt-3">Grandag Saudi Ltd,</p>
                <p>Xxxx</p>
                <p className="mb-3">Xxxxxxx</p>
                <p>91 97947 13297</p>
                    </div>
                  </div>
            </div>
          <VendorRFQTable />
          <div className="vendor-rfq-bottom">
            <p>Approved Date: 24/05/2025</p>
            <div className="d-flex">
              <div className="me-5">
                <p>Amir</p>
                <p>CFO</p>
                <p>Grandag Saudi Ltd,</p>
              </div>
              <div>
                <p>Rohit Peter</p>
                <p>Managing Director</p>
                <p>Grandag Saudi Ltd,</p>
              </div>
            </div>
          </div>
           <div className="vendor-rfq-btns">
            <div className="rqc-debit-btn">
              Decline RFQ
            </div>
            <div className="rqc-approval-btn">
              Send Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorRFQ