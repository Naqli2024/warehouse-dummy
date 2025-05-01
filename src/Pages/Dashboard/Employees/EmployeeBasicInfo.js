import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { MdPhoneAndroid } from "react-icons/md";
import { TbGenderMale } from "react-icons/tb";
import { VscPerson } from "react-icons/vsc";

const EmployeeBasicInfo = () => {
  return (
    <div className="emp-overview">
    <div className="col-md-7 overview-left-content">
      <div className="emp-content">
        <p className="col-md-4"><span className='emp-info-icon'><TfiEmail/></span>Email</p>
        <p className="col-md-1">-</p>
        <p className="col-md-5">rahul04@gmail.com</p>
      </div>
      <div className="emp-content">
        <p className="col-md-4"><span className='emp-info-icon'><MdPhoneAndroid/></span>Mobile no</p>
        <p className="col-md-1">-</p>
        <p className="col-md-5">+91 8686865868</p>
      </div>
      <div className="emp-content">
        <p className="col-md-4"><span className='emp-info-icon'><TbGenderMale/></span>Gender</p>
        <p className="col-md-1">-</p>
        <p className="col-md-5">Male</p>
      </div>
      <div className="emp-content">
        <p className="col-md-4"><span className='emp-info-icon'><VscPerson/></span>Age</p>
        <p className="col-md-1">-</p>
        <p className="col-md-5">32</p>
      </div>
    </div>
  </div>
  )
}

export default EmployeeBasicInfo