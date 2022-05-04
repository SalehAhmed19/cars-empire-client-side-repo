import React from "react";
import { Link } from "react-router-dom";
import error from "../../img/error.gif";

const NotFound = () => {
  return (
    <div style={{ height: "75vh" }}>
      <img className="d-block mx-auto w-50" src={error} alt="" />
      <Link
        className="d-block mx-auto rounded-pill w-50 mt-5 btn btn-outline-success"
        style={{ textDecoration: "none" }}
        to="/"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFound;
