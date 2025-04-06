import React from "react";
import Navbar from "../Components/Header/Navbar";
import SliderIndex from "../Components/Slider/SliderIndex";
import PopularProducts from "../Components/PopularProducts/PopularProducts";
import HomePageBox from "../Components/HomePageBox/HomePageBox";
import Banner from "../Components/Banner/Banner";
import NewProducts from "../Components/NewProducts/NewProducts";
import DescriptionHome from "../Components/DescriptionHome/DescriptionHome";

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="container">
        <SliderIndex />
        <PopularProducts />
        <HomePageBox />
        <Banner />
        <NewProducts />
        <DescriptionHome />
      </div>
    </>
  );
}
