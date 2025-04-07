import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Button from "./Button";

export default function Faq() {
  const [isShowDesc, setIsShowDesc] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container pr-7 w-4/5">
        <h1 className="font-Dana text-right text-xl mt-9">پرسش های متداول</h1>
        <div className="group relative w-full flex items-center gap-x-3 overflow-x-auto mb-4 lg:mb-8 mt-7 child:font-Dana child:text-zinc-600 child-hover:border child-hover:border-pink-700 child:bg-neutral-50 child:p-2">
          <Button title={"همه سوالات"} />
          <Button title={"ضمانت خانومی"} />
          <Button title={"ثبت سفارش"} />
          <Button title={"جعبه صورتی و شانس "} />
          <Button title={"ویرایش سفارش"} />
          <Button title={"پیگیری سفارش"} />
          <Button title={"ارسال و تحویل کالا"} />
          <Button title={"بازگشت کالا"} />
          <Button title={"قوانین انتشار دیدگاه"} />
          <Button title={"پرداخت و استرداد"} />
        </div>

        <div className="">
          <span className="font-DanaMeduim text-lg ">ضمانت خانومی</span>
          <div>
            <div className="flex justify-between mt-8">
              <h1 className="pb-7 font-Dana text-lg">
                آیا خانومی اصالت کالا را بررسی میکند؟
              </h1>
              <svg
                onClick={() => setIsShowDesc((prev) => !prev)}
                className={
                  isShowDesc
                    ? "w-4 h-4 rotate-180 transition-all ml-12"
                    : "w-4 h-4 transition-all ml-12"
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            {isShowDesc ? (
              <div>
                <span className="font-Dana w-7 leading-8 mb-8">
                  خانومی نمایندگی رسمی برندهای آرایشی بهداشتی و مراقبتی را
                  داراست و تمامی محصولات را بدون واسطه، مستقیماً از تولیدکننده
                  اصلی یا وارد کننده رسمی برند دریافت نموده و عرضه می‌نماید. به
                  این ترتیب، اصالت کالا، قیمت نمایندگی و تاریخ انقضای درست محصول
                  با اطمینان توسط خانومی تضمین می‌شود.
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
