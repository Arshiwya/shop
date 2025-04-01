import React from "react";

export default function BottonHeader() {
  return (
    <>
      <div className=" w-full h-12 bg-stone-800 mt-7">
        <ul className="container flex items-center h-full gap-x-9 child:font-DanaDemiBold child:text-white transition-colors child-hover:text-pink-700 child:cursor-pointer">
          <li>آرایشی</li>
          <li>مراقبت پوست</li>
          <li>مراقبت و زیبایی مو</li>
          <li>بهداشت شخصی و حمام</li>
          <li>اسپری و ادکلن</li>
          <li>لوازم برقی</li>
          <li>مکمل غذایی و ورزشی</li>
        </ul>
      </div>
    </>
  );
}
