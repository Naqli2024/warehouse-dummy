import React, { useState } from "react";
import LoadingBay from "../../../../../images/loading.svg";
import PathWay from "../../../../../images/path-way.svg";
import EntryExit from "../../../../../images/entry-exit.svg";

const SideOptions = () => {
  return (
    <div>
      <div className="option-container">
        <img
          src={LoadingBay}
          alt="LoadingBay"
          className="mb-2 warehouse-icons"
        />
        <p className="warehouse-option-name">Loading Bay</p>
        <div className="warehouse-option-divider" />
      </div>
      <div className="option-container">
        <img src={PathWay} alt="LoadingBay" className="mb-2 warehouse-icons" />
        <p className="warehouse-option-name">Pathway</p>
        <div className="warehouse-option-divider" />
      </div>
      <div className="option-container">
        <img
          src={EntryExit}
          alt="LoadingBay"
          className="mb-2 warehouse-icons"
        />
        <p className="warehouse-option-name">Entry / Exit</p>
        <div className="warehouse-option-divider" />
      </div>
      <div className="option-container">
        <img
          src={EntryExit}
          alt="LoadingBay"
          className="mb-2 warehouse-icons"
        />
        <p className="warehouse-option-name">Electricity Point</p>
        <div className="warehouse-option-divider" />
      </div>
      <div className="option-container">
        <img
          src={EntryExit}
          alt="LoadingBay"
          className="mb-2 warehouse-icons"
        />
        <p className="warehouse-option-name">Partions</p>
        <div className="warehouse-option-divider" />
      </div>
      <div className="option-container">
        <img
          src={EntryExit}
          alt="LoadingBay"
          className="mb-2 warehouse-icons"
        />
        <p className="warehouse-option-name">Outer Wall</p>
        <div className="warehouse-option-divider" />
      </div>
      <div className="option-container">
        <img
          src={EntryExit}
          alt="LoadingBay"
          className="mb-2 warehouse-icons"
        />
        <p className="warehouse-option-name">Deform</p>
        <div className="warehouse-option-divider" />
      </div>
    </div>
  );
};

export default SideOptions;
