import React, { FC } from 'react';
import cn from 'classnames';

export enum sortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export type SortItem = {
  name: string;
  sortProperty: sortPropertyEnum;
};

type SortProps = {
  value: SortItem;
  setSort: (value: SortItem | ((prevValue: SortItem) => SortItem)) => void;
};

const sortList: SortItem[] = [
  { name: 'Популярности (DESC)', sortProperty: sortPropertyEnum.RATING_DESC },
  { name: 'Популярности (ASC)', sortProperty: sortPropertyEnum.RATING_ASC },
  { name: 'Цене (DESC)', sortProperty: sortPropertyEnum.PRICE_DESC },
  { name: 'Цене (ASC)', sortProperty: sortPropertyEnum.PRICE_ASC },
  { name: 'Алфавиту (DESC)', sortProperty: sortPropertyEnum.TITLE_DESC },
  { name: 'Алфавиту (ASC)', sortProperty: sortPropertyEnum.TITLE_ASC },
];

const Sort: FC<SortProps> = ({ value, setSort }) => {
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const onClickListItem = (obj: SortItem) => {
    setSort(obj);
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) setOpen(false);
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="relative">
      <div
        className={cn(
          'flex justify-between items-center w-[298px] border-2 rounded-lg px-5 py-3 cursor-pointer',
          {
            ['border-b-transparent rounded-b-none']: open,
          },
        )}
        onClick={() => setOpen(!open)}
      >
        <span>{value.name}</span>
        <svg
          className={
            open ? 'rotate-180 transition-all duration-300' : ' transition-all duration-300'
          }
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_778_14587)">
            <path
              d="M12 13.172L16.95 8.22198L18.364 9.63598L12 16L5.63599 9.63598L7.04999 8.22198L12 13.172Z"
              fill="#09121F"
            />
          </g>
          <defs>
            <clipPath id="clip0_778_14587">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {open && (
        <div className="absolute left-0 -mt-5 py-2 w-40">
          <ul
            className={cn('border-2 w-[298px] rounded-b-lg px-5 py-3 bg-white', {
              ['border-t-0']: open,
            })}
          >
            {sortList.map((obj, idx) => (
              <li
                key={idx}
                className={cn('cursor-pointer w-full', {
                  ['bg-[rgba(254, 95, 30, 0.05)] font-bold text-[#C95C3F] hover:bg-[rgba(254, 95, 30, 0.05)]']:
                    value.sortProperty === obj.sortProperty,
                })}
                // className={
                //   'cursor-pointer' + value.sortProperty === obj.sortProperty
                //     ? ''
                //     : ''
                // }
                onClick={() => onClickListItem(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
