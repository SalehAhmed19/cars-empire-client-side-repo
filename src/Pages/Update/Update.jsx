import React from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { _id } = useParams();
  return (
    <div>
      <h2 className="fw-bold text-center text-success">Update {_id}</h2>
    </div>
  );
};

export default Update;
