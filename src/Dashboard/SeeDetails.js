import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const SeeDetails = () => {
  const [users, setUser] = useState([]);
  const [loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  fetch(`https://computer-part.herokuapp.com/userProfile`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => setUser(data));

  return (
    <div>
      <div>
        {users.map((user) => (
          <form class="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={user.name}
              className="input input-bordered w-full max-w-xs"
              disabled
            />

            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              value={user.email}
              className="input input-bordered w-full max-w-xs"
              disabled
            />

            <label className="label">
              <span className="label-text">Education</span>
            </label>
            <input
              type="text"
              value={user.education}
              className="input input-bordered w-full max-w-xs"
              disabled
            />

            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              value={user.address}
              className="input input-bordered w-full max-w-xs"
              disabled
            />
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              value={user.number}
              className="input input-bordered w-full max-w-xs"
              disabled
            />

            <label className="label">
              <span className="label-text">Link</span>
            </label>
            <input
              type="text"
              value={user.link}
              className="input input-bordered w-full max-w-xs"
              disabled
            />

            <button className="btn btn-xs sm:btn-sm" type="submit">
              Update
            </button>
          </form>
        ))}
      </div>
    </div>
  );
};

export default SeeDetails;
