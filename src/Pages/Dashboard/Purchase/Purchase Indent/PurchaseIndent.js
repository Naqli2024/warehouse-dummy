import React, { useState } from "react";
import { InputGroup, Form, Button, FormLabel } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { MdMoreVert } from "react-icons/md";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import PurchaseIndentLogo from "../../../../images/purchase-indent.svg";
import { useEffect } from "react";
import PurchaseIntentTable from "./PurchaseIntentTable";

const PurchaseIndent = () => {
  const [openPISidebar, setOpenPISidebar] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputType, setInputType] = useState("text");
  const [isManuallyToggled, setIsManuallyToggled] = useState(false);

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
    <div className="purchase-indent-container">
      {openPISidebar && (
        <div className="col-md-2 pi-sidebar">
          <div className="fixed-divider">
          <div className="pi-top-option">
            <div className="col-auto mt-2">
              <Form.Group>
                <Form.Select className="no-border text-muted">
                  <option value="" className="no-border text-muted">
                    All
                  </option>
                  <option className="no-border text-muted">Approved</option>
                  <option className="no-border text-muted">Rejected</option>
                  <option className="no-border text-muted">
                    Waiting For Approval
                  </option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="pi-options">
              <div className="new-pi-btn">
                <FaPlus size={12} />
                New PI
              </div>
              <div className="more-pi-btn">
                <MdMoreVert size={14} />
              </div>
            </div>
          </div>
          <div class="pi-divider"></div>
          </div>
          <div>
            <label class="pi-sidebar-list">
              <input type="checkbox" class="pi-checkbox" />
              <div class="pi-content">
                <div class="d-flex flex-column">
                  <p>PI NO: XXXXXXX</p>
                  <p>Purchase Indent</p>
                </div>
              </div>
              <p>45,000 SAR</p>
            </label>
            <div class="pi-divider"></div>
          </div>
          <div>
            <label class="pi-sidebar-list">
              <input type="checkbox" class="pi-checkbox" />
              <div class="pi-content">
                <div class="d-flex flex-column">
                  <p>PI NO: XXXXXXX</p>
                  <p>Purchase Indent</p>
                </div>
              </div>
              <p>45,000 SAR</p>
            </label>
            <div class="pi-divider"></div>
          </div>
        </div>
      )}
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
            <p>Purchase Indent #0000345</p>
          </div>
          <div className="pi-head-options">
            <div className="pi-option-divider" />
            <p className="d-flex align-items-center gap-1">
              <MdOutlineEdit size={15} />
              Edit
            </p>
            <div className="pi-option-divider" />
            <p className="d-flex align-items-center gap-1 text-secondary">
              <MdOutlineLocalPrintshop size={15} />
              Print
            </p>
            <div className="pi-option-divider" />
            <p className="d-flex align-items-center gap-1 text-secondary">
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
        <div className="d-md-flex flex-column">
          <div className="pi-top-right-content">
            <div className="col-md-3 pi-first-column">
              <img src={PurchaseIndentLogo} alt="purchase-indent" />
              <p className="mt-3">Grandag Saudi Ltd,</p>
              <p>Xxxx</p>
              <p className="mb-3">Xxxxxxx</p>
              <p>91 97947 13297</p>
              <div className="mt-4">
                <Form.Group>
                  <InputGroup className="mt-2">
                    <Form.Control
                      className="small-custom-textfield"
                      placeholder="Indent Date"
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
                <InputGroup className="mt-2">
                  <Form.Control
                    className="small-custom-textfield"
                    placeholder="Indent No: #0000345"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className="mt-2">
                  <Form.Select className="small-custom-textfield">
                    <option value="">Authorized Person</option>
                    <option>Person 1</option>
                    <option>Person 2</option>
                    <option>Person 3</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className="mt-2">
                  <Form.Control
                    className="small-custom-textfield"
                    placeholder="Requested By"
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-md-3 pi-second-column">
              <Form.Group>
                <InputGroup className="mt-2">
                  <Form.Select className="small-custom-textfield">
                    <option value="">Monthly Contract</option>
                    <option>One Time Purchase</option>
                    <option>Yearly Rate Contract</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className="mt-2">
                  <Form.Select className="small-custom-textfield">
                    <option value="">Indent Type</option>
                    <option>Purchase Indent</option>
                    <option>Store Indent Request</option>
                    <option>Capital Indent</option>
                    <option>Project Indent</option>
                    <option>Repair & Maintenance Indent</option>
                    <option>Emergency Indent</option>
                    <option>Trial/Development Indent</option>
                    <option>Production Indent</option>
                    <option>Service Indent</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup className="mt-2">
                  <Form.Control
                    className="small-custom-textfield"
                    placeholder="Vehicle No"
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>
          <PurchaseIntentTable />
          {isSubmitted ? (
            <div className="pi-bottom-content">
              <div>Approved Date:</div>
              <div className="pi-signs">
                <div className="pi-bottom-sign">
                  <p className="text-muted">Amir</p>
                  <p>CFO</p>
                  <p>Grandag Saudi Ltd,</p>
                  <div className="pi-get-quote-btn">Get Quote</div>
                </div>
                <div className="pi-bottom-sign">
                  <p className="text-muted">Rohit Peter</p>
                  <p>Managing Director</p>
                  <p>Grandag Saudi Ltd,</p>
                  <div className="pi-quick-po-btn">Quick PO</div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="d-flex justify-content-end"
              onClick={() => setIsSubmitted(true)}
            >
              <div className="pi-submit-btn">Submit for Approval</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseIndent;
