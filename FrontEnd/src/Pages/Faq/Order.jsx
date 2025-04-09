import React from "react";
import { useLocation } from "react-router-dom";
import Box from "../../Components/Faq/Box";
import Button from "../../Components/Faq/Button";

export default function Order() {
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
          <h1 className="font-Dana text-xl mt-7 text-pink-700">ثبت سفارش</h1>
          <div className="divide-y divide-solid">
            <Box
              question={"چطور در خانومی ثبت نام کنم؟"}
              answer={
                "از طریق نشان حساب کاربری در بالای صفحه، وارد بخش ورود و ثبت‌نام شوید..."
              }
            />
            <Box
              question={"چطور کالای مناسب را انتخاب کنم؟"}
              answer={
                "برای انتخاب کالای مورد نظر، می‌توانید از جستجو یا دسته‌بندی‌ها استفاده کنید..."
              }
            />
            <Box
              question={"چطور می‌توانم محصول را خریداری کنم؟"}
              answer={
                "در صفحه محصول، روی «افزودن به سبد خرید» کلیک کنید و در ادامه سفارش خود را ثبت کنید..."
              }
            />
            <Box
              question={"چطور از کد تخفیف استفاده کنم؟ "}
              answer={
                "در سبد خرید، کد تخفیف را وارد کرده و روی «بررسی کد» کلیک کنید..."
              }
            />
            <Box
              question={"محصول مورد نظرم موجود نیست، چه زمانی شارژ می‌شود؟"}
              answer={
                "زمان دقیق شارژ مشخص نیست، می‌توانید استوری‌های خانومی را دنبال کنید..."
              }
            />
            <Box
              question={"آیا درج کدپستی در زمان خرید الزامی می‌باشد؟"}
              answer={
                "بله، مخصوصاً اگر شهر شما خارج از تهران و البرز است که ارسال با پست انجام می‌شود..."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
