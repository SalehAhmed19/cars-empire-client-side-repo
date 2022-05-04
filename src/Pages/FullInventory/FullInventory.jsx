import { useNavigate } from "react-router-dom";
import useCars from "../../Hooks/useCars";
import { PlusCircleIcon } from "@heroicons/react/solid";
import useMyItems from "../../Hooks/useMyItems";

const FullInventory = () => {
  const [cars, setCars] = useCars();
  const [myItems, setMyItems] = useMyItems();
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
    }
  };
  const navigateToAddItem = () => {
    navigate("/add-item");
  };
  return (
    <div className="mt-3">
      <h2 className="fw-bold text-center">Inventory</h2>
      <div className="container">
        <ul className="list-unstyled">
          {cars.map((car) => (
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
      <div className="my-5">
        <button
          onClick={navigateToAddItem}
          className="btn btn-success d-block mx-auto"
        >
          Add New Item <PlusCircleIcon style={{ width: "25px" }} />
        </button>
      </div>
    </div>
  );
};

export default FullInventory;
