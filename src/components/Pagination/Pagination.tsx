import React from 'react';
import { Link } from 'react-router-dom';

import prevArrow from '@/assets/images/icons/navigation/prevArrow.svg';
import nextArrow from '@/assets/images/icons/navigation/nextArrow.svg';

const Pagination: React.FC<{
  totalPosts: number;
  productsPerPage: number;
  setCurrentPage: (value: number | ((prevVar: number) => number)) => void;
  currentPage: number;
}> = ({ totalPosts, productsPerPage, setCurrentPage, currentPage }) => {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / productsPerPage); i++) {
    pages.push(i);
  }

  const active =
    'w-14 h-14 rounded-full border-[1px] font-medium border-[#C95C3F] text-[#C95C3F] before:content before:absolute before:bg-white before:w-[105%] before:h-[20px] before:-z-10 before:flex before:justify-items before:items-center before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2';

  const nextPage = () => {
    if (currentPage !== pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="flex justify-between mt-12">
      <div className="flex gap-3">
        <button onClick={() => prevPage()}>
          <img src={prevArrow} alt="" />
        </button>
        {pages.map((page: number, idx: number) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={idx}
            className={`px-3 py-2 z-10 relative text-xl text-[#1B1B1B] ${
              page == currentPage ? active : ''
            }`}
          >
            {page}
          </button>
        ))}
        <button onClick={() => nextPage()}>
          <img src={nextArrow} alt="" />
        </button>
      </div>
      <Link
        to="/catalog"
        className="flex items-center gap-4 text-2xl font-semibold text-[#C95C3F] whitespace-nowrap"
      >
        Перейти в каталог <img src={nextArrow} alt="" />
      </Link>
    </div>
  );
};

export default Pagination;
