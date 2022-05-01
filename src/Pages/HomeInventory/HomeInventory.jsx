import React from "react";
import { Card } from "react-bootstrap";

const HomeInventory = ({ car }) => {
  const { name, img, des, price, quantity, supplier } = car;
  return (
    <div className="col-md-4 col-12 my-3">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text className="text-secondary">
            {des.slice(0, 100) + "..."}
          </Card.Text>
          <Card.Text className="text-secondary">Quantity: {quantity}</Card.Text>
          <Card.Text className="text-secondary">Supplier: {supplier}</Card.Text>
          <small className="text-muted">
            Starting at <span className="fw-bold">${price}</span>
          </small>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-center">
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

export default HomeInventory;
