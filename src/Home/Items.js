import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import Itam from "./Itam";

const Items = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: items,
  } = useQuery("items", () =>
    fetch("http://localhost:5000/addItems").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-4xl my-2"> Items We have</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {items.map((item) => (
          <Itam key={item._id} item={item}></Itam>
        ))}
      </div>
    </div>
  );
};

export default Items;
