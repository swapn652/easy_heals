import React from 'react';

export const Partners = () => {
  return (
    <div>
        <div className="flex items-center justify-center">
        <span className="2xl:w-[520px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
        <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
        <span className="px-4 font-Poppins font-semibold xl:text-xl lg:text-lg mx-2">Our Trusted Partners</span>
        <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
        <span className="2xl:w-[520px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
        </div>
        <div className="flex flex-row justify-between xl:mx-24 lg:mx-16 mt-10">
            <img src="./partners/ruby.svg" alt="Ruby Hall Clinic" className="xl:w-48 lg:w-44" />
            <img src="./partners/agarwal.svg" alt="Dr. Agarwals" className="xl:w-44 lg:w-40"/>
            <img src="./partners/unity.svg" alt="Unity Hospital" className="xl:w-36 lg:w-32"/>
            <img src="./partners/orion.svg" alt="Orion Hospital" className="xl:w-36 lg:w-28"/>
            <img src="./partners/sahyadri.svg" alt="Sahyadri Hospitals" className="w-32"/>
        </div>
    </div>
  );
};
