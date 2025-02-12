import React from 'react'

import Poster1 from "../../public/poster1.jpg";
import Poster2 from "../../public/poster2.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay , Pagination } from "swiper/modules";
import "swiper/css/pagination";

function MainSlider() {
  return (
    <>
          <div className="py-5 bg-gray-200">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="flex items-center justify-center"
          modules={[Pagination,Autoplay]}
          centeredSlides={true}
        >
          <SwiperSlide className="">
            <div className="flex justify-center items-center">
              <img
                src={Poster1}
                alt=""
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="flex justify-center items-center">
              <img
                src={Poster2}
                alt=""
                className=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default MainSlider
