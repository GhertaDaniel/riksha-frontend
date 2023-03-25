import React from 'react';

import ProductCard from '../Card/ProductCard';
import Skeleton from '../../utils/Skeleton';
import sushijson from '../../assets/sushi.json';

export interface ProductCardCategory {
  type: string;
  img: string;
}

type TSizes = {
  id: number;
  size: 30 | 50;
};

export interface IProductCardProps {
  id: number;
  name: string;
  weight?: string;
  category?: ProductCardCategory[];
  ingredients: string;
  oldPrice: string;
  currentPrice: string;
  productImage?: string;
  type?: string;
  sizes?: TSizes[];
}

const FirstTab = () => {
  if (sushijson.length == 0) {
    return <Skeleton />;
  }

  return (
    <div className="flex justify-between flex-wrap mt-[40px]">
      {sushijson.map((obj: IProductCardProps) => (
        <ProductCard key={obj.id} {...obj} />
      ))}
    </div>
  );
};

export default FirstTab;
