import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div className="container mt-24 mx-auto">
        <Link
        // to={}
        >
          <div>
            <img
              alt="آرایشی"
              src="/img/banner1.png"
              class="w-auto mx-auto"
              height="224"
              data-sentry-component="LazyImage"
              data-sentry-source-file="lazy-image.tsx"
            />
          </div>
        </Link>
        
        <Link
        // to={}
        >
          <div>
            <img
              alt="آرایشی"
              src="/img/banner-2.png"
              class="w-auto mx-auto mt-9"
              height="224"
              data-sentry-component="LazyImage"
              data-sentry-source-file="lazy-image.tsx"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
