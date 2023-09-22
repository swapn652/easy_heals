import React from 'react';

export const TreatmentBySymptomsCard = ({ imageSrc, title }) => {
  return (
    <div className="2xl:w-[10em] xl:w-[9em] lg:w-[7.2em] 2xl:h-[12em] xl:h-[11em] lg:h-[9em] border-2 border-black flex flex-col justify-center items-center">
      <img src={imageSrc} className="2xl:w-[10em] xl:w-[9em] lg:w-[7em] 2xl:h-[10.2em] xl:h-[9.2em] lg:h-[8.5em] border-2 border-black" alt={title} />
      <div className="font-[Poppins] xl:text-[18px] lg:text-[16px] font-[500]">{title}</div>
    </div>
  );
};
