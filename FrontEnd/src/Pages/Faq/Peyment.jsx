import React from 'react'
import Button from "../../Components/Faq/Button";
import Box from "../../Components/Faq/Box";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function Peyment() {
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
            پرداخت و استرداد
          </h1>
          <div className="divide-y divide-solid">
            <Box
              question={"چطور می‌توانم هزینه سفارشم را پرداخت کنم؟"}
              answer={
                "برای خرید از خانومی، پرداخت تنها به صورت اینترنتی از طریق سایت خانومی امکان‌پذیر است . پرداخت در محل یا به صورت نقدی امکان‌پذیر نمی‌باشد."
              }
            />

            <Box
              question={
                " آیا امکان پرداخت اقساطی از سایر سرویس‌ها میسر می‌باشد؟"
              }
              answer={"خیر فقط به صورت خرید اقساطی از اسنپ‌پی میسر می‌باشد."}
            />

            <Box
              question={"اقساط خود را در اسنپ‌پی به چه صورت پرداخت نمایم؟"}
              answer={
                "وارد برنامه اسنپ شده، از قسمت سرویس اعتباری وارد حساب کاربری خود شوید و از این قسمت می‌توانید اقساط خود را مشاهده و پرداخت کنید."
              }
            />

            <Box
              question={
                "مبلغ سفارش از حسابم کسر شده اما سفارشم نهایی نشده است."
              }
              answer={
                "اگر طی ۷۲ ساعت آینده مبلغ به حساب شما بازگشت داده نشد، ابتدا با بانک مبدا بررسی کرده بعد از حصول اطمینان از عدم واریزی با پشتیبانی خانومی در ارتباط باشید."
              }
            />

            <Box
              question={"مبلغ سفارش لغو شده چطور به حساب عودت داده می‌شود؟"}
              answer={
                "حالت اول: در صورتی که سفارش از طریق درگاه بانکی پرداخت شده باشد ، مبلغ به اعتبار مجازی مشتری افزوده می‌شود. حالت دوم: در صورتی که سفارش از طریق اسنپ‌پی پرداخت شده باشد ، مبلغ طی 3 الی 5 روز کاری به اعتبار اسنپ‌پی مشتری بازگشت داده میشود."
              }
            />
          </div>
        </div>
  
        </div>
      </>
    );
  }
