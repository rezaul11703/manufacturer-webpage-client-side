import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { ErrorMessage } from "@hookform/error-message";
import { toast, ToastContainer } from "react-toastify";

const Purchage = () => {
  const [disabled, setdisabled] = useState(false);
  const [errorse, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    isLoading,
    error,
    data: items,
  } = useQuery("items", () =>
    fetch(`http://localhost:5000/purchase/${id}`).then((res) => res.json())
  );
  let signInError;
  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  const handlePurchase = async (data) => {
    if (
      parseInt(data.orderedQuantity) < parseInt(items.minimumOrdered) ||
      parseInt(data.orderedQuantity) > parseInt(items.quantity)
    ) {
      setError("Wrong Input");
    }
    const totalPrice = parseInt(data.orderedQuantity) * parseInt(items.price);
    const userCart = {
      userName: user.displayName,
      userEmail: user.email,
      productName: items.productName,
      totalOrdered: data.orderedQuantity,
      netPrice: totalPrice,
    };

    fetch("http://localhost:5000/userCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userCart),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("ITem Added Successfully to the cart");
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card w-96 bg-base-100 shadow-xl  my-6 ">
            {items.productName}
            <figure>
              <img src={items.productImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {items.productName}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Short Description : {items.shrtDes}</p>
              <p> Available Quantity: {items.quantity} </p>
              <p>Minimum Ordered Quantity : {items.minimumOrdered}</p>
              <p>Price : {items.price} /pc</p>
              <div className="card-actions justify-center"></div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-100 max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(handlePurchase)}
              className="form-control w-full max-auto-xs mx-auto p-4 text-center"
            >
              {" "}
              <label className="label">
                <span className="label-text ">Name</span>
              </label>
              <input
                type="text"
                value={user.displayName}
                className="input input-bordered w-50 max-w-xs"
                disabled
                {...register("name")}
              />
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="text"
                value={user.email}
                className="input input-bordered w-full max-w-xs"
                disabled
                {...register("email")}
              />
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("phoneNumber", { required: true })}
              />
              <label className="label">
                <span className="label-text">Delivered Address</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("address", { required: true })}
              />
              <label className="label">
                <span className="label-text"> Ordered Quantity</span>
              </label>
              <input
                type="number"
                placeholder={items.minimumOrdered}
                className="input input-bordered w-80 mx-auto max-w-xs"
                {...register(
                  "orderedQuantity"
                  // {
                  //   validate: (value) =>
                  //     parseInt(value) > parseInt(items.minimumOrdered) &&
                  //     parseInt(value) < parseInt(items.quantity),
                  //   message: "Wrong Info",
                  // }
                )}
              />
              {errorse && <span> {errorse}</span>}
              <div className="card-actions justify-center py-5">
                <button
                  className="btn btn-xs sm:btn-sm"
                  disabled={disabled}
                  type="submit"
                >
                  Purchase
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchage;
