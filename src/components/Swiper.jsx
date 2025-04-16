// src/components/CoverflowSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const CoverflowSlider = () => {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
      >
        <SwiperSlide className="w-64">
          <img
            src="/src/assets/hero/1.jpg"
            alt="Slide 1"
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64">
          <img
            src="/src/assets/hero/2.jpg"
            alt="Slide 1"
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64">
          <img
            src="/src/assets/hero/3.jpg"
            alt="Slide 1"
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64">
          <img
            src="/src/assets/hero/4.jpg"
            alt="Slide 1"
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64">
          <img
            src="/src/assets/hero/5.jpg"
            alt="Slide 1"
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64">
          <img
            src="/src/assets/hero/6.jpg"
            alt="Slide 1"
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64">
          <img
            src="/src/assets/hero/7.jpg"
            alt="Slide 1"
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="w-64">
          <img
            src="/src/assets/hero/8.jpg"
            alt="Slide 1"
            className="rounded-md"
          />
        </SwiperSlide>  
      </Swiper>
    </div>
  );
};

export default CoverflowSlider;
