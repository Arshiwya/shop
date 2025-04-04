import React, { useEffect, useState } from "react";
import Submenus from "./Submenus";

export default function BottonHeader() {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/categories/")
      .then((res) => res.json())
      .then((allCategory) => {
        setCategorys(allCategory);
      });
  }, []);

  return (
    <>
      <div className="hidden h-11 w-full bg-neutral-800 transition-transform duration-300 lg:flex">
        <div className="container relative flex items-center justify-start">
          <ul className="hidden h-full items-stretch text-sm font-medium text-white lg:flex [&>li]:px-3 child-hover:text-pink-700">
            {categorys.map((category) => (
              <li class="flex cursor-pointer font-Dana text-lg items-center transition-all duration-100 ease-in-out hover:text-brand-secondary group">
                <a href="/categories/makeup">{category.name}</a>
                <div class="absolute right-1/2 top-11 z-10 hidden w-full translate-x-1/2 transform cursor-auto justify-start gap-4 overflow-auto rounded-b-md border-b border-t border-neutral-200 bg-white shadow-low group-hover:flex lg:max-h-fit">
                  {category.children.map((submenu) => (
                    <Submenus {...submenu} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
