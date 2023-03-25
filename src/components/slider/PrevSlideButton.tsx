import React from "react";
import { useSwiper } from "swiper/react";

import prevArrow from "../../assets/images/slider/arrow-prev.svg";
import nextArrow from "../../assets/images/slider/arrow-next.svg";

export default function PrevSlideButton({ styles }) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="w-[80px] h-[80px] rounded-full shadow-3xl flex justify-center items-center"
      style={styles}
    >
      <img src={swiper.realIndex === 0 ? prevArrow : nextArrow} />
    </button>
  );
}
