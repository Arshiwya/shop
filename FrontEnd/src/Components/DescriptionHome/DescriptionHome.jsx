// import React from 'react'

// export default function DescriptionHome() {
//   return (
//     <div className='container'>

//     </div>
//   )
// }

import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function DescriptionHome() {
  const [isShowDescrip, setIsShowDescrip] = useState(false);

  return (
    <>
      <div className="container mt-56 sm:mt-40">
        <section className="mt-20 relative">
          <div className="overflow-hidden max-h-64">
            <h2>
              <strong>
                <h3 className="text-lg font-Dana mb-2 text-gray-500">
                  خرید لوازم آرایشی و بهداشتی از فروشگاه اینترنتی خانومی
                </h3>
              </strong>
            </h2>
            <span className="leading-8 text-gray-600 font-Dana">
              فروشگاه لوازم آرایشی و بهداشتی خانومی با عرضه بهترین برندهای لوازم
              آرایش، عطر و ادکلن اصل و تمامی لوازم بهداشتی و مراقبتی پوست و مو،
              امکان خرید اینترنتی امن را برای شما فراهم کرده است. شما در خانومی
              به آسانی به مجموعه کاملی از برندهای آرایشی و بهداشتی دسترسی خواهید
              داشت؛ چون فروشگاه اینترنتی خانومی، نمایندگی رسمی تمامی برندهای
              آرایشی و بهداشتی است.
            </span>
          </div>

          <div
            className={
              isShowDescrip
                ? "hidden"
                : "absolute right-0 top-0 h-full w-full bg-gradient-to-t from-white"
            }
          ></div>
        </section>

        <div className={isShowDescrip ? "block" : "hidden"}>
          <div className="font-Dana leading-9">
            <strong>
              <h1 className="mt-5 mb-2 text-md font-Dana text-gray-500">
                خرید آنلاین لوازم آرایش از وب‌سایت خانومی
              </h1>
            </strong>
            <span className="leading-6 text-gray-600 ">
              فروشگاه لوازم آرایشی بهداشتی خانومی، فعالیت خود را سال 1392 آغاز
              کرده است. خانومی با فروش اینترنتی مجموعه کاملی از بهترین‌های لوازم
              آرایشی و بهداشتی، شامل بهترین برندهای لوازم آرایشی مثل کالیستا،
              نوت، مای، اسنس، پریم و تمامی برندهای خوب لوازم آرایشی و بهداشتی،
              بهترین مارک‌های کرم پودر و پنکیک، کانسیلر و رژگونه، انواع ریمل و
              خط چشم، بهترین مارک‌های رژ لب و تینت لب، همچنین بهترین مارک‌های
              محصولات مراقبت پوست شامل انواع کرم مرطوب‌کننده و آبرسان، کرم ضد
              آفتاب، ضد لک و روشن‌کننده، ماسک صورت و انوع تونر صورت، ضد چروک،
              لیفت و سفت‌کننده، شوینده‌های صورت و بدن و انواع ماسک، محصولات
              مراقبت دور چشم شامل بهترین مارک‌های کرم ضد پف و تیرگی دور چشم، ضد
              چروک و مرطوب‌کننده، محصولات مراقبت مو شامل مجموعه کاملی از بهترین
              برندهای شامپو، نرم‌کننده و حالت‌دهنده، ماسک، اسپری، سرم و تونیک
              مو، و همچنین مجموعه بی‌نظیری از عطر زنانه و عطر مردانه ، کمک
              می‌کند تا شما به آسانی کالاهای مورد نظر خود را از برندهای خوب
              لوازم آرایشی و بهداشتی شامل لورال، گارنیر، بورژوا، آرت دکو، بیو،
              بیودرما، نوروا، ویشی، لیراک و ده‌ها برند مطرح دنیا تهیه کنید و با
              اطمینان از اصالت کالا و بهترین قیمت، از خرید اینترنتی خود لذت
              ببرید.
            </span>
          </div>
        </div>

        <div className="text-left mt-2 text-pink-800">
          {isShowDescrip ? (
            <Button
              className="font-DanaDemiBold"
              variant="outline-success"
              onClick={() => setIsShowDescrip((prev) => !prev)}
            >
              بستن
            </Button>
          ) : (
            <Button
              className="font-DanaDemiBold"
              variant="outline-success"
              onClick={() => setIsShowDescrip((prev) => !prev)}
            >
              مشاهده بیشتر
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
