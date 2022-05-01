import { Route, Routes } from "react-router-dom";
import "./App.css";
import FullInventory from "./Pages/FullInventory/FullInventory";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Update from "./Pages/Update/Update";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/inventory" element={<FullInventory />}></Route>
        <Route
          path="/update/:_id"
          element={
            <RequireAuth>
              <Update />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
