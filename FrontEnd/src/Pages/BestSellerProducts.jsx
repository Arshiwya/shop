import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import ProductBox from "../Components/ProductBox/ProductBox";

export default function BestSellerProducts() {
  const [bestProducts, setBestProducts] = useState([]);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/populars")
      .then((res) => res.json())
      .then((data) => {
        setBestProducts(data);
      });
  }, []);

  // کلیک بیرون از منو رو تشخیص بده
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsShowFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <Navbar />
      <div className="container mb-11 mt-9">
        <div className="flex items-center justify-between lg:mb-4 lg:grow">
          <div className="mb-3 flex items-center gap-2 lg:mb-0 lg:gap-3">
            <h1 className="text-body-14 font-DanaDemiBold text-pink-600 text-xl">
              پرفروش های خانومی
            </h1>
            <span className="text-body-14 text-text-darkGray lg:text-body-16">
              {/* (293 کالا) */}
            </span>
          </div>
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsShowFilter((prev) => !prev)}
              className="relative flex items-center justify-center overflow-hidden rounded text-body-14 focus-visible:outline-none px-4 py-1.5 font-medium pr-3 text-primary-main hover:text-primary-shade-700"
            >
              <span className="flex items-center relative z-10 gap-2 font-DanaMeduim">
                {/* آیکون */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="h-5 w-5 lg:h-6 lg:w-6"
                  data-sentry-element="svg"
                  data-sentry-component="SvgSort"
                  data-sentry-source-file="Sort.tsx"
                >
                  <path
                    fill="currentColor"
                    d="M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75M14 17.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
                    data-sentry-element="path"
                    data-sentry-source-file="Sort.tsx"
                  ></path>
                </svg>
                مرتب سازی
              </span>
            </button>

            {isShowFilter && (
              <div className="absolute left-0 z-20 mt-0 flex w-full min-w-[164px] cursor-pointer flex-col overflow-auto rounded border border-pink-100 bg-white p-1 leading-9 shadow-sm focus:outline-none child:font-Dana child-hover:text-pink-500">
                <div className="px-2 py-1.5 text-body-16 text-neutral-800 hover:bg-gray-100">
                  پربازدیدترین
                </div>
                <div className="px-2 py-1.5 text-body-16 text-neutral-800 hover:bg-gray-100">
                  ارزان‌ترین
                </div>
                <div className="px-2 py-1.5 text-body-16 text-neutral-800 hover:bg-gray-100">
                  گران‌ترین
                </div>
                <div className="px-2 py-1.5 text-body-16 text-neutral-800 hover:bg-gray-100">
                  جدیدترین
                </div>
              </div>
            )}
          </div>
        </div>

        {/* products */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  md:gap-5 ">
          {bestProducts.map((product) => (
            <ProductBox {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
