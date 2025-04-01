import React from "react";

export default function BottonHeader() {
  return (
    <>
      <div className="hidden h-11 w-full bg-neutral-800 transition-transform duration-300 lg:flex">
        <div className="container relative flex items-center justify-start">
          <ul className="hidden h-full items-stretch text-sm font-medium text-white lg:flex [&>li]:px-3">
            <li class="flex cursor-pointer items-center transition-all duration-100 ease-in-out hover:text-brand-secondary group">
              <a href="/categories/makeup">آرایشی</a>
              <div class="absolute right-1/2 top-11 z-10 hidden w-full translate-x-1/2 transform cursor-auto justify-start gap-4 overflow-auto rounded-b-md border-b border-t border-neutral-200 bg-white shadow-low group-hover:flex lg:max-h-fit">
                <div
                  class="hover:[&amp;>*]block group/submenu layout-container flex flex-col gap-4 py-6"
                  data-sentry-component="ProductsMenu"
                  data-sentry-source-file="products-menu.tsx"
                >
                  <button class="relative flex items-center justify-center overflow-hidden rounded text-body-14 focus-visible:outline-none px-4 py-2 font-bold pl-3 text-primary-main hover:text-primary-shade-700 disabled:text-primary-shade-200 !w-fit cursor-default">
                    <span class="flex items-center relative z-10 gap-2 flex-row-reverse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="h-3.5 w-3.5"
                        stroke-width="1"
                        data-sentry-element="svg"
                        data-sentry-component="SvgArrowLeft"
                        data-sentry-source-file="ArrowLeft.tsx"
                      >
                        <path
                          fill="currentColor"
                          d="M15 20.67c-.19 0-.38-.07-.53-.22l-6.52-6.52a2.74 2.74 0 0 1 0-3.86l6.52-6.52c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.52c-.48.48-.48 1.26 0 1.74l6.52 6.52c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22"
                          data-sentry-element="path"
                          data-sentry-source-file="ArrowLeft.tsx"
                        ></path>
                      </svg>
                      <span class="cursor-pointer">
                        همه محصولات{" "}
                        <a
                          className="text-red-500"
                          data-sentry-element="Link"
                          data-sentry-source-file="products-menu.tsx"
                          href="/categories/makeup"
                        >
                          آرایشی
                        </a>
                      </span>
                    </span>
                  </button>
                  <div class="flex gap-4">
                    <div class="flex min-w-[176px] border-spacing-px flex-col gap-6 border-l border-neutral-200 pl-4 last:border-none">
                      <div class="flex flex-col gap-2">
                        <a
                          class="border-r-2 border-brand-secondary bg-white pr-2 text-sm font-bold leading-9 text-text-black lg:leading-6"
                          data-sentry-element="Link"
                          data-sentry-component="Title"
                          data-sentry-source-file="title.tsx"
                          href="/categories/makeup/face-makeup"
                        >
                          آرایش صورت
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/face-makeup/bb-cream-cc-cream"
                        >
                          کرم BB، کرم CC و DD
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/face-makeup/foundation-makeup"
                        >
                          کرم پودر
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/face-makeup/concealer"
                        >
                          کانسیلر
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/face-makeup/compact-powder"
                        >
                          پنکک
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/face-makeup/blush"
                        >
                          رژ گونه
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/face-makeup/makeup-primer"
                        >
                          پرایمر صورت
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/face-makeup/makeup-fixture"
                        >
                          اسپری و پودر فیکس
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/face-makeup/contour-and-highlight"
                        >
                          کانتور و هایلایتر
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/face-makeup/facial-cushion-and-mousse"
                        >
                          موس و کوشن
                        </a>
                      </div>
                    </div>
                    <div class="flex min-w-[176px] border-spacing-px flex-col gap-6 border-l border-neutral-200 pl-4 last:border-none">
                      <div class="flex flex-col gap-2">
                        <a
                          class="border-r-2 border-brand-secondary bg-white pr-2 text-sm font-bold leading-9 text-text-black lg:leading-6"
                          data-sentry-element="Link"
                          data-sentry-component="Title"
                          data-sentry-source-file="title.tsx"
                          href="/categories/makeup/eye-makeup"
                        >
                          آرایش چشم و ابرو
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/eye-makeup/mascara"
                        >
                          ریمل
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/eye-makeup/eyeliner"
                        >
                          مداد و خط چشم
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/eye-makeup/eyeshadow"
                        >
                          سایه چشم
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/eye-makeup/eyebrow-gel-and-soap"
                        >
                          ژل و صابون ابرو
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/eye-makeup/eyebrow-shadow"
                        >
                          سایه ابرو
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/eye-makeup/eyebrow-liner"
                        >
                          مداد و ماژیک ابرو
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/eye-makeup/eyebrow-mascara"
                        >
                          ریمل ابرو
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/eye-makeup/eyebrow-color"
                        >
                          رنگ ابرو
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/eye-makeup/false-eyelashes"
                        >
                          مژه مصنوعی و چسب مژه
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/eye-makeup/contact-lens"
                        >
                          لنز
                        </a>
                      </div>
                    </div>
                    <div class="flex min-w-[176px] border-spacing-px flex-col gap-6 border-l border-neutral-200 pl-4 last:border-none">
                      <div class="flex flex-col gap-2">
                        <a
                          class="border-r-2 border-brand-secondary bg-white pr-2 text-sm font-bold leading-9 text-text-black lg:leading-6"
                          data-sentry-element="Link"
                          data-sentry-component="Title"
                          data-sentry-source-file="title.tsx"
                          href="/categories/makeup/lips-makeup"
                        >
                          آرایش لب
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/lips-makeup/lipstick"
                        >
                          رژ لب
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/lips-makeup/liquid-lipstick"
                        >
                          رژ لب مایع و برق لب
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/lips-makeup/lip-liner"
                        >
                          مداد و خط لب
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/lips-makeup/lip-tint"
                        >
                          تینت لب
                        </a>
                      </div>
                      <div class="flex flex-col gap-2">
                        <a
                          class="border-r-2 border-brand-secondary bg-white pr-2 text-sm font-bold leading-9 text-text-black lg:leading-6"
                          data-sentry-element="Link"
                          data-sentry-component="Title"
                          data-sentry-source-file="title.tsx"
                          href="/categories/makeup/nail-makeup"
                        >
                          آرایش ناخن
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/nail-makeup/nail-polish"
                        >
                          لاک ناخن
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/nail-makeup/nail-polish-remover"
                        >
                          لاک پاک کن
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/nail-makeup/nail-tools"
                        >
                          ابزار مانیکور و پدیکور
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/nail-makeup/nail-accessories"
                        >
                          ناخن مصنوعی
                        </a>
                      </div>
                    </div>
                    <div class="flex min-w-[176px] border-spacing-px flex-col gap-6 border-l border-neutral-200 pl-4 last:border-none">
                      <div class="flex flex-col gap-2">
                        <a
                          class="border-r-2 border-brand-secondary bg-white pr-2 text-sm font-bold leading-9 text-text-black lg:leading-6"
                          data-sentry-element="Link"
                          data-sentry-component="Title"
                          data-sentry-source-file="title.tsx"
                          href="/categories/makeup/makeup-accessories"
                        >
                          ابزار آرایشی
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/makeup-accessories/cosmetic-brush-cosmetic-puff"
                        >
                          براش و قلمو آرایشی
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/makeup-accessories/beautyblender"
                        >
                          اسفنج و بیوتی بلندر
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/makeup-accessories/tweezers-scissor"
                        >
                          موچین و قیچی ابرو
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/makeup-accessories/eyebrow-razor"
                        >
                          تیغ ابرو
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/makeup-accessories/eyelash-curler"
                        >
                          فرمژه و برس ابرو
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/makeup-accessories/sharpener"
                        >
                          تراش
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/makeup-accessories/makeup-bag"
                        >
                          استند و کیف لوازم آرایشی
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/makeup-accessories/pocket-mirror"
                        >
                          آینه آرایشی
                        </a>
                      </div>
                    </div>
                    <div class="flex min-w-[176px] border-spacing-px flex-col gap-6 border-l border-neutral-200 pl-4 last:border-none">
                      <div class="flex flex-col gap-2">
                        <a
                          class="border-r-2 border-brand-secondary bg-white pr-2 text-sm font-bold leading-9 text-text-black lg:leading-6"
                          data-sentry-element="Link"
                          data-sentry-component="Title"
                          data-sentry-source-file="title.tsx"
                          href="/categories/makeup/body-makeup"
                        >
                          آرایش بدن
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/makeup/body-makeup/body-shimmer-highlight"
                        >
                          شیمر و هایلایت بدن
                        </a>
                        <a
                          class="text-sm font-normal leading-6 text-text-darkGray"
                          href="/categories/body-makeup/self-tanner-bronzer"
                        >
                          اتوبرنز و محصولات برنزه کردن
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
