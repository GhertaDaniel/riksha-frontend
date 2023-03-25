import bag from './bag.svg';
import clock from './clock.svg';
import gift from './gift.svg';
import shrimp from './shrimp.svg';

export const featured: Record<string, string>[] = [
  {
    img: bag,
    title: 'Бесплатная',
    span: 'доставка',
    descr: 'при заказе от 600 ₽',
  },
  {
    img: clock,
    title: 'Доставим',
    span: 'за 60 мин',
    descr: 'или проморол за опоздание',
  },
  {
    img: gift,
    title: 'Подарим',
    span: 'бонусы',
    descr: 'бонусная система 1 ₽ = 1 бонус',
  },
  {
    img: shrimp,
    title: 'Свежие',
    span: 'продукты',
    descr: 'Никаких заготовок!',
  },
];

export { bag };
