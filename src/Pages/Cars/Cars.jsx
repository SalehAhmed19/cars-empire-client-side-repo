import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cars = ({ car }) => {
  const { _id, name, price, des, supplier, img, quantity } = car;
  const navigate = useNavigate();
  const navigateToUpdate = () => {
    navigate(`/update/${_id}`);
  };
  return (
    <div className="border rounded-3 my-3">
      <div className="row">
        <img src={img} className="col-4" alt="" />
        <div className="col-8 p-3">
          <h4 className="fw-bolder">{name}</h4>
          <div className="text-secondary">{des}</div>
          <div className="text-secondary">Quantity: {quantity}</div>
          <div className="text-secondary">
            Supplier: <span className="fw-bold">{supplier}</span>
          </div>
          <small className="text-muted">
            Starting at <span className="fw-bold">${price}</span>
          </small>
        </div>
        <div className="p-2">
          <button
            onClick={() => navigateToUpdate(_id)}
            className="btn btn-success d-inline-block w-100"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cars;
