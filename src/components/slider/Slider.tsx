import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PrevSlideButton from './PrevSlideButton';
import NextSlideButton from './NextSlideButton';
import sushi from '../../assets/images/slider/IMG.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Slider = () => {
  const styles = {
    prev: {
      position: 'absolute',
      top: '50%',
      left: '0px',
      transform: 'translateY(-50%)',
      zIndex: 9999,
    },
    next: {
      position: 'absolute',
      top: '50%',
      right: '0px',
      transform: 'translateY(-50%)',
      zIndex: 9999,
    },
  };

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
      >
        <SwiperSlide>
          <div className="flex justify-around mt-[50px] bg-[#F5F9FA]">
            <div className="w-[500px]">
              <h1 className="text-[40px] font-bold">
                Калифорния <span className="text-[#E07153]">в подарок</span> при первом заказе
              </h1>
              <h4 className="font-medium text-xl">от 1500 ₽</h4>
              <button className="mt-[85px] bg-[#E07153] text-white w-[172px] h-[172px] rounded-full">
                Подробнее
              </button>
            </div>
            <img src={sushi} alt="sushi" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-around mt-[50px]">
            <div className="w-[500px]">
              <h1 className="text-[40px] font-bold">
                Калифорния <span className="text-[#E07153]">в подарок</span> при первом заказе
              </h1>
              <h4 className="font-medium text-xl">от 1500 ₽</h4>
              <button className="mt-[85px] bg-[#E07153] text-white w-[172px] h-[172px] rounded-full">
                Подробнее
              </button>
            </div>
            <div>
              <img src={sushi} alt="sushi" className="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-around mt-[50px]">
            <div className="w-[500px]">
              <h1 className="text-[40px] font-bold">
                Калифорния <span className="text-[#E07153]">в подарок</span> при первом заказе
              </h1>
              <h4 className="font-medium text-xl">от 1500 ₽</h4>
              <button className="mt-[85px] bg-[#E07153] text-white w-[172px] h-[172px] rounded-full">
                Подробнее
              </button>
            </div>
            <div>
              <img src={sushi} alt="sushi" className="" />
            </div>
          </div>
        </SwiperSlide>
        <PrevSlideButton styles={styles.prev} />
        <NextSlideButton styles={styles.next} />
      </Swiper>
    </>
  );
};

export default Slider;
