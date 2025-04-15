import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProductBox from "../ProductBox/ProductBox";

export default function PopularProducts() {
  return (
    <>

    <SectionHeader title={"پر فروش ترین ها"} btnTitle={"مشاهده همه"} btnHref={'/best-seller'} />



      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5">
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
    </>
  );
}
