import React, { FC, ReactNode } from 'react';

import buttonBg from '@/assets/buttonBackground.png';

type IProps = {
  children: ReactNode;
  width?: string;
  height?: string;
  className?: string;
};

const Button: FC<IProps> = ({ children, width = '180px', height = '44px', className }) => {
  return (
    <button
      className={`bg-[#E07153] text-white px-[60px] py-[13px] border-[1px] border-[#C95C3F] rounded-[4px] w-[${width}] h-[${height}] ${className}`}
      style={{
        backgroundImage: `url(${buttonBg}`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
