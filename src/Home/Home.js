import React from "react";
import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import BusinessSumary from "./BusinessSumary";
import Items from "./Items";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <h2> This is a Home page</h2>
      <Banner></Banner>
      <Items></Items>
      <BusinessSumary></BusinessSumary>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
