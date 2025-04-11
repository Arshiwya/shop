import React from "react";

export default function ProductBox() {
  return (
    <>
      <div className="container mt-7 [&>*:last-child]:pl-3 lg:[&>*:last-child]:pl-1">
        <div className="min-w-fit max-w-fit px-0">
          <div className="flex h-full flex-col gap-2 rounded border border-border-gray-light dark:border dark:border-gray-500 bg-surface-solid-0 p-2 shadow-sm min-h-[248px] !w-[164px] lg:min-h-[280px] lg:!w-[224px]">
            <div class="flex mx-auto grow flex-col gap-1">
              <picture
                class=" w-30 lg:w-35 h-30 lg:h-35 mx-auto"
                data-sentry-element="picture"
                data-sentry-component="CardImage"
                data-sentry-source-file="card-image.tsx"
              >
                <source
                  media="(max-width: 768px)"
                  srcset="https://storage.khanoumi.com/ProductImages/Prime-Spf-50-Fusion-Water-Sun-Protector-40-ml-Khanoumi-20241289462089.jpg?w=175"
                />
                <source
                  media="(min-width: 769px)"
                  srcset="https://storage.khanoumi.com/ProductImages/Prime-Spf-50-Fusion-Water-Sun-Protector-40-ml-Khanoumi-20241289462089.jpg?w=130"
                />
                <img
                  alt="فلوئید ضد آفتاب حاوی ویتامین c و spf50 فیوژن واتر مناسب انواع پوست حجم 40 میل"
                  src="https://storage.khanoumi.com/ProductImages/Prime-Spf-50-Fusion-Water-Sun-Protector-40-ml-Khanoumi-20241289462089.jpg?w=104"
                  class="object-contain aspect-square w-30 lg:w-35 h-30 lg:h-35 lazy-image"
                  width="140"
                  height="140"
                  data-sentry-component="LazyImage"
                  data-sentry-source-file="lazy-image.tsx"
                  data-clarity-loaded="itmnlr"
                />
              </picture>
              <span class="font-Dana lg:text-body-14 text-gray-500 dark:text-gray-400">
                پرایم
              </span>
              <h3 class="line-clamp-2 text-caption-12 font-Dana lg:text-body-14 dark:text-zinc-300">
                فلوئید ضد آفتاب حاوی ویتامین c و spf50 فیوژن واتر مناسب انواع
                پوست حجم 40 میل{" "}
              </h3>
            </div>
            <div
              class="flex items-center gap-1 mr-auto"
              data-sentry-component="Pricing"
              data-sentry-source-file="pricing.tsx"
            >
              <div class="flex flex-col items-center text-caption-12 lg:text-body-14 child:dark:text-pink-600">
                <div class="flex items-center gap-1">
                  <span class="font-DanaMeduim">361,900</span>
                  <span class="font-DanaDemiBold">تومان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
