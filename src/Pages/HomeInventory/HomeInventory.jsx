import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeInventory = ({ car }) => {
  const { name, img, des, price, quantity, supplier } = car;
  const navigate = useNavigate();
  const navigateToUpdate = () => {
    navigate("/update");
  };
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

export default HomeInventory;
