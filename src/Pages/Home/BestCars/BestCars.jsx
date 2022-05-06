import React from "react";
import img1 from "../../../img/slider-01.jpeg";
import img2 from "../../../img/slider-02.jpeg";
import img3 from "../../../img/slider-03.jpeg";

const BestCars = () => {
  return (
    <div className="container-fluid bg-light p-3 my-3">
      <h2 className="fw-bold text-center">Best Cars</h2>
      <div className="border rounded-3 mx-auto bg-light my-3 w-50">
        <div
          id="carouselExampleControls"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100 rounded-3" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100 rounded-3" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100 rounded-3" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestCars;
