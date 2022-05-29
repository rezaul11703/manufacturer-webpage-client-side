import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const manageProfile = (data) => {
    const updateProfile = {
      name: user.displayName,
      email: user.email,
      address: data.address,
      education: data.education,
      number: data.phonenumber,
      link: data.profileLink,
    };
    fetch(`https://computer-parts-corner.herokuapp.com/userProfile`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProfile),
    })
      .then((res) => res.json())
      .then((data) => data);
    alert("Successfully Updated");
    navigate("/dashboard/seeDetails");
  };
  if (loading) {
    return <Loading></Loading>;
  }
  const handleSeedetails = () => {
    navigate("/dashboard/seeDetails");
  };

  return (
    <div>
      <form
        class="form-control w-full max-w-xs"
        onSubmit={handleSubmit(manageProfile)}
      >
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
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          value={user.email}
          className="input input-bordered w-full max-w-xs"
          disabled
          {...register("email")}
        />
        <label class="label">
          <span class="label-text">Address</span>
        </label>
        <input
          type="text"
          placeholder="city-district-division"
          class="input input-bordered w-full max-w-xs"
          {...register("address", { required: true })}
        />
        <label class="label">
          <span class="label-text">Education</span>
        </label>
        <input
          type="text"
          placeholder="Only the Last"
          class="input input-bordered w-full max-w-xs"
          {...register("education", { required: true })}
        />
        <label class="label">
          <span class="label-text">Phone number</span>
        </label>
        <input
          type="text"
          placeholder="Past the Link Here"
          class="input input-bordered w-full max-w-xs"
          {...register("phonenumber", { required: true })}
        />
        <label class="label">
          <span class="label-text">LinkedIn profile link</span>
        </label>
        <input
          type="text"
          placeholder="Past the Link Here"
          class="input input-bordered w-full max-w-xs"
          {...register("profileLink", { required: true })}
        />

        <button className="btn btn-xs sm:btn-sm" type="submit">
          Update
        </button>
        <button className="btn btn-xs sm:btn-sm" onClick={handleSeedetails}>
          See Details
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
