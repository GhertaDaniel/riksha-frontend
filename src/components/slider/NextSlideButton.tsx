import React from "react";
import { useSwiper } from "swiper/react";

import nextArrow from "../../assets/images/slider/arrow-next.svg";

export default function NextSlideButton({ styles }) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      className="w-[80px] h-[80px] rounded-full shadow-3xl flex justify-center items-center"
      style={styles}
    >
      <img src={nextArrow} alt="" />
    </button>
  );
}
