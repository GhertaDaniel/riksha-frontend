import React from "react";

const FeaturedCard = ({ title, img, span, descr }) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="w-[72px] h-[72px] bg-[#E07153] rounded-full relative mt-4">
        <img src={img} alt="feature" className="absolute -top-0 -right-4" />
      </div>
      <span className="text-sm font-bold mt-2">{span}</span>
      <p className="font-normal text-sm">{descr}</p>
    </div>
  );
};

export default FeaturedCard;
