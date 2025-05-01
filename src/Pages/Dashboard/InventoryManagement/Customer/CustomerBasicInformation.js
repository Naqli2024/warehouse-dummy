import React from 'react'

const CustomerBasicInformation = () => {
  return (
    <div>
      <div className="vendor-info">
        <p className="d-flex justify-content-end fw-bold">Credit amount :  4000</p>
        <div>
          <div className="overview-content d-flex justify-content-start ">
            <p className="col-2">Name</p>
            <p className="col-1">:</p>
            <p>John</p>
          </div>
          <div className="overview-content d-flex justify-content-start">
            <p className="col-2">Company name</p>
            <p className="col-1">:</p>
            <p>IronGate Manufacturing pvt</p>
          </div>
          <div className="overview-content d-flex justify-content-start">
            <p className="col-2">Email id</p>
            <p className="col-1">:</p>
            <p>john02@gmail.com</p>
          </div>
          <div className="overview-content d-flex justify-content-start">
            <p className="col-2">Mobile no</p>
            <p className="col-1">:</p>
            <p>8356643466</p>
          </div>
          <div className="overview-content d-flex justify-content-start">
            <p className="col-2">Landline no</p>
            <p className="col-1">:</p>
            <p>8356643466</p>
          </div>
          <div className="overview-content d-flex justify-content-start">
            <p className="col-2">Website</p>
            <p className="col-1">:</p>
            <p className="text-primary cursor-pointer">
              https:tl/JFH-FGUR8769MFD
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerBasicInformation