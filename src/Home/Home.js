import React from "react";
import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import BusinessSumary from "./BusinessSumary";
import Items from "./Items";
import Reviews from "./Reviews";
import SiteInfo from "./SiteInfo";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <SiteInfo></SiteInfo>
      <Items></Items>
      <BusinessSumary></BusinessSumary>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
