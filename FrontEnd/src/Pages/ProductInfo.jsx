import React, { useEffect, useState } from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { data, useParams } from "react-router-dom";

export default function ProductInfo() {
  const { productsName } = useParams();

  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/${productsName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPrice(data.price);
        setDescription(data.description);
        setCategories(data.categories);
        setName(data.name);
        setImages(data.images);
      });
  }, []);



  return (
    <>
      <Navbar />
      <div className="dark:bg-darker lg:p-10 ">
        <section className="mt-16">
          <div className="container">
            <div className="flex flex-col lg:flex-row lg:gap-9">
              {/* img */}
              <div className="group relative w-full lg:w-[316px]">
                <figure className="!h-64 !min-h-[256px] !w-64 !min-w-[256px] overflow-visible p-1 lg:!h-[316px] lg:!min-h-80 lg:!w-[316px] lg:!min-w-full">
                  <img
                    src={`http://127.0.0.1:8000/media/products/samples/${images}`}
                    className="h-full w-full rounded shadow"
                    width="308"
                    height="308"
                    data-clarity-loaded="1pet93b"
                  />
                </figure>
              </div>

              {/* des & discount */}
              <div className="flex grow flex-col lg:flex-row lg:gap-8">
                <div
                  class="flex w-full grow flex-col"
                  data-sentry-component="ProductDetails"
                  data-sentry-source-file="product-details.tsx"
                >
                  <div class="mb-3 flex h-fit flex-col gap-2 lg:mb-5">
                    <h1 class="text-body-16 font-Dana text-pink-700 dark:text-pink-500">
                      {name}
                    </h1>
                    {/* <span class="hidden text-body-14 font-Dana text-gray-500 dark:text-zinc-100 lg:flex">
                      Schon Creamy Body Wash 300ml
                    </span> */}
                  </div>
                  <div
                    class="flex w-full flex-col lg:gap-y-3"
                    data-sentry-component="Variants"
                    data-sentry-source-file="variants.tsx"
                  >
                    <div
                      class=""
                      data-sentry-component="VendorDetails"
                      data-sentry-source-file="vendor-details.tsx"
                    >
                      <div class="flex flex-col gap-3 text-body-16 text-text-darkGray">
                        <div class="flex items-center gap-1.5">
                          <span className="font-DanaDemiBold text-gray-700 dark:text-stone-400">
                            دسته بندی :
                          </span>
                          <span className="font-Dana dark:text-red-200">
                            {categories[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="flex w-full flex-col gap-1.5 lg:gap-3">
                      <div
                        class="text-body-14 text-text-darkGray lg:text-body-16 font-DanaDemiBold text-gray-700 dark:text-stone-400"
                        data-sentry-component="Weight"
                        data-sentry-source-file="weight.tsx"
                      >
                        توضیحات :
                        <span class="left-to-right inline-block font-Dana  dark:text-red-200">
                          {description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* discount */}
                <div className="hidden w-[316px] flex-col gap-2 lg:flex bg-stone-50 child:text-gray-400">
                  <div className="hidden min-h-[352px] w-[316px] flex-col justify-between gap-6 rounded border border-border-gray-light bg-surface-solid-50 px-3 py-5 shadow-sm lg:flex">
                    <div className="hidden flex-col gap-3 lg:flex">
                      <div class="relative flex items-center gap-x-2 font-Dana text-text-mediumGray lg:order-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="h-5 w-5 lg:h-6 lg:w-6"
                          data-sentry-element="svg"
                          data-sentry-component="Svg3DRotate"
                          data-sentry-source-file="3DRotate.tsx"
                        >
                          <path
                            fill="currentColor"
                            d="M12 13.08c-.13 0-.26-.03-.38-.1l-5.3-3.06a.74.74 0 0 1-.27-1.02.75.75 0 0 1 1.03-.27L12 11.48l4.89-2.83a.76.76 0 0 1 1.03.27c.21.36.08.82-.27 1.02l-5.26 3.04a.9.9 0 0 1-.39.1"
                            data-sentry-element="path"
                            data-sentry-source-file="3DRotate.tsx"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M12 18.52c-.41 0-.75-.34-.75-.75v-5.44c0-.41.34-.75.75-.75s.75.34.75.75v5.44c0 .41-.34.75-.75.75"
                            data-sentry-element="path"
                            data-sentry-source-file="3DRotate.tsx"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M12 18.75c-.58 0-1.15-.13-1.61-.38l-3.2-1.78c-.96-.53-1.7-1.8-1.7-2.9V10.3c0-1.09.75-2.37 1.7-2.9l3.2-1.78c.92-.51 2.3-.51 3.22 0l3.2 1.78c.96.53 1.7 1.8 1.7 2.9v3.39c0 1.09-.75 2.37-1.7 2.9l-3.2 1.78c-.46.25-1.03.38-1.61.38m0-12c-.33 0-.65.06-.88.19l-3.2 1.78c-.49.27-.93 1.03-.93 1.58v3.39c0 .56.44 1.31.93 1.58l3.2 1.78c.46.26 1.3.26 1.76 0l3.2-1.78c.49-.27.93-1.03.93-1.58V10.3c0-.56-.44-1.31-.93-1.58l-3.2-1.78c-.23-.13-.55-.19-.88-.19M15 22.75a.752.752 0 0 1-.64-1.14l1.05-1.75c.21-.35.67-.47 1.03-.26s.47.67.26 1.03l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.28-3.49 7.76-7.76 7.76M2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.752.752 0 0 1 .64 1.14L8.59 4.14c-.21.35-.67.47-1.03.26a.75.75 0 0 1-.26-1.03l.27-.45c-2.76.65-4.83 3.13-4.83 6.09.01.4-.33.74-.74.74"
                            data-sentry-element="path"
                            data-sentry-source-file="3DRotate.tsx"
                          ></path>
                        </svg>
                        <span class="text-caption-10 lg:text-body-14">
                          <span>
                            بازگشت کالا تا ۷ روز طبق{" "}
                            <a target="_blank" href="/faq?category=return">
                              شرایط مرجوعی
                            </a>
                          </span>
                        </span>
                      </div>
                      <div class="relative flex items-center gap-x-3 font-Dana text-text-mediumGray lg:order-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="h-5 w-5 lg:h-6 lg:w-6"
                          data-sentry-element="svg"
                          data-sentry-component="SvgTruckFast"
                          data-sentry-source-file="TruckFast.tsx"
                        >
                          <path
                            fill="currentColor"
                            d="M13 14.75h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.69 0 1.25-.56 1.25-1.25V2.75H6c-1.18 0-2.26.64-2.84 1.67-.2.36-.66.49-1.02.29a.753.753 0 0 1-.29-1.02C2.69 2.19 4.28 1.25 6 1.25h9c.41 0 .75.34.75.75v10c0 1.52-1.23 2.75-2.75 2.75"
                            data-sentry-element="path"
                            data-sentry-source-file="TruckFast.tsx"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M19 20.75h-1c-.41 0-.75-.34-.75-.75a1.25 1.25 0 0 0-2.5 0c0 .41-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75a1.25 1.25 0 0 0-2.5 0c0 .41-.34.75-.75.75H5c-2.07 0-3.75-1.68-3.75-3.75 0-.41.34-.75.75-.75s.75.34.75.75c0 1.24 1.01 2.25 2.25 2.25h.35c.33-1.15 1.39-2 2.65-2s2.32.85 2.65 2h2.71c.33-1.15 1.39-2 2.65-2s2.32.85 2.65 2H19c1.24 0 2.25-1.01 2.25-2.25v-2.25H19c-.96 0-1.75-.79-1.75-1.75v-3c0-.96.78-1.75 1.75-1.75l-1.07-1.87c-.22-.39-.64-.63-1.09-.63h-1.09V12c0 1.52-1.23 2.75-2.75 2.75h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.69 0 1.25-.56 1.25-1.25V5c0-.41.34-.75.75-.75h1.84c.99 0 1.9.53 2.39 1.39l1.71 2.99c.13.23.13.52 0 .75s-.38.37-.65.37H19c-.14 0-.25.11-.25.25v3c0 .14.11.25.25.25h3c.41 0 .75.34.75.75v3c0 2.07-1.68 3.75-3.75 3.75"
                            data-sentry-element="path"
                            data-sentry-source-file="TruckFast.tsx"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M8 22.75c-1.52 0-2.75-1.23-2.75-2.75S6.48 17.25 8 17.25s2.75 1.23 2.75 2.75S9.52 22.75 8 22.75m0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M16 22.75c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75 2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75m0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M22 14.75h-3c-.96 0-1.75-.79-1.75-1.75v-3c0-.96.79-1.75 1.75-1.75h1.29c.27 0 .52.14.65.38l1.71 3c.06.11.1.24.1.37v2c0 .41-.34.75-.75.75m-3-5c-.14 0-.25.11-.25.25v3c0 .14.11.25.25.25h2.25V12.2l-1.4-2.45zM8 8.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75M6 11.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75M4 14.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75"
                            data-sentry-element="path"
                            data-sentry-source-file="TruckFast.tsx"
                          ></path>
                        </svg>
                        <span class="text-caption-10 lg:text-body-14">
                          ارسال رایگان با خرید بیش از 1.5 میلیون تومان
                        </span>
                      </div>
                      <div class="relative flex gap-1.5 gap-x-2 font-Dana text-text-mediumGray lg:order-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="h-5 w-5 lg:h-6 lg:w-6"
                          data-sentry-element="svg"
                          data-sentry-component="SvgMedalStar"
                          data-sentry-source-file="MedalStar.tsx"
                        >
                          <path
                            fill="currentColor"
                            d="M12 16.75c-.4 0-.8-.03-1.18-.1-2.12-.31-4.05-1.53-5.27-3.34A7.77 7.77 0 0 1 4.25 9c0-4.27 3.48-7.75 7.75-7.75S19.75 4.73 19.75 9c0 1.54-.45 3.03-1.3 4.31a7.8 7.8 0 0 1-5.3 3.35c-.35.06-.75.09-1.15.09m0-14c-3.45 0-6.25 2.8-6.25 6.25 0 1.25.36 2.45 1.04 3.47a6.25 6.25 0 0 0 4.26 2.69c.64.11 1.27.11 1.86 0 1.75-.25 3.3-1.24 4.29-2.7a6.23 6.23 0 0 0 1.04-3.47c.01-3.44-2.79-6.24-6.24-6.24"
                            data-sentry-element="path"
                            data-sentry-source-file="MedalStar.tsx"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M6.47 22.59c-.14 0-.27-.02-.41-.05-.65-.15-1.15-.65-1.3-1.3l-.35-1.47a.26.26 0 0 0-.19-.19l-1.65-.39a1.74 1.74 0 0 1-1.28-1.22c-.17-.61 0-1.27.45-1.72l3.9-3.9c.16-.16.38-.24.6-.22s.42.14.55.33c.99 1.46 2.54 2.45 4.27 2.7.64.11 1.27.11 1.86 0 1.75-.25 3.3-1.24 4.29-2.7.12-.19.33-.31.55-.33s.44.06.6.22l3.9 3.9c.45.45.62 1.11.45 1.72a1.74 1.74 0 0 1-1.28 1.22l-1.65.39c-.09.02-.16.09-.19.19l-.35 1.47c-.15.65-.65 1.15-1.3 1.3-.65.16-1.32-.07-1.74-.58L12 17.13l-4.2 4.84c-.34.4-.82.62-1.33.62m-.38-8.56L2.8 17.32c-.09.09-.08.19-.06.25.01.05.06.15.18.17l1.65.39c.65.15 1.15.65 1.3 1.3l.35 1.47c.03.13.13.17.19.19.06.01.16.02.25-.08l3.83-4.41a7.77 7.77 0 0 1-4.4-2.57m7.42 2.56 3.83 4.4c.09.11.2.11.26.09.06-.01.15-.06.19-.19l.35-1.47c.15-.65.65-1.15 1.3-1.3l1.65-.39c.12-.03.17-.12.18-.17.02-.05.03-.16-.06-.25l-3.29-3.29a7.8 7.8 0 0 1-4.41 2.57"
                            data-sentry-element="path"
                            data-sentry-source-file="MedalStar.tsx"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M13.89 12.89c-.26 0-.57-.07-.94-.29l-.95-.57-.95.56c-.87.52-1.44.22-1.65.07s-.66-.6-.43-1.59l.24-1.03-.8-.74c-.44-.44-.6-.97-.45-1.45s.59-.82 1.21-.92l1.07-.18.51-1.12c.29-.57.74-.89 1.25-.89s.97.33 1.25.9l.59 1.18.99.12c.61.1 1.05.44 1.21.92.15.48-.01 1.01-.45 1.45l-.83.83.26.93c.23.99-.22 1.44-.43 1.59-.11.09-.35.23-.7.23m-4.28-4.5.69.69c.32.32.48.86.38 1.3l-.19.8.8-.47c.43-.25 1.01-.25 1.43 0l.8.47-.18-.8c-.1-.45.05-.98.37-1.3l.69-.69-.87-.15c-.42-.07-.84-.38-1.03-.76L12 6.5l-.5 1c-.18.37-.6.69-1.02.76z"
                            data-sentry-element="path"
                            data-sentry-source-file="MedalStar.tsx"
                          ></path>
                        </svg>
                        <span class="text-caption-10 lg:text-body-14">
                          ضمانت اصالت و سلامت کالا
                        </span>
                      </div>
                    </div>

                    {/* price */}
                    <div className=" flex items-center justify-center font-DanaDemiBold text-black">
                      <span>{price}</span>
                      <span>تومان</span>
                    </div>
                    <div
                      class="w-full items-center gap-2 lg:gap-0.5 hidden lg:flex lg:mt-2 "
                      data-sentry-component="SnappPayMessage"
                      data-sentry-source-file="snapp-pay-message.tsx"
                    >
                      <img
                        alt="snapp pay icon"
                        data-sentry-element="Image"
                        data-sentry-source-file="snapp-pay-message.tsx"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        class="shrink-0"
                        src="https://assets.khanoumi.com/4.84.1.0/_toad/images/icons/snapp-pay.svg"
                      />
                      <span class="text-blue-500 font-DanaDemiBold pr-3 text-sm">
                        4 قسط ماهانه 34,500 تومانی با اسنپ‌پی!
                      </span>
                    </div>

                    {/* Btn */}
                    <div className="flex items-center justify-center w-full h-12 text-white cursor-pointer rounded-md font-DanaDemiBold bg-pink-600">
                      <button className=""> افزودن به سبد خرید</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="-order-1 mt-3 flex gap-1 rounded border border-border-gray-light p-2 text-zinc-500 font-Dana lg:order-1 lg:mt-8 lg:gap-2 lg:py-3"
              data-sentry-component="BrandConsideration"
              data-sentry-source-file="brand-consideration.tsx"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="h-5 w-5 shrink-0 lg:h-6 lg:w-6"
                data-sentry-element="svg"
                data-sentry-source-file="InfoCircle.tsx"
                data-sentry-component="SvgInfoCircle"
              >
                <path
                  fill="currentColor"
                  d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
                  data-sentry-element="path"
                  data-sentry-source-file="InfoCircle.tsx"
                ></path>
                <path
                  fill="currentColor"
                  d="M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75M12 17c-.13 0-.26-.03-.38-.08q-.18-.075-.33-.21c-.09-.1-.16-.2-.21-.33A1 1 0 0 1 11 16c0-.13.03-.26.08-.38q.075-.18.21-.33.15-.135.33-.21a1 1 0 0 1 .76 0q.18.075.33.21.135.15.21.33c.05.12.08.25.08.38s-.03.26-.08.38c-.05.13-.12.23-.21.33q-.15.135-.33.21c-.12.05-.25.08-.38.08"
                  data-sentry-element="path"
                  data-sentry-source-file="InfoCircle.tsx"
                ></path>
              </svg>
              <span class="text-caption-12 lg:text-body-14">
                این کالا به صورت بی‌واسطه از کارخانه تولیدی در ایران تامین شده و
                اصالت آن توسط خانومی تایید می‌شود.
              </span>
            </div>
          </div>
          {/* responsive */}
          <div
            class="sticky bottom-0 right-0 z-20 w-full lg:hidden bg-stone-50"
            data-sentry-component="PDPCta"
            data-sentry-source-file="pdp-cta.tsx"
          >
            <div
              class="w-full bg-blue-50 font-Dana items-center gap-2 lg:gap-0.5 flex bg-alert-info-light px-2 py-1.5 lg:hidden"
              data-sentry-component="SnappPayMessage"
              data-sentry-source-file="snapp-pay-message.tsx"
            >
              <img
                alt="snapp pay icon"
                data-sentry-element="Image"
                data-sentry-source-file="snapp-pay-message.tsx"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                class="shrink-0"
                src="https://assets.khanoumi.com/4.84.1.0/_toad/images/icons/snapp-pay.svg"
              />
              <span class="text-caption-12 text-alert-info-dark lg:text-body-14">
                4 قسط ماهانه 34,500 تومانی با اسنپ‌پی! (بدون کارمزد)
              </span>
            </div>
            <div
              class="grid min-h-[76px] w-full items-center gap-4 border-t border-border-gray-light bg-surface-solid-50 px-4 lg:hidden [&amp;>*]:w-full grid-cols-2 [&amp;>*]:col-span-1"
              data-sentry-component="AppButton"
              data-sentry-source-file="app-button.tsx"
            >
              <div
                class="flex-col gap-2 lg:h-auto lg:w-full  bg-pink-500 flex justify-center items-center h-10 rounded-md font-Dana text-white"
                data-sentry-component="AddToCartButton"
                data-sentry-source-file="add-to-cart-button.tsx"
              >
                <button
                  class="relative flex items-center justify-center overflow-hidden rounded "
                  tapsell-tag-element-66216="true"
                >
                  <span class="block relative z-10">افزودن به سبد خرید</span>
                </button>
              </div>
              <div
                class="flex items-center justify-center"
                data-sentry-component="AppButtonPricing"
                data-sentry-source-file="app-button-pricing.tsx"
              >
                <div class="flex items-center gap-1">
                  <span class="text-body-14 font-medium text-text-black lg:text-body-16">
                    138,000
                  </span>
                  <span className="font-Dana">تومان</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
