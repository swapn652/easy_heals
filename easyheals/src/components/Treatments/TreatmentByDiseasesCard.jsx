import React from 'react';

export const TreatmentByDiseasesCard = ({ imageSrc, title, description }) => {
  return (
    <div style={{boxShadow: "0px 2px 10px 0px #60606026"}} className="2xl:w-[24.5em] xl:w-[22em] lg:w-[16em] 2xl:h-[7em] xl:h-[6em] lg:h-[4.8em] mt-4 border-text-light border-[0.1px] rounded-lg flex flex-row">
      <img src={imageSrc} alt={title} className="lg:w-[5em] xl:w-[6em] 2xl:w-[7em]" />
      <div className="flex flex-col justify-center font-[Poppins] ml-2">
        <div className="text-buttonColor font-[500] 2xl:text-[17px] xl:text-[15px] lg:text-[12px]">
          {title}
        </div>
        <div className="font-[300] text-text-light 2xl:text-[10px] xl:text-[9px] lg:text-[7px] mt-2 lg:w-[22em] xl:w-[25em]">
          {description}
        </div>
      </div>
    </div>
  );
};
