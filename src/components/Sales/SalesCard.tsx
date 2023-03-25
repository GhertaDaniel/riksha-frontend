import React from 'react';

export default function SalesCard({ img, children }) {
  return (
    <div
      style={{ background: `url('${img}') center center/contain no-repeat` }}
      className="w-[392px] h-[280px] pt-6 pl-6"
    >
      {children}
    </div>
  );
}
