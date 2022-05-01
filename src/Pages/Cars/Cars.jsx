import React from "react";
import { Card } from "react-bootstrap";

const Cars = ({ car }) => {
  const { name, price, des, supplier, img, quantity } = car;
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
        <Card.Footer className="p-0">
          <div className="d-flex justify-content-center p-2">
            <button
              style={{ width: "44%", marginRight: "20px" }}
              className="btn btn-outline-success d-inline-block"
            >
              Update
            </button>
            <button
              style={{ width: "44%" }}
              className="btn btn-warning d-inline-block"
            >
              Deliver
            </button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Cars;
