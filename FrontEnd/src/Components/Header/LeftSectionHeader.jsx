import React from "react";

export default function LeftSectionHeader() {
  return (
    <>
      <div className="flex items-center gap-7 md:gap-5 lg:justify-end">
        <svg
          className="w-6 h-6 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>

        <a
          aria-label="Cart"
          class="flex items-center"
          data-sentry-element="Link"
          data-sentry-source-file="main-bar.tsx"
          href="/cart"
        >
          <div
            className="relative"
            data-sentry-component="CartCounterButton"
            data-sentry-source-file="cart-counter-button.tsx"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 24 24"
              class="h-6 w-6 text-text-black"
              data-sentry-element="svg"
              data-sentry-source-file="ShoppingCart.tsx"
              data-sentry-component="SvgShoppingCart"
            >
              <path
                fill="currentColor"
                d="M18.19 17.75H7.54c-.99 0-1.94-.42-2.61-1.15A3.57 3.57 0 0 1 4 13.9l.83-9.96c.03-.31-.08-.61-.29-.84s-.5-.35-.81-.35H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.74c.73 0 1.42.31 1.91.84.27.3.47.65.58 1.04h12.49c1.01 0 1.94.4 2.62 1.12.67.73 1.01 1.68.93 2.69l-.54 7.5c-.11 1.83-1.71 3.31-3.54 3.31M6.28 4.62l-.78 9.4c-.05.58.14 1.13.53 1.56s.93.66 1.51.66h10.65c1.04 0 1.98-.88 2.06-1.92l.54-7.5a2.04 2.04 0 0 0-2.06-2.21H6.28zM16.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5M8.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5"
                data-sentry-element="path"
                data-sentry-source-file="ShoppingCart.tsx"
              ></path>
              <path
                fill="currentColor"
                d="M21 8.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
                data-sentry-element="path"
                data-sentry-source-file="ShoppingCart.tsx"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}
