import React from "react";

const Banner = () => {
  return (
    <div className="carousel carousel-center rounded-box my-6">
      <div className="carousel-item">
        <img
          src="https://api.lorem.space/image/pizza?w=400&h=300&hash=8B7BCDC2"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://api.lorem.space/image/pizza?w=400&h=300&hash=225E6693"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://api.lorem.space/image/pizza?w=400&h=300&hash=9D9539E7"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://api.lorem.space/image/pizza?w=400&h=300&hash=BDC01094"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://api.lorem.space/image/pizza?w=400&h=300&hash=7F5AE56A"
          alt="Pizza"
        />
      </div>
    </div>
  );
};

export default Banner;
