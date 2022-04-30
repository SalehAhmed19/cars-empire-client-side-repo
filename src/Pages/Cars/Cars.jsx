import React from "react";
import { Card } from "react-bootstrap";

const Cars = ({ car }) => {
  const { name, price, des, supplier, img, quantity } = car;
  return (
    <div className="col-12 my-3">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text className="text-secondary">{des}</Card.Text>
          <Card.Text className="text-secondary">Quantity: {quantity}</Card.Text>
          <Card.Text className="text-secondary">Supplier: {supplier}</Card.Text>
          <small className="text-muted">
            Starting at <span className="fw-bold">${price}</span>
          </small>
        </Card.Body>
        <Card.Footer>
          <button className="btn btn-outline-success d-block w-100">
            Update
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Cars;
