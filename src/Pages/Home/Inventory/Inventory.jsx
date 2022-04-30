import React, { useEffect, useState } from "react";
import HomeInventory from "../../HomeInventory/HomeInventory";

const Inventory = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <h2 className="fw-bold text-center">Inventory Highlights</h2>
      <div className="row w-75 mx-auto">
        {cars.slice(0, 6).map((car) => (
          <HomeInventory key={car._id} car={car}></HomeInventory>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
