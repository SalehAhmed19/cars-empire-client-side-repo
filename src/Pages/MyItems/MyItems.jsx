import { TrashIcon } from "@heroicons/react/outline";
import React from "react";
import { Table } from "react-bootstrap";
import useMyItems from "../../Hooks/useMyItems";

const MyItems = () => {
  const [myItems, setMyItems] = useMyItems();
  // console.log(myItems);
  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure you want to delete it?");
    if (proceed) {
      fetch(`https://protected-lake-29761.herokuapp.com/my-items/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingItem = myItems.filter((item) => item._id !== _id);
            setMyItems(remainingItem);
          }
        });
    }
  };
  return (
    <div style={{ height: "75vh" }}>
      <h2 className="fw-bold text-center text-success">My Items</h2>
      <div className="border rounded-3 p-3 bg-light container mx-auto">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Model</th>
              <th>Qty</th>
              <th>Sold</th>
            </tr>
          </thead>
          {myItems.map((item) => (
            <tbody key={item._id} item={item}>
              <tr>
                <td>{item._id.slice(0, 7) + "..."}</td>
                <td>{item.name.slice(0, 7) + ".."}</td>
                <td>{item.quantity}</td>
                <td>{item.sold}</td>
                <td className="text-center">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    <TrashIcon style={{ height: "22px" }} />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default MyItems;
