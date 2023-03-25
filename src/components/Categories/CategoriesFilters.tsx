import React from 'react';

import { food } from '@/assets/images/icons';
import categoryIcon from '@/assets/images/categories/Group.svg';

import {
  SushiIcon,
  PizzaIcon,
  RolleIcon,
  SetsIcon,
  WokIcon,
  SoupIcon,
  SaladIcon,
  DesertIcon,
  DrinkIcon,
  SaleIcon,
} from '@/components/UI/Categories/index';

const svgs = [
  { id: 1, component: <PizzaIcon color={'none'} />, isActive: false, title: 'Пицца' },
  { id: 2, component: <SushiIcon color={'none'} />, isActive: false, title: 'Суши' },
  { id: 3, component: <RolleIcon color={'none'} />, isActive: false, title: 'Роллы' },
  { id: 4, component: <SetsIcon color={'none'} />, isActive: false, title: 'Сеты' },
  { id: 5, component: <WokIcon color={'none'} />, isActive: false, title: 'Wok' },
  { id: 6, component: <SoupIcon color={'none'} />, isActive: false, title: 'Супы' },
  { id: 7, component: <SaladIcon color={'none'} />, isActive: false, title: 'Салаты' },
  { id: 8, component: <DesertIcon color={'none'} />, isActive: false, title: 'Десерты' },
  { id: 9, component: <DrinkIcon color={'none'} />, isActive: false, title: 'Напитки' },
  { id: 10, component: <SaleIcon color={'none'} />, isActive: false, title: 'Акции' },
];

const CategoriesFilters = () => {
  const [selectedId, setSelectedId] = React.useState(food[0].id);

  return (
    <>
      <div className="flex items-center gap-4 mt-[125px]">
        <h2 className="text-5xl font-semibold">Категорий</h2>
        <img src={categoryIcon} alt="category" />
      </div>
      <div className="shadow-3xl flex items-center justify-between h-[96px] px-3 rounded-2xl mt-11">
        {svgs.map((svg) => (
          <button
            key={svg.id}
            className={
              'flex items-center gap-2  h-[60px] px-5 rounded-xl' +
              ` ${selectedId === svg.id ? 'bg-[#E07153] shadow-lg text-[#fff]' : ''}`
            }
            onClick={() => {
              setSelectedId(svg.id === selectedId ? selectedId : svg.id);
            }}
          >
            {React.cloneElement(svg.component, {
              color: selectedId === svg.id ? '#fff' : '#E07153',
            })}
            <p className="text-base font-semibold">{svg.title}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoriesFilters;
