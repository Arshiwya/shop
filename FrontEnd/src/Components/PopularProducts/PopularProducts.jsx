import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProductBox from "../ProductBox/ProductBox";

export default function PopularProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/populars")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <SectionHeader
        title={"پر فروش ترین ها"}
        btnTitle={"مشاهده همه"}
        btnHref={"/best-seller"}
      />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5">
        {products.splice(0, 5).map((product) => (
          <ProductBox {...product} />
        ))}
      </div>
    </>
  );
}
