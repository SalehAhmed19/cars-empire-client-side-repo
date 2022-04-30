import React from "react";
import { Card } from "react-bootstrap";

const HomeInventory = ({ car }) => {
  const { name, img, des, price } = car;
  return (
    <div className="col-md-4 col-12 my-3">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{des.slice(0, 100) + "..."}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Starting at <span className="fw-bold">${price}</span>
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default HomeInventory;
