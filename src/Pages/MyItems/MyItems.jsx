import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useCars from "../../Hooks/useCars";
import useMyItems from "../../Hooks/useMyItems";

const MyItems = () => {
  const [cars, setCars] = useCars();
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useMyItems();
  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure you want to delete it?");
    if (proceed) {
      fetch(`https://protected-lake-29761.herokuapp.com/my-items/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myItems.filter((item) => item._id !== _id);
            setMyItems(remaining);
          }
        });
      fetch(`https://protected-lake-29761.herokuapp.com/cars/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = cars.filter((car) => car._id !== _id);
            setCars(remaining);
          }
        });
    }
  };
  return (
    <div style={{ height: "75vh" }}>
      <h2 className="fw-bold text-center text-success">My Items</h2>
      <div className="border rounded-3 m-3 p-3 bg-light">
        <ul>
          {myItems.map((item) => (
            <li key={item._id} item={item} className="list-unstyled">
              <div className="row border m-3 p-3 rounded-3 bg-white">
                <div className="col-md-4 col-12">
                  <img style={{ width: "300px" }} src={item.img} alt="" />
                </div>
                <div className="col-md-8 col-12">
                  <h4 className="fw-bolder">{item.name}</h4>
                  <p className="text-secondary">{item.des}</p>
                  <p className="text-secondary">Quantity: {item.quantity}</p>
                  <p className="text-secondary">
                    Supplier: <span className="fw-bold">{item.supplier}</span>
                  </p>
                  <small className="text-muted">
                    Starting at <span className="fw-bold">${item.price}</span>
                  </small>
                </div>
                <div className="p-2 mx-auto d-flex justify-content-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-outline-danger d-inline-block w-50 ms-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyItems;
