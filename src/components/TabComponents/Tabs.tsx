import React from 'react';

import topImg from '../../assets/images/top/ill roll 1.png';
import FirstTab from '../AllTabs/FirstTab';
import SecondTab from '../AllTabs/SecondTab';

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState('tab1');

  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };
  return (
    <div className="tabs top mt-[110px] relative pt-[40px]">
      <img src={topImg} alt="logo" className="absolute top-0 left-0" />
      <ul className="ml-[80px] nav flex gap-[30px] text-5xl text-[#b7b7b7]">
        <li
          className={`${activeTab === 'tab1' ? 'active' : ''} cursor-pointer`}
          onClick={handleTab1}
        >
          Топ позиций
        </li>
        <li
          className={`${activeTab === 'tab2' ? 'active' : ''} cursor-pointer`}
          onClick={handleTab2}
        >
          Новинки
        </li>
      </ul>
      <div className="outlet">{activeTab === 'tab1' ? <FirstTab /> : <SecondTab />}</div>
    </div>
  );
};

export default Tabs;
