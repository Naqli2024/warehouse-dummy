import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const EmployeeAddress = () => {
  return (
     <div className="emp-overview">
        <div className="col-md-7 overview-left-content">
          <div className="emp-content">
            <p className="col-md-4"><span className='emp-info-icon'><IoHome/></span>Address</p>
            <p className="col-md-1">-</p>
            <p className="col-md-5">20th West coast street</p>
          </div>
          <div className="emp-content">
            <p className="col-md-4"><span className='emp-info-icon'><FaGlobe/></span>Nationality</p>
            <p className="col-md-1">-</p>
            <p className="col-md-5">Indian</p>
          </div>
          <div className="emp-content">
            <p className="col-md-4"><span className='emp-info-icon'><MdLocationCity/></span>City</p>
            <p className="col-md-1">-</p>
            <p className="col-md-5">Chennai</p>
          </div>
          <div className="emp-content">
            <p className="col-md-4"><span className='emp-info-icon'><FaMapLocationDot/></span>Zip code</p>
            <p className="col-md-1">-</p>
            <p className="col-md-5">600001</p>
          </div>
        </div>
      </div>
  )
}

export default EmployeeAddress