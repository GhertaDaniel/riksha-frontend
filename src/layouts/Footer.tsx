import React from 'react';

import { footerLogo, socials, food } from '../assets/images/icons/index';

const Footer = () => {
  return (
    <div className="bg-[#1B1B1B] min-h-[143px] text-white font-normal mt-36">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src={footerLogo} className="-mt-10 w-[112px] h-[132px]" alt="" />
          <div className="flex justify-between w-full mt-8 ml-12">
            <div className="">
              <div className="flex gap-9">
                <p>О нас</p>
                <p>Доставка и оплата</p>
                <p>Контакты</p>
              </div>
              <div className="socials flex items-center gap-4 mt-3">
                {socials.map((el) => (
                  <a href="#" key={el.url}>
                    <img src={el.img} alt="" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <ul className="flex w-[450px] gap-x-10 gap-y-4 flex-wrap">
                {food.map((el) => (
                  <li key={el.title}>{el.title}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col text-right">
              <p className="font-bold text-2xl">+7 (495) 617-14-24</p>
              <span>c 10:00 до 23:00</span>
            </div>
          </div>
        </div>
        <p className="text-right font-light text-xs mt-4">© Рикша. Все права защищены.</p>
      </div>
    </div>
  );
};

export default Footer;
