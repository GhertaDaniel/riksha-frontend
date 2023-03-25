import React from 'react';
import Slider from '../components/slider/Slider';

import FeaturedCard from '../pages/FeaturedCard';
import Tabs from '../components/TabComponents/Tabs';
import Discounts from '../components/Discounts.js';
import { featured } from '../assets/images/features';
import Sales from '../components/Sales/Sales';
import Categories from '../components/Categories/Categories';
import About from '@/components/About/About';
import Advertisement from '@/components/Advertisement';
import Feature from '@/components/Feature/Feature';

const Home = () => {
  return (
    <>
      <Slider />
      <Feature />
      <Tabs />
      <Discounts />
      <Sales />
      <Categories />
      <About />
      <Advertisement />
    </>
  );
};

export default Home;
