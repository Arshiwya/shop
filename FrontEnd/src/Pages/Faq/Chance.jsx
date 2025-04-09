import React from "react";
import { useLocation } from "react-router-dom";
import Box from "../../Components/Faq/Box";
import Button from "../../Components/Faq/Button";

export default function Chance() {
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
          <h1 className="font-Dana text-xl mt-7 text-pink-700">
            جعبه صورتی و شانس{" "}
          </h1>
          <div className="divide-y divide-solid">
            <Box
              question={"شانس در جعبه صورتی خانومی چیست؟"}
              answer={
                "شانس خانومی، فرصت خرید بی‌نظیری است که فروشگاه اینترنتی خانومی در اختیار خریداران و به خصوص مشتریان وفادار خود قرار می‌دهد. در شانس خانومی،‌ همان‌طور که از اسمش پیداست، شانس مشتریان سهم مهمی دارد. به این صورت که تعداد محدودی از یک کالا، برای مدت زمان محدودی، در فروش ویژه قرار می‌گیرد و پس از پایان زمان یا تعداد در نظر گرفته شده، تخفیف شانس حذف می‌شود و کالا به قیمت قبلی باز می‌گردد، باید در نظر داشت که، فقط یک عدد از هر محصول شانس برای هر مشتری در 24 ساعت (در صورت موجود بودن) امکان خرید وجود دارد."
              }
            />
            <Box
              question={" تخفیف‌های شانس تا چه زمانی ادامه پیدا می‌کنند؟"}
              answer={
                "کالاهای شانس به مدت محدود در تخفیف بالا قرار می‌گیرند. این زمان ممکن است چند ساعت تا چند روز باشد، ‌مگر این که تعداد در نظر گرفته شده از کالاها با تخفیف ویژه به اتمام برسد. محصولات شانس هر روز در دو نوبت ۹ صبح و ۹ شب در سایت به روزرسانی می‌شوند. شما می‌توانید برای پیدا کردن محصول مورد نظر خود با بیشترین تخفیف، در این دو نوبت به سایت مراجعه و شانس خود را امتحان کنید."
              }
            />

            <Box
              question={"شرایط خرید کالاهای شانس چیست؟ "}
              answer={
                "کالاهای شانس به مدت محدود در تخفیف بالا قرار می‌گیرند. جهت امکان استفاده از این تخفیفات برای همه مشتریان، در هر ۲۴ ساعت فقط یک بار می‌توانید کالایی با برچسب شانس را خریداری کنید."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
