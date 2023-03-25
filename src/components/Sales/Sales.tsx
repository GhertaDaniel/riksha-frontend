import React from 'react';

import salesIcon from '@/assets/images/top/sales.svg';
import SalesCard from './SalesCard';
import firstCardImage from '@/assets/images/sales/1.svg';
import secondCardImage from '@/assets/images/sales/2.svg';
import thirdCardImage from '@/assets/images/sales/3.svg';

export default function Sales() {
  return (
    <>
      <div className="flex items-center gap-4">
        <h2 className="text-5xl font-semibold">Акций</h2>
        <img src={salesIcon} alt="logo" />
      </div>
      {/* <div className="flex gap-6 flex-wrap mt-[40px]"> */}
      <div className="grid grid-cols-3 md:grid-cols-3 mt-[40px]">
        <SalesCard img={firstCardImage}>
          <h2 className="text-2xl font-semibold text-[#1B1B1B]">
            Празднуй день рождения вместе с нами
          </h2>
          <p className="text-sm font-medium">Ролл в подарок при заказе в день рождения</p>
        </SalesCard>
        <SalesCard img={secondCardImage}>
          <h2 className="text-2xl font-semibold text-[#1B1B1B]">Доставим заказ за 60 мин</h2>
          <p className="text-sm font-medium">или проморол за опоздание</p>
        </SalesCard>
        <SalesCard img={thirdCardImage}>
          <h2 className="text-2xl font-semibold text-[#1B1B1B]">Приведи друга</h2>
          <p className="text-sm font-medium">и получи 250 ₽ на бонусный счет</p>
        </SalesCard>
      </div>
    </>
  );
}
