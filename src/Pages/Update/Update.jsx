import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const { _id } = useParams();
  const [car, setCar] = useState({});
  useEffect(() => {
    const url = `https://protected-lake-29761.herokuapp.com/cars/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);
  const handleQuantity = () => {
    let { quantity, name, price, des, supplier, img } = car;
    if (quantity > 0) {
      quantity = quantity - 1;
      const updateQuantity = {
        quantity: quantity,
        name: name,
        price: price,
        des: des,
        supplier: supplier,
        img: img,
      };
      const url = `https://protected-lake-29761.herokuapp.com/cars/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              setCar(data);
            });
        });
    }
  };
  const handleRestock = (event) => {
    let { quantity, name, price, des, supplier, img } = car;
    event.preventDefault();
    const restockQuantity = event.target.restock.value;
    console.log(restockQuantity);
    if (!restockQuantity || restockQuantity < 0) {
      toast("Please enter a valid number");
    } else {
      quantity = parseInt(quantity) + parseInt(restockQuantity);
      const updateQuantity = {
        quantity: quantity,
        name: name,
        price: price,
        des: des,
        supplier: supplier,
        img: img,
      };
      const url = `https://protected-lake-29761.herokuapp.com/cars/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              setCar(data);
              event.target.reset();
            });
        });
    }
  };
  return (
    <div className="m-5">
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
          {!car.quantity ? (
            <button
              onClick={handleQuantity}
              className="btn btn-Danger d-inline-block w-100 disabled"
            >
              Stock Out
            </button>
          ) : (
            <button
              onClick={handleQuantity}
              className="btn btn-warning d-inline-block w-100"
            >
              Delivered
            </button>
          )}
        </Card.Footer>
      </Card>
      <form
        onSubmit={handleRestock}
        style={{ backgroundColor: "#e5e5e5" }}
        className="mt-5 p-3 rounded-3 w-75 mx-auto"
      >
        <h5>Restock Product</h5>
        <div className="d-flex justify-content-center align-items-center">
          <input
            name="restock"
            style={{ height: "36px" }}
            className="d-inline-block border-0 w-50"
            type="number"
          />
          <input
            type="submit"
            value="Restock"
            className="btn btn-success w-50"
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
