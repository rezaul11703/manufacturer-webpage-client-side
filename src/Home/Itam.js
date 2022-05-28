import React from "react";
import { useNavigate } from "react-router-dom";

const Itam = ({ item }) => {
  const navigate = useNavigate();
  const handlePurchase = () => {
    navigate(`/purchase/${item._id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl  my-6 ">
      <figure>
        <img src={item.productImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.productName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Short Description : {item.shrtDes}</p>
        <p> Min.Order:{item.minimumOrdered} </p>
        <p>Availlable Quantity:{item.quantity}</p>
        <p>Price :{item.price} /pc</p>
        <div className="card-actions justify-center">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md"
            onClick={handlePurchase}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Itam;
