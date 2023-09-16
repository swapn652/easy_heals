import React from 'react';

export const Partners = () => {
  return (
    <div>
        <div className="flex items-center justify-center">
        <span className="w-[520px] h-[1px] bg-text-light"></span>
        <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
        <span className="px-4 font-Poppins font-semibold text-2xl mx-2">Our Trusted Partners</span>
        <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
        <span className="w-[520px] h-[1px] bg-text-light"></span>
        </div>
        <div className="flex flex-row justify-between mx-24 mt-10">
            <img src="./partners/ruby.svg" alt="Ruby Hall Clinic" className="w-48" />
            <img src="./partners/agarwal.svg" alt="Dr. Agarwals" className="w-44"/>
            <img src="./partners/unity.svg" alt="Unity Hospital" className="w-36"/>
            <img src="./partners/orion.svg" alt="Orion Hospital" className="w-36"/>
            <img src="./partners/sahyadri.svg" alt="Sahyadri Hospitals" className="w-32"/>
        </div>
    </div>
  );
};
