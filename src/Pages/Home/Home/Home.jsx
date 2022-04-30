import React from "react";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";
import WelcomeGrettings from "../WelcomeGrettings/WelcomeGrettings";

const Home = () => {
  return (
    <div>
      <Banner />
      <WelcomeGrettings />
      <Inventory />
    </div>
  );
};

export default Home;
