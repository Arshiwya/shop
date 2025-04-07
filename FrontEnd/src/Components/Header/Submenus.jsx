import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Submenus(props) {
  const [subMenus, setSubMenus] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/categories/${subMenus}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubMenus(data);
      });
  }, []);

  return (
    <div
      className="hover:[&amp;>*]block group/submenu layout-container flex flex-col gap-4 py-6 h-96"
      data-sentry-component="ProductsMenu"
      data-sentry-source-file="products-menu.tsx"
    >
      <button className="relative flex items-center justify-center  rounded text-body-14 focus-visible:outline-none px-4 py-2 font-bold pl-3 text-primary-main hover:text-primary-shade-700 disabled:text-primary-shade-200 !w-fit cursor-default">
        <span className="flex items-center relative z-10 gap-2 flex-row-reverse">
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

          <span className="cursor-pointer">
            <a
              className="text-red-500"
              data-sentry-element="Link"
              data-sentry-source-file="products-menu.tsx"
              href="/categories/makeup"
            >
              {props.name}
            </a>
          </span>
          {/* Sub Menu */}
          <div className="absolute top-7 right-0">
            <div className="flex min-w-[176px] border-spacing-px flex-col gap-6 ">
              <div className="flex flex-col gap-2">
                {subMenus.map((submenu) => (
                  <Link className="border-r-2 border-brand-secondary bg-white pr-2 text-sm font-bold text-text-black lg:leading-6">
                    {submenu.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </span>
      </button>
    </div>
  );
}
