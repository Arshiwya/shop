import React from "react";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function FaqIndex() {
  return (
    <>
      <div className="dark:bg-darker child:dark:text-white">
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
