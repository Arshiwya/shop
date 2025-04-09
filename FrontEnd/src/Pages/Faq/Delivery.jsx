import React from "react";
import { useLocation } from "react-router-dom";
import Box from "../../Components/Faq/Box";
import Button from "../../Components/Faq/Button";

export default function Delivery() {
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

        
        {/* دکمه‌ها */}
        <div className="group relative w-full flex items-center gap-x-3 overflow-x-auto mb-4 lg:mb-8 mt-7 child:font-Dana child:bg-neutral-50 child:p-2 child-hover:border child-hover:border-pink-700">
          {buttons.map((btn) => (
            <Button
              key={btn.path}
              title={btn.title}
              to={btn.path}
              isActive={currentPath === btn.path}
            />
          ))}
        </div>

        {/* سوالات و پاسخ‌ها */}
        <div>
          <h1 className="font-Dana text-xl mt-7 text-pink-700"> ارسال و تحویل کالا</h1>
          <div className="divide-y divide-solid">
            <Box
              question={"هزینه بسته‌بندی و ارسال به چه صورت می‌باشد؟"}
              answer={
                "هزینه بسته‌بندی و ارسال سفارش برای شهر تهران و البرز که توسط سفیران خانومی ارسال می‌گردد مبلغ 49 هزار تومان به صورت ثابت می‌باشد و برای سایر استان‌ها که ارسال به صورت پستی انجام می‌گردد، هزینه ارسال پست (عادی) 47 هزار تومان و (پیشتاز) 49 هزار تومان به صورت ثابت می‌باشد. "
              }
            />
            <Box
              question={"هزینه ارسال کالاهای با تگ «ارسال رایگان» چقدر است؟"}
              answer={
                "اگر محصولی در سبد خود دارید که مزیت «ارسال رایگان» دارد، هزینه‌ای بابت ارسال پرداخت نخواهید کرد و ارسال برای شما به طور کامل رایگان خواهد بود."
              }
            />

            <Box
              question={"نحوه تحویل کالا در محل به چه صورت است؟"}
              answer={
                "سفیر خانومی و پست موظف هستند درب اصلی ساختمان منتهی به خیابان پس از برقراری ارتباط با مشتری، کالا را تحویل دهند. در نظر داشته باشید امکان حضور درب واحد برای سفیر مقدور نیست."
              }
            />

            <Box
              question={"چطور از زمانبندی ارسال سفارش مطلع شوم"}
              answer={
                "در هنگام ثبت‌ سفارش و بعد از مشخص کردن آدرس و انتخاب روش ارسال، می‌توانید زمانبندی‌های موجود برای ارسال را مشاهده کنید. پس از ثبت سفارش نیز می‌توانید زمانبندی دریافت کالا را از طریق پیامک ارسالی یا از طریق بخش «سفارش‌های من» در حساب کاربری خود مشاهده کنید."
              }
            />

            <Box
              question={
                "کد رهگیری مرسوله پستی سفارش خود را در کدام قسمت از سایت می‌توان مشاهده کرد؟"
              }
              answer={
                "با انتخاب روش پستی و تحویل کالا به پست، کد رهگیری پستی از طریق پیامک برای شما ارسال می‌گردد، همچنین می‌توانید در سایت خانومی وارد پروفایل خود شوید، بر روی این لینک کلیک نمایید سپس در قسمت ارسال شده بر روی گزینه جزئیات سفارش مورد نظر کلیک کرده و کد رهگیری را مشاهده نمایید."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
