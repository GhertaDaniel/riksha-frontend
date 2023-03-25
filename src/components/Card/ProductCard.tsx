import React from 'react';
import cn from 'classnames';

import { FC } from 'react';
import { IProductCardProps, ProductCardCategory } from '../AllTabs/FirstTab';
import buttonBg from '@/assets/buttonBackground.png';
import Button from '../UI/Buttons/Button';
import { VeganIcon, BakedIcon, HotIcon } from '@/assets/card/cardType';

const ProductCard: FC<IProductCardProps> = ({
  name,
  weight,
  category,
  ingredients,
  oldPrice,
  currentPrice,
  productImage,
  type,
  sizes,
}) => {
  const [selectedSize, setSelectedSize] = React.useState(() => {
    if (sizes) return sizes[0].id;
  });
  const icons = Array(BakedIcon, HotIcon, VeganIcon);
  const productType = `absolute top-4 -right-4 w-[72px] h-[72px] pt-[22px] rounded-full text-center text-white font-black text-xl overflow-visible`;

  const typeIcon = (name: string): any => {
    const icon = icons.find((el) => el.includes(name.toLowerCase()));
    return icon;
  };

  return (
    <div className="w-[400px] h-[479px] relative bg-white">
      <img src={productImage} alt="image" />
      <div className="w-[55px] flex flex-col items-start justify-center absolute top-3 left-2">
        {category &&
          category.map((obj, i) => (
            <div className="flex flex-col items-center" key={i}>
              <img src={typeIcon(obj.type)} alt="" />

              <p className="font-medium text-sm text-center">{obj.type}</p>
            </div>
          ))}
      </div>
      <div className="px-[24px] py-[20px]">
        <div className="flex items-center justify-between">
          <p className="text-md text-[#B7B7B7] w-max">
            200 грамм <span className="text-[#E07153] font-black">·</span> 130 Ккал
          </p>
          {sizes && (
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size.id}
                  className={cn('py-1 px-2 rounded-[4px]', {
                    ['text-[#B7B7B7] bg-[#F5F5F5]']: selectedSize !== size.id,
                    ['text-white bg-[#E07153]']: selectedSize == size.id,
                  })}
                  onClick={() => {
                    setSelectedSize(size.id === selectedSize ? selectedSize : size.id);
                  }}
                >
                  {size.size} см
                </button>
              ))}
            </div>
          )}
        </div>
        <h2 className="text-2xl font-semibold leading-7">{name}</h2>
        <p className="text-sm leading-4">{ingredients}</p>
        <div className="flex justify-between mt-[50px]">
          <div className="flex flex-col">
            <span className="line-through text-sm font-normal text-[#B7B7B7]">{oldPrice} ₽</span>
            <p className="text-3xl font-extrabold">{currentPrice} ₽</p>
          </div>
          {/* <button
            className="bg-[#E07153] text-white px-[60px] py-[13px] border-[1px] border-[#C95C3F] rounded-[4px]"
            style={{
              backgroundImage: `url(${buttonBg}`,
            }}
          >
            Заказать
          </button> */}
          <Button>Заказать</Button>
        </div>
      </div>
      {type && (
        <div
          className={cn(productType, {
            ['bg-[#62E2B4]']: type === 'NEW',
            ['bg-[#A1DCDC]']: type === 'TOP',
          })}
        >
          {type}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
