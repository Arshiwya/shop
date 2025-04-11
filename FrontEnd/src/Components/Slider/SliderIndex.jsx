import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function SliderIndex() {
  return (
    <main className="">
      <div>
        <div className="flex items-center justify-center mt-7">
          <div className="relative w-full">
            <Swiper
              modules={[Pagination, Autoplay]} // Remove Navigation from modules
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop
            >
              {[
                "/public/img/img5.jpeg",
                "/public/img/img4.jpeg",
                "/public/img/img3.jpeg",
                "/public/img/img2.jpeg",
                "/public/img/img1.jpeg",
              ].map((src, index) => (
                <SwiperSlide key={index}>
                  <Link className="overflow-hidden rounded block mb-3">
                    <img
                      alt="ژیناژن"
                      src={src}
                      className="w-full object-cover scale-y-90 rounded transition-all"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Buttons */}
          </div>
        </div>
      </div>
    </main>
  );
}
