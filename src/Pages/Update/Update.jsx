import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UpdateCar from "../UpdateCar/UpdateCar";

const Update = () => {
  const { _id } = useParams();
  const [car, setCar] = useState({});
  useEffect(() => {
    const url = `https://protected-lake-29761.herokuapp.com/cars/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);
  return (
    <div className="container m-5">
      <Card>
        <Card.Img
          className="w-50 d-block mx-auto"
          variant="top"
          src={car.img}
        />
        <Card.Body>
          <Card.Title className="fw-bold">{car.name}</Card.Title>
          <Card.Text className="text-secondary fw-bold">
            Product ID: {car._id}
          </Card.Text>
          <Card.Text className="text-secondary">{car.des}</Card.Text>
          <Card.Text className="text-secondary">
            Quantity: {car.quantity}
          </Card.Text>
          <Card.Text className="text-secondary">
            Supplier: {car.supplier}
          </Card.Text>
          <small className="text-muted">
            Starting at <span className="fw-bold">${car.price}</span>
          </small>
        </Card.Body>
        <Card.Footer className="p-2">
          <button className="btn btn-warning d-inline-block w-100">
            Delivered
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Update;
