import React from "react";
import { Link } from "react-router-dom";

export default function SectionHeader({title , btnTitle , btnHref}) {
  return (
    <>
      <section className="mt-11">
        <div className="container flex items-center justify-between">
          {/* title */}

          <span className="font-DanaDemiBold md:text-xl text-center ">
            {title}
          </span>

          {/* btn title */}

          {
            btnTitle ? (
                <Link
                to={btnHref}
                className="font-DanaDemiBold text-pink-700 cursor-pointer"
                >

                   {btnTitle}
               
              </Link>
            ) : (
                null
            )
          }

     
        </div>
      </section>
    </>
  );
}
