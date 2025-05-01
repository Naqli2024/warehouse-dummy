import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Menu, MenuItem, IconButton, Breadcrumbs } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { storageData } from "../../../../Data/StorageData";
import StockLocationModal from "./StockLocationModal";
import BinLocationModal from "./BinLocationModal";
import TransferHistory from "./TransferHistory";

const StorageDetails = ({ backToList }) => {
  const [openTransfer, setOpenTransfer] = useState(null);
  const [openTransferHistory, setOpenTransferHistory] = useState(false);
  const [openStockLocationDialog, setOpenStockLocationDialog] = useState(false);
  const [openBinLocationDialog, setOpenBinLocationDialog] = useState(false);

  const handleClick = (event) => {
    if (event) {
      setOpenTransfer(event.currentTarget);
    }
  };

  const handleClose = () => {
    setOpenTransfer(null);
  };

  const handleStockLocation = () => {
    setOpenStockLocationDialog(true);
    handleClose();
  }

  const handleBinLocation = () => {
    setOpenBinLocationDialog(true);
    handleClose();
  }

  return (
    <div className="purchase-list">
      <h2>Storage</h2>
      <button onClick={backToList} className="goBack-btn">
        <span>
          <ArrowBackIosIcon />
        </span>
        Back
      </button>
      <div className="edit-print-del-btn">
        <React.Fragment>
          <Menu
            anchorEl={openTransfer}
            open={Boolean(openTransfer)}
            onClose={handleClose}
            aria-labelledby="with-menu-demo-breadcrumbs"
            sx={{ marginTop: "10px" }}
          >
            <MenuItem onClick={handleStockLocation}>Stock location transfer</MenuItem>
            <hr className="mt-0 mb-0" />
            <MenuItem onClick={handleBinLocation}>Bin location transfer</MenuItem>
          </Menu>
          <Breadcrumbs aria-label="breadcrumbs">
            <div
              className="more-icon-btn ms-3 me-3 text-dark cursor-pointer"
              onClick={handleClick}
            >
              Transfer
              <span className="ms-2">
                <KeyboardArrowDownIcon />
              </span>
            </div>
          </Breadcrumbs>
        </React.Fragment>
        <div className="divider"></div>
        <div className={openTransferHistory ? "action-btn print-btn text-primary" : "action-btn print-btn"} onClick={()=>setOpenTransferHistory(true)}>Transfer History</div>
        <div className="divider"></div>
        <div className="action-btn">Delete</div>
        <div className="divider"></div>
      </div>
      {openTransferHistory ? <TransferHistory/>
       : (<div className="storage-details-container">
        {storageData.map((storage,index) => (
           <div className="storage-details-card" key={index}>
           <p>{storage.name}</p>
           <p className="fw-bold">{storage.data}</p>
         </div>
        ))}
      </div>)}
      
      {openStockLocationDialog && (
        <StockLocationModal 
        openStockLocationDialog={openStockLocationDialog}
        setOpenStockLocationDialog={setOpenStockLocationDialog}
        />)}
        {openBinLocationDialog && (
        <BinLocationModal 
        openBinLocationDialog={openBinLocationDialog}
        setOpenBinLocationDialog={setOpenBinLocationDialog}
        />)}
    </div>
  );
};

export default StorageDetails;
