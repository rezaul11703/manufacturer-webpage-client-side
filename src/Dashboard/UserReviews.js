import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const UserReviews = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    const reviewers = {
      reviewersName: user.displayName,
      reviewersRating: data.ratings,
      reviewersFeelings: data.customerFeedBack,
    };
    fetch("https://computer-parts-solution-80c80.web.app/userReviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewers),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Review Added  Successfully");
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-control w-full mx-auto max-w-xs"
      >
        <label className="label ">
          <span className="label-text text-xl font-bold">
            Please Choose A Rating
          </span>
        </label>
        <select className="text-center" {...register("ratings")}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label className="label">
          <h2 className="label-text text-xl font-bold">
            Write Something About Your Feelings{" "}
          </h2>
        </label>
        <textarea
          placeholder="Write Something About Our Service"
          {...register("customerFeedBack")}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default UserReviews;
