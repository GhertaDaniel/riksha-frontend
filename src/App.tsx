import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './layouts/Footer';
import Home from './layouts/Home';
import Header from './layouts/Header';
import NoMatch from './pages/NoMatch';
import arrowUp from '@/assets/images/icons/navigation/arrowUp.svg';
import Catalog from './pages/Catalog';

function App() {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else setShowButton(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button
          className="fixed text-center bottom-24 right-28 w-[132px] h-[132px] rounded-full text-white bg-[#E07153]/80 border-[1px] border-[#C95C3F] z-50 bg-button drop-shadow-[0_8px_40px_rgba(0, 0, 0, 0.24)]"
          onClick={() => scrollToTop()}
        >
          <img src={arrowUp} alt="up" className="block mx-auto" />
          Наверх
        </button>
      )}

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-auto w-[1240px] mx-auto">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NoMatch />} />
              <Route path="/catalog" element={<Catalog />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
