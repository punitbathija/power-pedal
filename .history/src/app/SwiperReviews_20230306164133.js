"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";

export default ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect={"fade"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img
            src={slide.image}
            alt={slide.title}
            className="flex justify-center align-middle justify-items-center mx-auto my-7"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};