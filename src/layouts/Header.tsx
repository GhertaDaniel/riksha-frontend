import React from 'react';
import { logo, phone, cart, user, food, IFood } from '../assets/images/icons/index';
import { NavLink, Link } from 'react-router-dom';
import Catalog from '../pages/Catalog';

const Header = () => {
  return (
    <div className="relative">
      <div className="flex items-center mt-2 mx-auto max-w-7xl">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="ml-20 w-full">
          <div className="flex justify-between items-center">
            <ul className="flex gap-8">
              <li className="text-sm font-normal">О нас</li>
              <li className="text-sm font-normal">Доставка и оплата</li>
              <li className="text-sm font-normal">Контакты</li>
              <li className="text-sm font-normal">Бонусы</li>
              <li className="text-sm font-normal">Вакансии</li>
            </ul>
            <div className="text-right">
              <div className="phone flex gap-2">
                <img src={phone} height={16} width={16} alt="" />
                <p className="font-medium text-base">+7 (495) 617-14-24</p>
              </div>
              <p className="text-xs text-[#B7B7B7]">c 10:00 до 23:00</p>
            </div>
            <div className="flex">
              <div className="flex items-center gap-5 mr-4 bg-[#F5F5F5] px-5 py-3 pl-8 rounded-md">
                <p className="font-medium pr-6 border-r border-white">0 ₽</p>
                <div className="relative">
                  <img src={cart} alt="" />
                  <p className="absolute bg-[#E07153] -top-1 -right-2 rounded-full text-white text-xs w-4 h-4 text-center">
                    0
                  </p>
                </div>
              </div>
              <img className="bg-[#F5F5F5] p-4 rounded-md" src={user} alt="user" />
            </div>
          </div>
          <div className="flex mt-6">
            <div className="flex gap-16">
              {food.map((logo: IFood) => (
                <NavLink
                  key={logo.url}
                  to={logo.to}
                  style={({ isActive }) => ({
                    display: 'flex',
                    fontWeight: isActive ? '700' : '400',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '64px',
                  })}
                >
                  <img src={logo.url} className="mx-auto" alt="" />
                  <p className="text-center">{logo.title}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] h-[83px] mt-[-75px] w-full -z-10 absolute"></div>
    </div>
  );
};

export default Header;
