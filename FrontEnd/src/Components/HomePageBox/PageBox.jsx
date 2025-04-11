import React from "react";

export default function PageBox({ src, title }) {
  return (
    <>
      <a href="#" className="overflow-hidden rounded text-center">
        <img
          src={src}
          className="mb-3 mx-auto block w-12 overflow-hidden rounded-full md:w-16"
        />
        <span className="font-DanaDemiBold dark:text-zinc-400"> {title}</span>
      </a>
    </>
  );
}
