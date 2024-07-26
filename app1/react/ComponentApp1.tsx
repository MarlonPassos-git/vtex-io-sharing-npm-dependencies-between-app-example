import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"

export default function ComponentApp1() {
  return <div>
      <div>ComponentApp1</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        style={{height: 100, width: "100%"}}
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      </div>
}
