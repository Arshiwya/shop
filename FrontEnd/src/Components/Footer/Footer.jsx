import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-zinc-800 mt-11">
      <section className=" container pt-14 w-full gap-6 lg:grid lg:grid-cols-2 lg:gap-32 lg:pb-7">
        <div className="hidden grid-cols-2 gap-6 lg:grid">
          <div className="flex flex-col gap-8">
            <span className="text-xl font-DanaDemiBold text-white">
              شرکت خانومی
            </span>
            <div
              className="flex flex-col gap-4.5 lg:gap-3 lg:pr-2 child:font-Dana child:!text-lg child-hover:text-pink-800 transition-all"
              data-sentry-component="ColumnsLinks"
              data-sentry-source-file="columns-links.tsx"
            >
              <a
                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                href="/contact-us"
              >
                تماس با ما
              </a>
              <a
                class="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                href="/about-us"
              >
                درباره ما
              </a>
              <a
                class="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                href="https://careers.khanoumi.com"
              >
                فرصت‌های شغلی
              </a>

              <Link
                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                to={'guarantee'}
              >
                 گارانتی
              </Link>


              <Link
                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                to={'track-order'}
              >
                 ویرایش سفارش
              </Link>

            </div>
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-xl font-DanaDemiBold text-white">
              خدمات مشتریان
            </span>
            <div
              className="flex flex-col gap-4.5 lg:gap-3 lg:pr-2 child:font-Dana child:!text-lg child-hover:text-pink-800 transition-all"
              data-sentry-component="ColumnsLinks"
              data-sentry-source-file="columns-links.tsx"
            >
              <Link
                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                to={"/faq"}
              >
                پرسش‌های متداول
              </Link>

              <Link
                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                to={"order"}
              >
                راهنمای خرید و پرداخت
              </Link>

              <Link
                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                to={'delivery'}
              >
                رویه‌های ارسال
              </Link>
              <Link
                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                to={'return'}
              >
                شرایط مرجوعی
              </Link>
              <Link
                className="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                to={'chance'}
              >
                خرید کالای شانس
              </Link>
              <a
                class="w-fit border-transparent text-xs font-medium text-white hover:border-brand-secondary hover:text-brand-secondary lg:border-b lg:pb-1 lg:text-sm"
                href="/profile/support"
              >
                ارتباط با پشتیبانی
              </a>
            </div>
          </div>
        </div>
        <div
          className="pt-16 flex w-full flex-col items-center gap-2"
          data-sentry-component="SupportDetails"
          data-sentry-source-file="support-details.tsx"
        >
          <span className="font-DanaDemiBold text-zinc-200">
            هفت روز هفته، از ساعت 8 الی 24 پاسخگوی سوالات شما هستیم.
          </span>
          <a
            className="font-DanaDemiBold text-gray-300"
            data-sentry-element="Link"
            data-sentry-source-file="support-details.tsx"
            href="tel:02191200500"
          >
            تلفن: 02191200500
          </a>
        </div>
      </section>
    </div>
  );
}
