import React from "react";

const UpdateCar = ({ item }) => {
  const { _id, name, img, des, price, supplier, quantity } = item;
  return (
    <div>
      <h2>{item.length}</h2>
    </div>
  );
};

export default UpdateCar;
