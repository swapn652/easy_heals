import React from 'react';

export const OfferCard = ({ imageUrl, heading }) => {
  return (
    <div className="flex flex-row xl:w-40 lg:w-32 md:w-24 sm:w-28 2xl:h-16 lg:h-14 md:h-12 sm:h-12 border-2 border-green rounded-2xl justify-center items-center font-[Poppins] px-2 text-[11.5px]">
      <img src={imageUrl} alt="icon" className="2xl:h-8 xl:h-6 lg:h-[2em] md:h-[1.5em] sm:h-[2em]" />
      <div className="pl-2 xl:text-[11.5px] lg:text-[8.5px] md:text-[7px] sm:text-[8px] font-bold">
        {heading}
      </div>
    </div>
  );
};
