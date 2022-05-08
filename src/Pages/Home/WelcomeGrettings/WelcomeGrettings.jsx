import React from "react";
import img from "../../../img/car-2.png";
import "./WelcomeGrettings.css";

const WelcomeGrettings = () => {
  return (
    <div className="w-75 mx-auto my-5 border px-3 py-1 rounded-3 bg-light">
      <div className="row">
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center p-5">
          <img className="img" src={img} alt="" />
        </div>
        <div className="col-md-6 col-12 d-flex flex-column justify-content-center bg-custom p-3">
          <h1 className="fw-bold text-light">
            Welcome to <span className="font">Car-Empire</span>
          </h1>
          <h5 className="text-light font-3 fw-bold">
            Warehouse Management Service
          </h5>
          <p className="text-light font-3">
            Car-Empire Warehouse management system website. The best products,
            the best management application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeGrettings;
