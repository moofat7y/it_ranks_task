import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { carouselImgConfig } from "../../utils/config";

export default function Carousel() {
  return (
    <div className="container">
      <Swiper
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={5}
        modules={[Pagination, Keyboard]}
        style={{ height: "234px", paddingBottom: "30px", borderRadius: "16px" }}
      >
        {carouselImgConfig.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
                src={image}
                loading="eager"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
