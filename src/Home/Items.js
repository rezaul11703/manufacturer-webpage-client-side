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
    <div className="lg:p-4">
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {items.map((item) => (
          <Itam key={item._id} item={item}></Itam>
        ))}
      </div>
    </div>
  );
};

export default Items;
