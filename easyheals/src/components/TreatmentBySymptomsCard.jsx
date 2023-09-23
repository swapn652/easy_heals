import React from 'react';

export const TreatmentBySymptomsCard = ({ imageSrc, title }) => {
  return (
    <div className="2xl:w-[9.2em] xl:w-[7.45em] lg:w-[5.75em] 2xl:h-[12em] xl:h-[10em] lg:h-[8em] flex flex-col justify-center items-center rounded-xl">
      <img src={imageSrc} className="2xl:w-[10em] xl:w-[9em] lg:w-[7em] 2xl:h-[9.5em] xl:h-[9.2em] lg:h-[8.5em] rounded-xl" alt={title} />
      <div className="font-[Poppins] xl:text-[18px] lg:text-[14px] font-[500] mt-4">{title}</div>
    </div>
  );
};
