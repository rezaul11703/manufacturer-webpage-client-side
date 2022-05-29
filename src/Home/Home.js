import React from "react";
import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import BusinessSumary from "./BusinessSumary";
import Items from "./Items";
import Opinion from "./Opinion";
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
      <Opinion></Opinion>
      <Footer></Footer>
    </div>
  );
};

export default Home;
