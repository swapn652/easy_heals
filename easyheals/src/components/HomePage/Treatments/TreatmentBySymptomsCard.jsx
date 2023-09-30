import React from 'react';

export const TreatmentBySymptomsCard = ({ imageSrc, title }) => {
  return (
    <div className="
      2xl:w-[9.2em] 
      xl:w-[7.45em] 
      lg:w-[5.75em] 
      md:w-[6em] 
      sm:w-[7em]
      xs:w-[6.5em]
      2xs:w-[6em]
      3xs:w-[6em]
      2xl:h-[12em] 
      xl:h-[10em] 
      lg:h-[8em] 
      md:h-[8em]
      sm:h-[11em]
      xs:h-[10em]
      2xs:h-[9em]
      3xs:h-[8em]
      flex 
      flex-col 
      justify-center 
      items-center 
      rounded-xl ">
      <img src={imageSrc} className="2xl:w-[10em] xl:w-[9em] lg:w-[7em] md:w-[8em] 2xl:h-[9.5em] xl:h-[9.2em] lg:h-[8.5em] md:h-[8em] rounded-xl" alt={title} />
      <div className="font-[Poppins] xl:text-[18px] lg:text-[14px] md:text-[16px] sm:text-[16px] xs:text-[15px] 3xs:text-[14px] font-[500] md:mt-4 mt-2">{title}</div>
    </div>
  );
};
