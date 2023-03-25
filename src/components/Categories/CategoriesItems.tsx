import React from 'react';
import ProductCard from '../Card/ProductCard';

import philadelphia from '/assets/card/sushi/Philadellphia.png';
import sushijson from '@/assets/sushi.json';
import Pagination from '../Pagination/Pagination';

const CategoriesItems = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [productsPerPage, setProductsPerPage] = React.useState(6);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const sushi = [...new Array(17), ...sushijson.map((sushi) => sushi)];
  const currentProducts = sushi.slice(firstProductIndex, lastProductIndex);

  return (
    <>
      <div className="grid grid-cols-3 mt-8 gap-6">
        {currentProducts.map((_, i) => (
          <ProductCard
            key={i}
            productImage={philadelphia}
            sizes={[
              { id: 1, size: 30 },
              { id: 2, size: 50 },
            ]}
            id={i}
            currentPrice="510"
            oldPrice="590"
            ingredients="соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто."
            name="Пицца “Рикша”"
            weight="450"
          />
        ))}
      </div>
      <Pagination
        totalPosts={sushi.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default CategoriesItems;
