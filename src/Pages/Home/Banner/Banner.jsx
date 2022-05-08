import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-img">
      <div className="py-5 container">
        <h1 className="text-white font text-center text">Cars Empire</h1>
        <h4 className="text-white text-center font-2">
          Best Cars inventory management website
        </h4>
        <button className="btn btn-outline-light rounded-pill d-block mx-auto my-5">
          Full Inventory
        </button>
      </div>
    </div>
  );
};

export default Banner;
