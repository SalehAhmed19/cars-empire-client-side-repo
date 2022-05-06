import React from "react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const des = event.target.des.value;
    const quantity = parseInt(event.target.quantity.value);
    const supplier = event.target.supplier.value;
    const price = event.target.price.value;
    const img = event.target.img.value;
    const email = event.target.email.value;
    const sold = 0;
    const car = {
      name: name,
      price: price,
      img: img,
      des: des,
      supplier: supplier,
      quantity: quantity,
      email: email,
      sold: sold,
    };
    fetch("https://protected-lake-29761.herokuapp.com/cars", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((data) => {});
    toast("Product added!");
    event.target.reset();
  };
  return (
    <div style={{ height: "65vh" }} className="my-5">
      <h2 className="text-center fw-bold text-success">Add Item</h2>
      <div className="w-75 mx-auto p-3 bg-light border rounded-3">
        <div className="d-flex flex-column">
          <form onSubmit={handleSubmit}>
            <input
              className="border-0 mb-2 rounded-3 d-block"
              style={{ height: "35px", width: "100%" }}
              type="text"
              name="name"
              placeholder="Enter the name"
            />
            <input
              className="border-0 mb-2 rounded-3 d-block"
              style={{ height: "35px", width: "100%" }}
              type="text"
              name="des"
              placeholder="Description"
            />
            <input
              className="border-0 mb-2 rounded-3 d-block"
              style={{ height: "35px", width: "100%" }}
              type="number"
              name="quantity"
              placeholder="Quantity"
            />
            <input
              className="border-0 mb-2 rounded-3 d-block"
              style={{ height: "35px", width: "100%" }}
              type="text"
              name="supplier"
              placeholder="Supplier"
            />
            <input
              className="border-0 mb-2 rounded-3 d-block"
              style={{ height: "35px", width: "100%" }}
              type="number"
              name="price"
              placeholder="Price"
            />
            <input
              className="border-0 mb-2 rounded-3 d-block"
              style={{ height: "35px", width: "100%" }}
              type="text"
              name="img"
              placeholder="imgURL"
            />
            <input
              className="border-0 mb-2 rounded-3 d-block"
              style={{ height: "35px", width: "100%" }}
              type="email"
              name="email"
              value={user.email}
              readOnly
            />
            <button
              type="submit"
              className="btn btn-success w-100 d-block mx-auto"
            >
              Add Item
              <PlusCircleIcon className="ms-3" style={{ width: "25px" }} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewItem;
