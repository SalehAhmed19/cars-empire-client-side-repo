import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HomeInventory from "../../HomeInventory/HomeInventory";

const Inventory = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  const navigate = useNavigate();
  const navigateToInventory = () => {
    navigate("/inventory");
  };
  return (
    <div>
      <h2 className="fw-bold text-center">Inventory Highlights</h2>
      <div className="row w-75 mx-auto">
        {cars.slice(0, 6).map((car) => (
          <HomeInventory key={car._id} car={car}></HomeInventory>
        ))}
      </div>
      <Button onClick={navigateToInventory} variant="success d-block mx-auto">
        See More in Inventory
      </Button>
    </div>
  );
};

export default Inventory;
