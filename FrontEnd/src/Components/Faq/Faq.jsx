import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Button from "./Button";
import Box from "./Box";

export default function Faq() {
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

        {/* Boxs */}
        <Box
          title={"ضمانت خانومی"}
          question={"آیا خانومی اصالت کالاها را تضمین می‌کند؟"}
          answer={
            "خانومی نمایندگی رسمی برندهای آرایشی بهداشتی و مراقبتی را داراست و تمامی محصولات را بدون واسطه، مستقیماً از تولیدکننده اصلی یا وارد کننده رسمی برند دریافت نموده و عرضه می‌نماید. به این ترتیب، اصالت کالا، قیمت نمایندگی و تاریخ انقضای درست محصول با اطمینان توسط خانومی تضمین می‌شود."
          }
        />
        <Box />
        <Box />
      </div>
      <Footer />
    </>
  );
}
