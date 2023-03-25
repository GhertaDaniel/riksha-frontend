import React from 'react';

import notFoundImage from '/assets/not found/404.png';
import { Link } from 'react-router-dom';
import Button from '@/components/UI/Buttons/Button';

const NoMatch = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <img src={notFoundImage} alt="404" />
      <h3 className="text-4xl font-medium mt-10">Страница не найдена</h3>
      <p className="mt-2 max-w-[644px] text-center text-xl leading-normal">
        Извините, но страницу, которую Вы пытаетесь найти - не существует. Предлагаем Вам перейти на
        Главную страницу
      </p>
      <Link to="/" className="h-max">
        <Button className="mt-6">На главную</Button>
      </Link>
    </div>
  );
};

export default NoMatch;
