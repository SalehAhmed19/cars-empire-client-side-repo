import useCars from "../../Hooks/useCars";
import Cars from "../Cars/Cars";

const FullInventory = () => {
  const [cars, setCars] = useCars();
  return (
    <div className="mt-3">
      <h2 className="fw-bold text-center">Inventory</h2>
      <div className="row w-75 mx-auto">
        {cars.map((car) => (
          <Cars key={car._id} car={car}></Cars>
        ))}
      </div>
    </div>
  );
};

export default FullInventory;
