import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  fetch("https://computer-parts-solution-80c80.web.app/userReviews")
    .then((res) => res.json())
    .then((data) => setReviews(data));
  return (
    <div>
      <h2 className="text-4xl my-4"> Reviews from Our Happy Clients</h2>
      {reviews.map((r) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <h2 className="card-title mx-auto"> {r.reviewersName}</h2>
          <p>Rating :{r.reviewersRating}</p>
          <p> Comment :{r.reviewersFeelings} </p>
          <div className="card-actions"></div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
