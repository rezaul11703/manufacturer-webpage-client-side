import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  fetch("http://localhost:5000/userReviews")
    .then((res) => res.json())
    .then((data) => setReviews(data));
  return (
    <div>
      {reviews.map((r) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <h2 className="card-title"> Reviewer NAme :{r.reviewersName}</h2>
          <p>Rating :{r.reviewersRating}</p>
          <p> Comment :{r.reviewersFeelings} </p>
          <div className="card-actions"></div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
