import React, { useEffect } from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { useParams } from "react-router-dom";

export default function ProductInfo() {
  const { productsName } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/${productsName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Footer />
    </>
  );
}
