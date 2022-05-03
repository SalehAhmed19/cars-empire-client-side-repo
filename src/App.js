import { Route, Routes } from "react-router-dom";
import "./App.css";
import FullInventory from "./Pages/FullInventory/FullInventory";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Update from "./Pages/Update/Update";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <FullInventory />
            </RequireAuth>
          }
        ></Route>
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
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
