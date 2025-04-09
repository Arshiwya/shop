import React from 'react'
import Button from "../../Components/Faq/Button";
import Box from "../../Components/Faq/Box";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function TrackOrder() {
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
          <h1 className="font-Dana text-xl mt-7 text-pink-700">
            {" "}
            پیگیری سفارش
          </h1>
          <div className="divide-y divide-solid">
            <Box
              question={"چطور می‌توانم سفارشم را پیگیری کنم؟"}
              answer={
                "از طریق بخش «خریدهای من» در حساب کاربری می‌توانید وضعیت سفارش خود را مشاهده فرمایید. همچنین می‌توانید با امور مشتریان تماس بگیرید و با ارائه شماره سفارش یا شماره همراه خود، از آخرین وضعیت سفارش‌تان مطلع شوید: 91200500-021"
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
                "در چه روزهایی امکان پیگیری سفارش وجود ندارد و خانومی تعطیل است؟"
              }
              answer={
                "در سال 1404، در روزهای ۱۳ فروردین (روز طبیعت)، ۱۴ خرداد (رحلت امام خمینی)، ۲۵ تیر (تاسوعا)، ۲۶ تیر (عاشورا)، ۴ شهریور (اربعین حسینی)، ۱۲ شهریور (رحلت حضرت رسول اکرم) و ۲۲ بهمن (سالگرد پیروزی انقلاب اسلامی)، شرکت خانومی تعطیل است و امکان پاسخگویی وجود ندارد. شما می‌توانید از طریق تلفن گویا مشکلات خود را ثبت و پس از روزهای تعطیل این موضوعات مورد پیگیری قرار خواهد گرفت."
              }
            />
          </div>
        </div>
  
        </div>
      </>
    );
  }
  