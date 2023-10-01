import React from 'react';

export const Partners = () => {
  return (
    <div>
        {/* Heading */}
        <div className="flex items-center justify-center">
          <span className="4xl:w-[34vw] 3xl:w-[32vw] 2xl:w-[490px] xl:w-[32vw] lg:w-[320px] 2md:w-[32.4vw] md:w-[31.2vw] h-[1px] bg-text-light"></span>
          <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
          <span className="px-4 font-Poppins font-semibold 4xl:text-[34px] 3xl:text-[30px] 2xl:text-[27px] xl:text-[23px] md:text-[22px] mx-2">
            Our Trusted Partners
          </span>
          <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
          <span className="4xl:w-[34vw] 3xl:w-[32vw] 2xl:w-[490px] xl:w-[32vw] lg:w-[320px] 2md:w-[32.4vw] md:w-[31.2vw] h-[1px] bg-text-light"></span>
        </div>

        {/* Partners logos */}
        <div className="flex flex-row justify-between xl:mx-36 lg:mx-24 md:mx-16 xl:mt-10 md:mt-6">
            <img src="./partners/ruby.svg" alt="Ruby Hall Clinic" className="4xl:w-60 3xl:w-52 xl:w-48 lg:w-36 md:w-32" />
            <img src="./partners/agarwal.svg" alt="Dr. Agarwals" className="4xl:w-54 3xl:w-48 xl:w-44 lg:w-32 md:w-28"/>
            <img src="./partners/unity.svg" alt="Unity Hospital" className="4xl:w-48 3xl:w-40 xl:w-36 lg:w-24 md:w-20"/>
            <img src="./partners/orion.svg" alt="Orion Hospital" className="4xl:w-48 3xl:w-40 xl:w-36 lg:w-20 md:w-16"/>
            <img src="./partners/sahyadri.svg" alt="Sahyadri Hospitals" className="4xl:w-44 3xl:w-36 lg:w-32 md:w-24"/>
        </div>
    </div>
  );
};
