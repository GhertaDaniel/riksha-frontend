import { featured } from '@/assets/images/features';
import FeaturedCard from '@/pages/FeaturedCard';
import { FC } from 'react';

const Feature: FC = () => {
  return (
    <div className="features flex justify-between mt-16">
      {featured.map((el) => (
        <FeaturedCard
          key={el.title}
          title={el.title}
          img={el.img}
          span={el.span}
          descr={el.descr}
        />
      ))}
    </div>
  );
};

export default Feature;
