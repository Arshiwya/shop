import React from "react";
import Button from "../../Components/Faq/Button";
import Box from "../../Components/Faq/Box";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CommentsRules() {
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
            قوانین انتشار دیدگاه
          </h1>
          <div className="divide-y divide-solid">
            <Box
              question={" در مورد چه مواردی می‌توانم دیدگاه خود را ثبت کنم؟"}
              answer={
                "در مورد تمامی موارد مربوط به کیفیت محصول و تجربه استفاده از آن می‌توانید امتیاز و دیدگاه خود را ثبت کنید. دیدگاه ارسالی باید منطبق بر شئونات جامعه و با بیان رسمی و به دور از توهین باشد. دیدگاه شما پس از بررسی و تایید، در صفحه محصول مرتبط، نمایش داده خواهد شد. در نظر داشته باشید موارد مرتبط با موجودی، قیمت محصولات و خدمات پس از فروش را از طریق امور مشتریان فروشگاه اینترنتی خانومی پیگیری فرمایید."
              }
            />

            <Box
              question={"در چه حالت عکس ارسالی همراه دیدگاه تایید می‌شود؟"}
              answer={
                "عکس ارسالی باید مطابق با عرف و شئونات جامعه باشد. داشتن پوشش مناسب و نداشتن تتو از شروط اساسی تایید محتوای تصویری است. همچنین عکس ارسالی برای تایید و نمایش در سایت باید با کیفیت باشد. پس خواهشمندیم از تمیز بودن لنز دوربین و کیفیت آن اطمینان حاصل فرمایید."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
