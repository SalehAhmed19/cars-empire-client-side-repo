import React from "react";
import img from "../../../img/car-2.png";
import "./WelcomeGrettings.css";

const WelcomeGrettings = () => {
  return (
    <div className="w-75 mx-auto my-5 border px-3 py-1 rounded-3 bg-light">
      <div className="row">
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <img className="img" src={img} alt="" />
        </div>
        <div className="col-md-6 col-12 d-flex flex-column justify-content-center bg-warning p-3">
          <h1 className="fw-bold">Welcome to Car Warehouse</h1>
          <h5>Lorem ipsum dolor sit amet consectetur</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ab
            ratione eum provident debitis distinctio et esse dignissimos, enim
            quis, minus tempora. Illo architecto quo impedit, deserunt dicta
            animi veritatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeGrettings;
