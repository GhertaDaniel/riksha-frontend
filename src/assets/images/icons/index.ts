import logo from './logo.svg';
import footerLogo from './footerLogo.svg';
import phone from './phone.svg';
import cart from './cart.svg';
import user from './user.svg';

import pizza from './food/pizza.svg';
import sushi from './food/sushi.svg';
import rolle from './food/rolle.svg';
import sets from './food/sets.svg';
import wok from './food/wok.svg';
import soup from './food/soup.svg';
import salad from './food/salad.svg';
import desert from './food/desert.svg';
import drink from './food/drink.svg';
import sale from './food/sale.svg';

import facebook from './socials/facebook.svg';
import instagram from './socials/instagram.svg';
import vk from './socials/vk.svg';

export interface IFood {
  id: number;
  url: string;
  isActive: boolean;
  title: string;
  to: string;
}

export const food: IFood[] = [
  {
    id: 1,
    url: pizza,
    isActive: false,
    title: 'Пицца',
    to: 'pizza',
  },
  {
    id: 2,
    url: sushi,
    isActive: false,
    title: 'Суши',
    to: 'sushi',
  },
  {
    id: 3,
    url: rolle,
    isActive: false,
    title: 'Роллы',
    to: 'rolle',
  },
  {
    id: 4,
    url: sets,
    isActive: false,
    title: 'Сеты',
    to: 'sets',
  },
  {
    id: 5,
    url: wok,
    isActive: false,
    title: 'Wok',
    to: 'wok',
  },
  {
    id: 6,
    url: soup,
    isActive: false,
    title: 'Супы',
    to: 'soup',
  },
  {
    id: 7,
    url: salad,
    isActive: false,
    title: 'Салаты',
    to: 'salad',
  },
  {
    id: 8,
    url: desert,
    isActive: false,
    title: 'Десерты',
    to: 'desert',
  },
  {
    id: 9,
    url: drink,
    isActive: false,
    title: 'Напитки',
    to: 'drink',
  },
  {
    id: 10,
    url: sale,
    isActive: false,
    title: 'Акции',
    to: 'sale',
  },
];

export const socials = [
  {
    url: 'facebook.com',
    img: facebook,
  },
  {
    url: 'instagram.com',
    img: instagram,
  },
  {
    url: 'vk.com',
    img: vk,
  },
];

export { logo, footerLogo, phone, cart, user };
