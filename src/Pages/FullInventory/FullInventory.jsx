import { useNavigate } from "react-router-dom";
import useCars from "../../Hooks/useCars";
import { PlusCircleIcon } from "@heroicons/react/solid";

const FullInventory = () => {
  const [cars, setCars] = useCars();
  const navigate = useNavigate();
  const handleDelete = (_id) => {
    const procced = window.confirm("Are you sure you want to delete it?");
    if (procced) {
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const des = event.target.des.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const price = event.target.price.value;
    const img = event.target.img.value;

    console.log(name, des, quantity, supplier, price, img);
    event.target.reset();
  };
  return (
    <div className="mt-3">
      <h2 className="fw-bold text-center">Inventory</h2>
      <div className="w-50 mx-auto p-3 bg-light border rounded-3">
        <h5>Add Item</h5>
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
            <button
              type="submit"
              className="btn btn-success w-25 d-block mx-auto"
            >
              Add Item
              <PlusCircleIcon className="ms-3" style={{ width: "25px" }} />
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        <ul className="list-unstyled" /* className="row w-75 mx-auto" */>
          {cars.map((car) => (
            // <Cars key={car._id} car={car} handleDelete={handleDelete}></Cars>
            <li key={car._id}>
              <div className="row border m-3 p-3 rounded-3">
                <div className="col-md-4 col-12">
                  <img style={{ width: "300px" }} src={car.img} alt="" />
                </div>
                <div className="col-md-8 col-12">
                  <h4 className="fw-bolder">{car.name}</h4>
                  <p className="text-secondary">{car.des}</p>
                  <p className="text-secondary">Quantity: {car.quantity}</p>
                  <p className="text-secondary">
                    Supplier: <span className="fw-bold">{car.supplier}</span>
                  </p>
                  <small className="text-muted">
                    Starting at <span className="fw-bold">${car.price}</span>
                  </small>
                </div>
                <div className="p-2 mx-auto d-flex justify-content-center">
                  <button
                    onClick={() => {
                      navigate(`/update/${car._id}`);
                    }}
                    className="btn btn-success d-inline-block w-25"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(car._id)}
                    className="btn btn-outline-danger d-inline-block w-25 ms-2"
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

export default FullInventory;
