import React from 'react';
import { useLocation } from 'react-router-dom';

import Sort, { SortItem, sortPropertyEnum } from '@/components/Sort';
import CatalogFilter from '@/components/Catalog/CatalogFilter';
import ProductCard from '@/components/Card/ProductCard';
import Philadellphia from '@/assets/card/cardImage/Philadellphia.png';

const Catalog = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [sort, setSort] = React.useState<SortItem>({
    name: 'Популярности (DESC)',
    sortProperty: sortPropertyEnum.RATING_DESC,
  });

  return (
    <div className="mt-12">
      <p className="leading-4">
        {pathname === '/catalog' ? 'Главная' : ''} // <span className="font-semibold">Суши</span>
      </p>

      <h2 className="mt-6 text-[40px] font-semibold">Суши</h2>
      <div className="flex justify-between items-end mt-5">
        <CatalogFilter />
        <Sort value={sort} setSort={setSort} />
      </div>

      <div className="grid grid-cols-3 mt-6 gap-6">
        {[...new Array(1)].map((obj, idx) => (
          <ProductCard
            id={idx}
            key={idx}
            productImage={Philadellphia}
            name='Ролл "Филадельфия"'
            currentPrice="219"
            ingredients='Лосось, сыр "Филадельфия", огурец, авокадо'
            oldPrice="269"
            type="NEW"
            category={[
              {
                img: '',
                type: 'Vegan',
              },
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
