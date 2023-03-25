import { FC } from 'react';

import {
  SalmonIcon,
  AcneIcon,
  CrabIcon,
  MusselsIcon,
  ShrimpIcon,
  TunaIcon,
} from '@/assets/images/icons/catalogFilter';
import {
  HotIcon,
  BakedIcon,
  VeganIcon,
  TopIcon,
  NewIcon,
  DiscountsIcon,
} from '@/assets/card/cardType';

const catalogFilterIngredients = [
  { filterBy: 'Лосось', url: SalmonIcon },
  { filterBy: 'Тунец', url: TunaIcon },
  { filterBy: 'Угорь', url: AcneIcon },
  { filterBy: 'Креветка', url: ShrimpIcon },
  { filterBy: 'Краб', url: CrabIcon },
  { filterBy: 'Мидии', url: MusselsIcon },
];

const catalogFilterTypes = [
  { filterBy: 'Острое', url: HotIcon },
  { filterBy: 'Запеченный рол', url: BakedIcon },
  { filterBy: 'Vegan', url: VeganIcon },
  { filterBy: 'ТОП-позиции', url: TopIcon },
  { filterBy: 'Новинки', url: NewIcon },
  { filterBy: 'Скидки', url: DiscountsIcon },
];

const CatalogFilter: FC = () => {
  return (
    <div>
      <ul className="flex gap-1">
        {catalogFilterIngredients.map((filter) => (
          <li key={filter.filterBy}>
            <button className="flex items-center gap-2 border px-5 h-12 rounded-lg">
              <img src={filter.url} alt="" />
              <p className="text-sm font-medium">{filter.filterBy}</p>
            </button>
          </li>
        ))}
      </ul>
      <ul className="flex gap-1 mt-1">
        {catalogFilterTypes.map((filter) => (
          <li key={filter.filterBy}>
            <button className="flex items-center gap-2 border px-5 h-12 rounded-lg">
              <img src={filter.url} alt="" />
              <p className="text-sm font-medium">{filter.filterBy}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogFilter;
