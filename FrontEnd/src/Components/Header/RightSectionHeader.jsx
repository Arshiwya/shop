import React from "react";
import { FiSearch } from "react-icons/fi";

export default function RightSectionHeader() {
  return (
    <>
      <div className="flex">
        {/* Logo Img */}
        <a href="/">
          <img src="/public/img/logo.svg" alt="logo" />
        </a>
        {/* Search Box */}

        <div className="relative flex w-full overflow-hidden rounded mr-3">
          <div className="absolute right-0 top-0 flex h-full items-center justify-center rounded px-1.5">
            <svg
              className="mr-1 h-6 w-6 text-gray-400 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <button
              type="button"
              data-test="clear-result"
              className="flex font-Dana"
            >
              <svg
                class="mr-1 h-6 w-6"
                data-sentry-element="svg"
                data-sentry-component="IconClose"
                data-sentry-source-file="close.tsx"
              >
                <use
                  href="#close"
                  data-sentry-element="use"
                  data-sentry-source-file="close.tsx"
                ></use>
              </svg>
            </button>
          </div>
          <input
            placeholder="جست‌وجو"
            className="h-11 flex-1 rounded font-DanaDemiBold dark:bg-neutral-800 dark:text-white border border-gray-200 py-2.5 pl-2 pr-10 text-body-14 leading-relaxed outline-none placeholder:text-text-mediumGray focus:border-pink-200 md:min-w-[520px] lg:text-body-16"
            type="text"
          />
        </div>
      </div>
    </>
  );
}
