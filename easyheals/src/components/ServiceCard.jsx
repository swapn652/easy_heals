import React from 'react';

export const ServiceCard = ({ imageUrl, heading, description }) => {
  return (
    <div className="flex flex-col 2xl:h-28 xl:h-24 2xl:w-[14.5em] xl:w-[12em] lg:w-[11em] md:w-[21em] bg-cyan p-2 rounded-lg">
      <div className="flex flex-row items-center px-2">
        <img src={imageUrl} alt={heading} className="lg:w-8 xl:w-10"/> {/* Use the imageUrl prop */}
        <div className="2xl:ml-4 ml-2 font-bold 2xl:text-[15px] xl:text-[11px] lg:text-[11px]">{heading}</div> {/* Use the heading prop */}
      </div>
      <div className="mt-2 2xl:text-[10.5px] xl:text-[8px] lg:text-[7px] px-2">
        {description} {/* Use the description prop */}
      </div>
    </div>
  );
};