import React from 'react';

import topImg from '../assets/images/top/iil roll 2.svg';
import ProductCard from './Card/ProductCard';
import pizzajson from '../assets/pizza.json';

const Discounts = () => {
  return (
    <div className="mt-[150px] pb-[200px] container">
      <div className="flex items-center gap-4">
        <h2 className="text-5xl font-semibold">Комбо меню</h2>
        <img src={topImg} alt="logo" />
      </div>
      <div className="flex justify-between flex-wrap mt-[40px]">
        {pizzajson.map((pizza) => (
          <ProductCard key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
};

export default Discounts;
