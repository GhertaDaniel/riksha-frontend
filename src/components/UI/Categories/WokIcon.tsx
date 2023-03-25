import React, { FC } from 'react';

const WokIcon: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.22871 15.6753H25.8183L24.4425 13.5467L26.552 12.23L28.5147 15.2514L24.8461 31.9999H3.66867L0 15.2514L4.42075 8.03606H18.9945L17.9215 9.69558H5.90655L2.23789 15.6392L2.22871 15.6753Z"
        fill="#1B1B1B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1331 14.602L26.5521 0L28.9917 0.901915L18.9029 13.7001L30.826 4.97856L32 7.24238L20.7464 14.6291L16.1331 14.602Z"
        fill={color}
      />
    </svg>
  );
};

export default WokIcon;