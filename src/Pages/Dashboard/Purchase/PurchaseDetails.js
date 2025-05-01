import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CreateInvoice from "./CreateInvoice";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findPurchaseById } from "../../../Redux/features/findPurchaseByIdSlice";

const PurchaseDetails = () => {
  const [openInvoice, setOpenInvoice] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state) => state.findPurchaseById
  );

  const backToPurchaseDetails = () => {
    setOpenInvoice(!openInvoice);
  };

  const backToList = () => {
    navigate("/admin/purchase-list");
  };

  useEffect(() => {
    if (id) {
      dispatch(findPurchaseById(id));
    }
  }, [id, dispatch]);

  return (
    <div className="purchase-list">
      {openInvoice ? (
        <CreateInvoice backToPurchaseDetails={backToPurchaseDetails} />
      ) : (
        <>
          <h2>Purchase</h2>
          <button onClick={backToList} className="goBack-btn">
            <span>
              <ArrowBackIosIcon />
            </span>
            Back
          </button>

          {data && (
            <>
              <div className="row invoice-btn">
                <div className="invoice-btn">
                  <div>
                    <b>Product id:</b> {data._id}
                  </div>
                  <button type="button" className="btn create-invoice-btn">
                    Create invoice
                  </button>
                </div>
              </div>
              <div className="edit-print-del-btn">
                <div className="action-btn edit-btn">
                  <EditOutlinedIcon className="action-icon" />
                  Edit
                </div>
                <div className="divider"></div>
                <div className="action-btn print-btn">
                  <PrintOutlinedIcon className="action-icon" />
                  Print
                </div>
                <div className="divider"></div>
                <div className="action-btn delete-btn">
                  <DeleteOutlineSharpIcon className="action-icon" />
                  Delete
                </div>
                <div className="divider"></div>
              </div>
              <div class="outer-card shadow">
                <div class="row justify-content-evenly">
                  <div class="col-md-2 p-3 text-center invoice-card">
                    <p>Part number</p>
                    <p className="invoice-id">{data.partNumber}</p>
                  </div>
                  <div class="col-md-2 p-3 text-center invoice-card">
                    <p>HNS code</p>
                    <p className="invoice-id">{data.hnsCode}</p>
                  </div>
                  <div class="col-md-2 p-3 text-center invoice-card">
                    <p>Quantity</p>
                    <p className="invoice-id">{data.quantity}</p>
                  </div>
                  <div class="col-md-2 p-3 text-center invoice-card">
                    <p>MRP</p>
                    <p className="invoice-id">{data.MRP}</p>
                  </div>
                </div>
                <div class="row justify-content-evenly mt-5">
                  <div class="col-md-2 p-3 text-center invoice-card">
                    <p>GST</p>
                    <p className="invoice-id">{data.GST}</p>
                  </div>
                  <div class="col-md-2 p-3 text-center invoice-card">
                    <p>Advance payment</p>
                    <p className="invoice-id">3452</p>
                  </div>
                  <div class="col-md-2 p-3 text-center invoice-card">
                    <p>Brand name</p>
                    <p className="invoice-id">{data.brandName}</p>
                  </div>
                  <div class="col-md-2 p-3 text-center invoice-card">
                    <p>Category</p>
                    <p className="invoice-id">{data.category}</p>
                  </div>
                </div>
                <CreateInvoice />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default PurchaseDetails;
