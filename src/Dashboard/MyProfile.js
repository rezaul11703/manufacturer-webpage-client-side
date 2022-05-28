import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
  } = useForm();
  const handleSeedetails = () => {
    navigate("/dashboard/seeDetails");
  };
  return (
    <div className="form-control w-80  max-auto-xs mx-auto p-4 text-center">
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
      <div className="justify-center p-5 align-center">
        <Link to="/dashboard/userProfile" className="my-6">
          <button class="btn btn-xs sm:btn-sm">Update Profile</button>
        </Link>
        <button className="btn btn-xs sm:btn-sm m-4" onClick={handleSeedetails}>
          See Details
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
