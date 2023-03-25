import { FC } from 'react';
import Button from './UI/Buttons/Button';

import SushiImage1 from '@/assets/images/advertisement/sushi1.png';
import SushiImage2 from '@/assets/images/advertisement/sushi2.png';
import SushiImage3 from '@/assets/images/advertisement/sushi3.png';
import SushiImage4 from '@/assets/images/advertisement/sushi4.png';
import SushiImage5 from '@/assets/images/advertisement/sushi5.png';
import SushiImage6 from '@/assets/images/advertisement/sushi6.png';

import instagramIcon from '@/assets/images/icons/socials/instagram-button.svg';

const Advertisement: FC = () => {
  return (
    <div className="mt-[140px] text-[40px] font-semibold leading-[50px]">
      <div className="flex justify-between items-center">
        <p className="max-w-[468px]">
          А вы уже подписались на наш <span className="text-[#E07153]">Instagram?</span>
        </p>
        <Button height="72px" width="288px" className="text-2xl font-bold flex items-center gap-4">
          <img src={instagramIcon} alt="instagram" />
          @riksha_sushi
        </Button>
      </div>
      <div className="mt-14 grid grid-cols-4 gap-3">
        <img src={SushiImage1} alt="sushi" />
        <img src={SushiImage2} alt="sushi" />
        <img src={SushiImage3} alt="sushi" />
        <img src={SushiImage4} className="row-span-2" alt="sushi" />
        <img src={SushiImage5} className="col-span-2" alt="sushi" />
        <img src={SushiImage6} alt="sushi" />
      </div>
    </div>
  );
};

export default Advertisement;
