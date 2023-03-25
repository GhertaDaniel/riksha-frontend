import { FC } from 'react';

import salesIcon from '@/assets/images/top/ill roll 5.svg';
import cookingOne from '@/assets/images/about/img 1.png';
import cookingTwo from '@/assets/images/about/img 2.png';

const About: FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 mt-32">
        <div>
          <div className="flex gap-4 mt-[83px] w-max">
            <h2 className="text-5xl font-semibold">О компании</h2>
            <img src={salesIcon} alt="about icon" />
          </div>
          <div className="mt-[41px] text-xl font-light leading-8 max-w-[553px]">
            <p>
              Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой
              ваш стол и не заставит себя долго ждать. С нами вы сможете забыть о готовке, легко
              сделать приятное родным и близким, устроить вкусный праздник или расслабится в кругу
              друзей. Все блюда готовятся исключительно из свежих продуктов и по оригинальным
              рецептам Нашего шеф-повара.
            </p>
            <p className="mt-3">
              Любая позиция из Нашего Меню может оказаться у Вас на столе максимум через 60 минут! У
              вас есть возможность сделать предварительный заказ на определенный день и время.
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={cookingOne} alt="cooking" />
          <img
            src={cookingTwo}
            className="absolute top-2/4 -translate-y-[40%] -right-[185px] -z-10"
            alt="cooking"
          />
        </div>
      </div>
    </>
  );
};

export default About;
