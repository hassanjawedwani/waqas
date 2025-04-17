import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";

const images = [
  "/assets/hero/1.jpg",
  "/assets/hero/2.jpg",
  "/assets/hero/3.jpg",
  "/assets/hero/4.jpg",
  "/assets/hero/5.jpg",
  "/assets/hero/6.jpg",
  "/assets/hero/7.jpg",
  "/assets/hero/8.jpg",
];
const ScreensSwiper = () => {
  return (
    <div className="absolute top-24 left-44" style={{ width: "850px", margin: "0 auto" }}>
      <Swiper spaceBetween={30} slidesPerView={3}>
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx}`}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScreensSwiper;
