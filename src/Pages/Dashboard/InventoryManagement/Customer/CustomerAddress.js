import React from 'react'
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const CustomerAddress = () => {
  return (
    <div>
    <div className="vendor-address-overview">
    <div className="vendor-address-left-content">
    <div className="fw-bold">Billing address<span className="ms-1"><EditOutlinedIcon/></span></div>
      <div className="vendor-content">
        <p className="col-md-5">Country</p>
        <p className="col-md-3">-</p>
        <p>India</p>
      </div>
      <div className="vendor-content">
        <p className="col-md-5">State</p>
        <p className="col-md-3">-</p>
        <p>Tamil nadu</p>
      </div>
      <div className="vendor-content">
        <p className="col-md-5">City</p>
        <p className="col-md-3">-</p>
        <p>Chennai</p>
      </div>
      <div className="vendor-content">
        <p className="col-md-5">Street</p>
        <p className="col-md-3">-</p>
        <p>4th cross street , Thiruvanmiyur</p>
      </div>
      <div className="vendor-content">
        <p className="col-md-5">Zip code</p>
        <p className="col-md-3">-</p>
        <p>600041</p>
      </div>
      <div className="vendor-content">
        <p className="col-md-5">Phone no</p>
        <p className="col-md-3">-</p>
        <p>8679391734</p>
      </div>
    </div>
    <div className="vertical-divider"></div>
    <div className="vendor-address-right-content">
    <div className="fw-bold">Shipping address<span className="ms-1"><EditOutlinedIcon/></span></div>
      <div className="vendor-content">
        <p className="col-md-5">Country</p>
        <p className="col-md-3">-</p>
        <p>India</p>
      </div>
      <div className="vendor-content">
        <p className="col-md-5">State</p>
        <p className="col-md-3">-</p>
        <p>Tamil nadu</p>
      </div>
      <div className="vendor-content">
        <p className="col-md-5">City</p>
        <p className="col-md-3">-</p>
        <p>Chennai</p>
      </div>
      <div className="vendor-content">
        <p className="col-md-5">Street</p>
        <p className="col-md-3">-</p>
        <p>4th cross street , Thiruvanmiyur</p>
      </div>
      <div className="vendor-content">
        <p className="col-md-5">Zip code</p>
        <p className="col-md-3">-</p>
        <p>600041</p>
      </div>
      <div className="vendor-content">
        <p className="col-md-5">Phone no</p>
        <p className="col-md-3">-</p>
        <p>8679391734</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default CustomerAddress