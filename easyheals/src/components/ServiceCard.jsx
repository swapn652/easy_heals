import React from 'react';

export const ServiceCard = ({ imageUrl, heading, description }) => {
  return (
    <div className="flex flex-col 2xl:h-28 py-4 xl:h-24 2xl:w-[15em] xl:w-[13em] lg:w-[12em] md:w-[16em] bg-cyan px-6 rounded-lg font-[Raleway]">
      <div className="flex flex-row items-center">
        <img src={imageUrl} alt={heading} className="lg:w-8 xl:w-[2.2em]"/> {/* Use the imageUrl prop */}
        <div className="ml-2 font-bold 2xl:text-[15px] xl:text-[13px] lg:text-[11px]">{heading}</div> {/* Use the heading prop */}
      </div>
      <div className="mt-2 2xl:text-[10px] xl:text-[8px] lg:text-[7px]">
        {description} {/* Use the description prop */}
      </div>
    </div>
  );
};