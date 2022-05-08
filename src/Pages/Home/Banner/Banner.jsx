import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div style={{ height: "60vh" }} className="bg-img">
      <div className="py-5">
        <h1 className="text-white font text-center text">Cars Empire</h1>
        <h4 className="text-white text-center font-2">
          Best Cars inventory management website
        </h4>
      </div>
    </div>
  );
};

export default Banner;
