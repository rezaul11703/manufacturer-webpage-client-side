import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const AddProduct = (data) => {
    fetch("https://computer-part.herokuapp.com/addedItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => data);
    alert("Succesfully Added User");
  };

  return (
    <div>
      <form
        class="form-control w-full max-w-xs"
        onSubmit={handleSubmit(AddProduct)}
      >
        <label class="label">
          <span class="label-text">Product name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
          {...register("productName", { required: true })}
        />
        <label class="label">
          <span class="label-text">Product Image</span>
        </label>
        <input
          type="text"
          placeholder="Past the Link Here"
          class="input input-bordered w-full max-w-xs"
          {...register("productImage", { required: true })}
        />
        <label class="label">
          <span class="label-text">Short Description</span>
        </label>
        <textarea
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
          {...register("shrtDes", { required: true })}
        />
        <label class="label">
          <span class="label-text">Available Quantity</span>
        </label>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
          {...register("quantity", { required: true })}
        />
        <label class="label">
          <span class="label-text">Minimum Order</span>
        </label>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
          {...register("minimumOrdered", { required: true })}
        />
        <label class="label">
          <span class="label-text">Product Price</span>
        </label>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
          {...register("price", { required: true })}
        />

        <button className="btn btn-xs sm:btn-sm" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
