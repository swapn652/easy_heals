import React from 'react';

export const ServiceCard = ({ imageUrl, heading, description }) => {
  return (
    <div 
      style={{boxShadow: "0px 4px 40px 0px #39393933"}} 
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
        sm:w-[20em]
        bg-white 
        border-[0.1px] 
        border-text-light 
        md:px-6 
        rounded-lg 
        font-[Raleway]"
      >
      <div className="flex flex-row items-center ml-4 md:ml-0">
        <img src={imageUrl} alt={heading} className="xl:w-[2.2em] lg:w-8 md:w-[2.5em] sm:w-[2em]"/> {/* Use the imageUrl prop */}
        <div className="ml-2 font-bold 2xl:text-[15px] xl:text-[13px] lg:text-[11px] md:text-[18px] sm:text-[16px]">
            {heading}
        </div> {/* Use the heading prop */}
      </div>
      <div className="mt-2 2xl:text-[10px] xl:text-[8px] lg:text-[7px] md:text-[14px] sm:text-[12px] ml-4 md:ml-0 w-[23em] md:w-[19em]">
        {description} {/* Use the description prop */}
      </div>
    </div>
  );
};
