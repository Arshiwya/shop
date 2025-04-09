import React from 'react'
import Button from "../../Components/Faq/Button";
import Box from "../../Components/Faq/Box";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function OrderEdit() {
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
          <div>
          <h1 className="font-Dana text-xl mt-7 text-pink-700">ویرایش سفارش</h1>
          <div className="divide-y divide-solid">
            <Box
              question={
                "آیا امکان حذف یا اضافه کردن کالا در سفارش ثبت شده وجود دارد؟"
              }
              answer={
                "امکان حذف یا اضافه کردن کالا در سفارش ثبت شده وجود ندارد. اما در صورتی که بسته شما در مرحله «ثبت سفارش» باشد، می‌توانید خرید خود را کنسل نمایید تا هزینه به اعتبار مجازی شما در سایت بازگردانده شود و سفارش جدیدی ثبت کنید. اگر برای ثبت سفارش گزینه پرداخت اقساطی با اسنپ‌پی را انتخاب کرده باشید، در صورتی کنسل شدن سفارش، هزینه پرداختی بین ۵ تا ۱۰ روز کاری به اعتبار شما در اسنپ‌پی باز‌ می‌گردد. توجه کنید در این صورت تخفیف‌ها و هدیه‌های موجود در فاکتور شما کنسل می‌شود و خریدی با شرایط جدید ثبت خواهید کرد. در صورتی که کالا به مرحله «در حال آماده‌سازی» رسیده باشد، امکان کنسل شدن سفارش وجود ندارد و لازم است تامل نمایید تا کالا توسط پیک یا پست به خانومی بازگشت داده شود و سپس هزینه بسته به حساب شما بازگردانده شود."
              }
            />
            <Box
              question={" تخفیف‌های شانس تا چه زمانی ادامه پیدا می‌کنند؟"}
              answer={
                "کالاهای شانس به مدت محدود در تخفیف بالا قرار می‌گیرند. این زمان ممکن است چند ساعت تا چند روز باشد، ‌مگر این که تعداد در نظر گرفته شده از کالاها با تخفیف ویژه به اتمام برسد. محصولات شانس هر روز در دو نوبت ۹ صبح و ۹ شب در سایت به روزرسانی می‌شوند. شما می‌توانید برای پیدا کردن محصول مورد نظر خود با بیشترین تخفیف، در این دو نوبت به سایت مراجعه و شانس خود را امتحان کنید."
              }
            />

            <Box
              question={
                " چطور می‌توانم آدرس ارسال سفارش را پس از خرید تغییر دهم؟"
              }
              answer={
                "در صورتی که سفارش شما در مرحله ثبت سفارش باشد، امکان تغییر آدرس به آدرس دیگری در همان شهر امکان‌پذیر است. برای اعمال این تغییر، شما می‌توانید با پشتیبانی امور مشتریان خانومی تماس بگیرید: 91200500-021. اما در صورتی که سفارش شما به مراحل بعدی رفته باشد، امکان اعمال هیچگونه تغییری وجود ندارد. در صورتی که دریافت سفارش در آدرس ثبت شده برای شما مقدور نیست، لطفا تامل فرمایید تا سفارش شما توسط پیک یا پست به خانومی بازگشت و هزینه سفارش به حساب شما بازگردانده شود."
              }
            />

            <Box
              question={"آیا امکان لغو سفارش وجود دارد؟"}
              answer={
                "بله، در صورتی که وضعیت فاکتور در حالت ثبت سفارش باشد امکان لغو سفارش وجود دارد."
              }
            />
          </div>
        </div>
          </div>
  
        </div>
      </>
    );
  }
  