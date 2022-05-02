import React from "react";
import { useNavigate } from "react-router-dom";

const Cars = ({ car }) => {
  const { _id, name, price, des, supplier, img, quantity, handleDelete } = car;
  const navigate = useNavigate();
  const navigateToUpdate = () => {
    navigate(`/update/${_id}`);
  };
  return (
    <div className="border rounded-3 my-3">
      <div className="row">
        <img src={img} className="col-md-4 col-12" alt="" />
        <div className="col-md-8 col-12 p-3">
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
        <div className="p-2 mx-auto d-flex justify-content-center">
          <button
            onClick={() => navigateToUpdate(_id)}
            className="btn btn-success d-inline-block w-25"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline-danger d-inline-block w-25 ms-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cars;
