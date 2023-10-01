import React from 'react';

export const TreatmentByDiseasesCard = ({ imageSrc, title, description }) => {
  return (
    <div 
      style={{boxShadow: "0px 2px 10px 0px #60606026"}} 
      className="
        5xl:w-[32em]
        4xl:w-[30em]
        3xl:w-[27em]
        2xl:w-[24.5em] 
        xl:w-[22em] 
        lg:w-[16em] 
        md:w-[17.5em]
        sm:w-[15.5em]
        xs:w-[14em]
        2xs:w-[13em]
        3xs:w-[12em]
        4xl:h-[8em]
        2xl:h-[7em] 
        xl:h-[6em] 
        lg:h-[4.8em] 
        md:h-[6em] 
        sm:h-[6em]
        xs:h-[5em]
        3xs:h-[4em]
        mt-4 
        border-text-light 
        border-[0.1px] 
        rounded-lg 
        flex 
        flex-row"
      >
      <img src={imageSrc} alt={title} className="4xl:w-[8em] 2xl:w-[7em] xl:w-[6em] lg:w-[5em] md:w-[6em] sm:w-[6em] xs:w-[5em] 3xs:w-[4em] rounded-tl-lg rounded-br-lg" />
      <div className="flex flex-col justify-center font-[Poppins] lg:ml-2 md:ml-4 3xs:ml-2">
        <div className="text-buttonColor font-[500] 4xl:text-[19px] 2xl:text-[17px] xl:text-[15px] md:text-[12px] sm:text-[13px] xs:text-[13px] 2xs:text-[12px] 3xs:text-[11px]">
          {title}
        </div>
        <div className="
          font-[300] 
          text-text-light 
          4xl:text-[12px]
          2xl:text-[10px] 
          xl:text-[9px] 
          lg:text-[7px] 
          md:text-[10px]
          sm:text-[10px] 
          xs:text-[10px]
          2xs:text-[9px]
          3xs:text-[8px]
          md:mt-2 
          lg:w-[22em] 
          xl:w-[25em] 
          md:w-[15em]
          sm:w-[12em]
          xs:w-[12em]
          2xs:w-[14em]
          3xs:w-[12em]"
        >
          {description}
        </div>
      </div>
    </div>
  );
};
