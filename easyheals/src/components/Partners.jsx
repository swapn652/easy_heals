import React from 'react';

export const Partners = () => {
  return (
    <div>
        {/* Heading */}
        <div className="flex items-center justify-center">
          <span className="2xl:w-[490px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
          <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
          <span className="px-4 font-Poppins font-semibold 2xl:text-[27px] xl:text-[23px] lg:text-[22px] mx-2">
            Our Trusted Partners
          </span>
          <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
          <span className="2xl:w-[490px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
        </div>

        {/* Partners logos */}
        <div className="flex flex-row justify-between xl:mx-36 lg:mx-24 xl:mt-10 lg:mt-6">
            <img src="./partners/ruby.svg" alt="Ruby Hall Clinic" className="xl:w-48 lg:w-36" />
            <img src="./partners/agarwal.svg" alt="Dr. Agarwals" className="xl:w-44 lg:w-32"/>
            <img src="./partners/unity.svg" alt="Unity Hospital" className="xl:w-36 lg:w-24"/>
            <img src="./partners/orion.svg" alt="Orion Hospital" className="xl:w-36 lg:w-20"/>
            <img src="./partners/sahyadri.svg" alt="Sahyadri Hospitals" className="w-32"/>
        </div>
    </div>
  );
};
