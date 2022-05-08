import React from "react";
import "./Footer.css";
import img from "../../img/mar-01.png";

const Footer = () => {
  return (
    <div className="bg">
      <div
        style={{ height: "250px" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="pt-3">
          <img
            style={{ width: "200px" }}
            className="d-block mx-auto"
            src={img}
            alt=""
          />
        </div>
        <div>
          <p className="p-5 text-center m-0 text-light">
            Developed by Saleh Ahmed Mahin &copy; Cars-Empire All rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
