import React from "react";
import Button from "../../Components/Faq/Button";
import Box from "../../Components/Faq/Box";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Guarantee() {
  const location = useLocation();
  const currentPath = location.pathname;

  const buttons = [
    { title: "همه سوالات", path: "/faq" },
    { title: "ضمانت خانومی", path: "/faq/guarantee" },
    { title: "ثبت سفارش", path: "/faq/order" },
    { title: "جعبه صورتی و شانس ", path: "/faq/chance" },
    { title: "ویرایش سفارش", path: "/faq/edit-order" },
    { title: "پیگیری سفارش", path: "/faq/track-order" },
    { title: "ارسال و تحویل کالا", path: "/faq/delivery" },
    { title: "بازگشت کالا", path: "/faq/return" },
    { title: "قوانین انتشار دیدگاه", path: "/faq/comments" },
    { title: "پرداخت و استرداد", path: "/faq/payment" },
  ];

  return (
    <>
      <div className="container pr-7 w-full">
        <h1 className="font-Dana text-right text-xl mt-9">پرسش های متداول</h1>
        <div className="group relative w-full flex items-center gap-x-3 overflow-x-auto mb-4 lg:mb-8 mt-7 child:font-Dana child:text-zinc-600 child-hover:border child-hover:border-pink-700 child:bg-neutral-50 child:p-2 child:rounded">
          {buttons.map((btn) => (
            <Button
              key={btn.path}
              title={btn.title}
              to={btn.path}
              isActive={currentPath === btn.path}
            />
          ))}
        </div>

        {/* Boxs */}
        <div>
          <span className="font-Dana text-xl text-pink-700">ضمانت خانومی</span>
          <div className="divide-y divide-solid">
            <Box
              title={"ضمانت خانومی"}
              question={"آیا خانومی اصالت کالاها را تضمین می‌کند؟"}
              answer={
                "خانومی نمایندگی رسمی برندهای آرایشی بهداشتی و مراقبتی را داراست و تمامی محصولات را بدون واسطه، مستقیماً از تولیدکننده اصلی یا وارد کننده رسمی برند دریافت نموده و عرضه می‌نماید. به این ترتیب، اصالت کالا، قیمت نمایندگی و تاریخ انقضای درست محصول با اطمینان توسط خانومی تضمین می‌شود."
              }
            />
            <Box
              question={"آیا خانومی تاریخ انقضای محصولات را تضمین می‌کند؟"}
              answer={
                "تمامی کالاهای ایرانی موجود در خانومی بیش از ۶ ماه و کالاهای خارجی موجود در خانومی، بیش از ۴ ماه تاریخ انقضا دارند. در صورتی که تاریخ انقضای کالایی کمتر از زمان مذکور باشد، در صفحه محصول درج می‌شود و به اطلاع شما می‌رسد تا با آگاهی کامل از شرایط خاص کالا، خرید خود را انجام دهید. "
              }
            />
            <Box
              question={"ضمانت تطابق کالا با سایت به چه معنا است؟"}
              answer={
                "برای هر یک از کالاها در سایت، اطلاعاتی از قبیل نام، عکس و ویژگی‌های محصول درج شده است و ما تضمین می‌کنیم کالایی که به دست شما می‌رسد از همه نظر، دقیقا همان کالایی است که در سایت دیده و انتخاب کرده‌اید؛ یعنی تضمین تطابق کالا با سایت. در غیر اینصورت، کالا از شما پس گرفته می‌شود و تمام هزینه‌ها اعم از هزینه کالا، هزینه ارسال و هزینه باز پس فرستادن آن، به شما بازگردانده می‌شود. لطفاً توجه فرمایید که اطلاعات موجود در صفحه محصول به معنی توصیه یا مشاوره نیست و مسئولیت انتخاب کالا براساس نیازتان، بر عهده شماست."
              }
            />
            <Box
              question={"اگر کالا سالم به دستم نرسید، چه اقدامی انجام دهم؟"}
              answer={
                "در صورتی که کالا در فرآیند ارسال خراب شده یا مشکلی داشته باشد، تا ۷ روز بعد از تحویل، بازپس گرفته شده و پس از بررسی و احراز مشکل، کالا مرجوع می‌شود. بنابراین لازم است حداکثر تا ۷ روز پس از دریافت بسته، با امور مشتریان خانومی تماس بگیرید و موضوع را اطلاع دهید. برای اطلاع از نحوه بازگشت کالا، گزینه «بازگشت کالا» را مطالعه نمایید."
              }
            />

            <Box
              question={"آیا کالاهای برقی دارای گارانتی می‌باشند؟"}
              answer={
                "کالاهای مک استایلر و والروس دارای کارت گارانتی شرکتی بوده و کارت گارانتی در جعبه محصول موجود می‌باشد."
              }
            />
          </div>
        </div>

      </div>
    </>
  );
}
