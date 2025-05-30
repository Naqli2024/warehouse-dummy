import React, { useRef, useState } from "react";
import PurchaseOrderSidebar from "./PurchaseOrderSidebar";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import PurchaseIndentLogo from "../../../../images/purchase-indent.svg";
import PurchaseOrderCompanyLogo from "../../../../images/quote-request-logo.svg";
import { useEffect } from "react";
import SavePurchaseOrderTable from "./SavePurchaseOrderTable";
import { useReactToPrint } from "react-to-print";

const SavePurchaseOrder = () => {
  const [openPISidebar, setOpenPISidebar] = useState(true);
  const [isManuallyToggled, setIsManuallyToggled] = useState(false);
  const componentRef = useRef(null);

  const handleAfterPrint = React.useCallback(() => {
    console.log("onAfterPrint called");
  }, []);
 
  const handleBeforePrint = React.useCallback(() => {
    console.log("onBeforePrint called");
    return Promise.resolve();
  }, []);
  
  const reactToPrintFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Purchase Order Details",
    onAfterPrint: handleAfterPrint,
    onBeforePrint: handleBeforePrint,
  });

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

  return (
    <div>
      <div className="purchase-order-container">
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
              <p className="d-flex align-items-center gap-1" onClick={reactToPrintFn}>
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
          <div ref={componentRef} className="print-overall-container">
            <div className="save-po-badge">
            <div className="diagonal-badge-container">
              <div className="diagonal-badge">Sent</div>
            </div>
          </div>
          <div className="save-po-top-container">
            <div className="col-4 po-save-top-data">
              <img src={PurchaseIndentLogo} alt="purchase-order" />
              <p className="mt-3">Grandag Saudi Ltd,</p>
              <p>Xxxx</p>
              <p className="mb-3">Xxxxxxx</p>
              <p>91 97947 13297</p>
            </div>
            <div className="col-4 po-save-top-data d-flex flex-column align-items-center">
              <div className="d-flex gap-2">
                <p>Payment Terms:</p>
                <p>90 Days</p>
              </div>
              <div className="d-flex gap-2">
                <p>Mode:</p>
                <p>Monthly Contract</p>
              </div>
              <div className="d-flex gap-2">
                <p>Delivery Date:</p>
                <p>12/02/2025</p>
              </div>
              <div className="d-flex gap-2">
                <p>Advance Payment:</p>
                <p>50%</p>
              </div>
            </div>
            <div className="col-4 po-heading-right">
              <div className="po-save-heading">Purchase Order</div>
              <div className="d-flex gap-2">
                <p>PO Date:</p>
                <p>22/05/2025</p>
              </div>
              <div className="d-flex gap-2">
                <p>PO No:</p>
                <p>#0000345</p>
              </div>
              <div className="d-flex gap-2">
                <p>Supply:</p>
                <p>Domestic</p>
              </div>
              <div className="d-flex gap-2">
                <p>Currency:</p>
                <p>SAR</p>
              </div>
            </div>
          </div>
          <div className="save-po-top-container mt-3">
            <div className="col-4 po-save-top-data">
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
            <div className="col-4 po-save-top-data d-flex flex-column align-items-center">
              <p className="mb-3 fw-bold">Deliver To</p>
              <div>
                <p className="fw-bold">Grandag Saudi Ltd,</p>
                <p>Vendor Id: xxxxx</p>
                <p>xxxxxx</p>
                <p>91 97947 13297</p>
              </div>
            </div>
            <div className="col-4 po-heading-right">
              <div className="d-flex flex-column d-flex align-items-end">
                <p className="mb-3 fw-bold">Transport Mode</p>
                <p>1.Road Way</p>
                <p>2.Air Freight</p>
                <p>3.Roadway</p>
              </div>
            </div>
          </div>
          <SavePurchaseOrderTable />
          <div className="purchaser-order-to ms-5">
            <p>Amount In words : Twenty thousand Saudi Riyal Only</p>
          </div>
          <div className="save-po-bottom-content">
            <div className="pi-signs mt-5">
              <div className="pi-bottom-sign">
                <p className="text-muted">Amir</p>
                <p>CFO</p>
                <p>Grandag Saudi Ltd,</p>
              </div>
              <div className="pi-bottom-sign">
                <p className="text-muted">Rohit Peter</p>
                <p>Managing Director</p>
                <p>Grandag Saudi Ltd,</p>
              </div>
            </div>
            <div className="po-discount">
            <div className="d-flex align-items-center gap-3">
              <p>Transport</p>
              <p>2000 SAR</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <p>Loading</p>
              <p>1000 SAR</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <p>Discount</p>
              <p>1000 SAR</p>
            </div>
            <div className="po-grand-total">GRAND TOTAL: 22,000 SAR</div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavePurchaseOrder;
