import React from "react";

const Banner = () => {
  return (
    <div className="carousel carousel-center rounded-box">
      <div className="carousel-item">
        <img
          src="https://i.ibb.co/vqJSPNZ/stock-vector-computer-parts-isometric-set-inside-the-computer-case-hardware-elements-hard-disk-drive.jpg"
          className="w-80"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://i.ibb.co/64gYqYk/download.jpg"
          alt="Pizza"
          className="w-80"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://i.ibb.co/09jRKRZ/download-1.jpg"
          alt="Pizza"
          className="w-80"
        />
      </div>
    </div>
  );
};

export default Banner;
