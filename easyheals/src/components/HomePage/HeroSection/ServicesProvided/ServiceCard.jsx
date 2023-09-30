import React from 'react';

export const ServiceCard = ({ imageUrl, heading, description }) => {
  return (
    <div 
      className="
        flex 
        flex-col 
        2xl:h-28 
        py-4 
        xl:h-24 
        2xl:w-[15em]
        xl:w-[13em]
        lg:w-[12em]
        md:w-[20em]
        sm:w-[80.62vw]
        xs:w-[87.6vw]
        2xs:w-[87vw]
        3xs:w-[86.5vw]
        bg-white 
        border-[0.1px] 
        border-text-light 
        md:px-6 
        rounded-lg 
        font-[Raleway]"
      >
      <div className="flex flex-row items-center ml-4 md:ml-0">
        <img src={imageUrl} alt={heading} className="xl:w-[2.2em] lg:w-8 md:w-[2.5em] 3xs:w-[2.5em]"/> {/* Use the imageUrl prop */}
        <div className="ml-2 font-bold 2xl:text-[15px] xl:text-[13px] lg:text-[11px] 3xs:text-[18px]">
            {heading}
        </div> {/* Use the heading prop */}
      </div>
      <div className="mt-2 2xl:text-[10px] xl:text-[8px] lg:text-[7px] md:text-[14px] 3xs:text-[14px] ml-4 md:ml-0 md:w-[19em] sm:w-[22em] 2xs:w-[20em] 3xs:w-[20em] xs:w-[22em]">
        {description} {/* Use the description prop */}
      </div>
    </div>
  );
};
