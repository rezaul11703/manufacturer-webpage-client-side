import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  fetch("");
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <h2 className="card-title"> Reviewer NAme</h2>
        <p>Rating :</p>
        <p> Comment : </p>
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default Reviews;
