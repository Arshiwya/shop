import React from "react";
import Navbar from "../Components/Header/Navbar";
import SliderIndex from "../Components/Slider/SliderIndex";
import PopularProducts from "../Components/PopularProducts/PopularProducts";
import HomePageBox from "../Components/HomePageBox/HomePageBox";
import Banner from "../Components/Banner/Banner";
import NewProducts from "../Components/NewProducts/NewProducts";
import DescriptionHome from "../Components/DescriptionHome/DescriptionHome";
import Footer from "../Components/Footer/Footer";

export default function Index() {
  return (
    <>
      <div className="dark:bg-darker">
        <Navbar />
        <div className="container ">
          <SliderIndex />
          <PopularProducts />
          <HomePageBox />
          <Banner />
          <NewProducts />
          <DescriptionHome />
        </div>

        <Footer />
      </div>
    </>
  );
}
