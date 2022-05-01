import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cars = ({ car }) => {
  const { name, price, des, supplier, img, quantity } = car;
  const navigate = useNavigate();
  const navigateToUpdate = () => {
    navigate("/update");
  };
  return (
    <div className="col-12 my-3">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bolder">{name}</Card.Title>
          <Card.Text className="text-secondary">{des}</Card.Text>
          <Card.Text className="text-secondary">Quantity: {quantity}</Card.Text>
          <Card.Text className="text-secondary">
            Supplier: <span className="fw-bold">{supplier}</span>
          </Card.Text>
          <small className="text-muted">
            Starting at <span className="fw-bold">${price}</span>
          </small>
        </Card.Body>
        <Card.Footer className="p-2">
          <button
            onClick={navigateToUpdate}
            className="btn btn-outline-success d-inline-block w-100"
          >
            Update
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Cars;
