import useCars from "../../Hooks/useCars";
import Cars from "../Cars/Cars";

const FullInventory = () => {
  const [cars, setCars] = useCars();
  return (
    <div>
      <h2>Inventory</h2>
      <div className="row w-75 mx-auto">
        {cars.map((car) => (
          <Cars key={car.length} car={car}></Cars>
        ))}
      </div>
    </div>
  );
};

export default FullInventory;
