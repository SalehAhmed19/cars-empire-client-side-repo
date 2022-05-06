import React from "react";
import Banner from "../Banner/Banner";
import BestCars from "../BestCars/BestCars";
import Inventory from "../Inventory/Inventory";
import WelcomeGrettings from "../WelcomeGrettings/WelcomeGrettings";

const Home = () => {
  return (
    <div>
      <Banner />
      <WelcomeGrettings />
      <Inventory />
      <BestCars />
    </div>
  );
};

export default Home;
