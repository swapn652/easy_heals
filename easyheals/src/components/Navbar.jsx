import React from 'react';

export const Navbar = ({ selectedOption, onSelect }) => {
  return (
    <div className="
      flex 
      flex-row 
      mx-auto 
      items-center
      pl-8
      gap-x-6
      py-[1em]
      w-[85%] 
      h-[3em] 
      bg-[#FBFBFB] 
      mt-[2em] 
      border-[0.5px] 
      border-[#D6D6D6] 
      rounded-lg
      font-[Poppins]
      text-[1.1vw]
      font-[300]
      text-text-light"
    >
      <div
        className={`cursor-pointer px-[6px]  ${selectedOption === 'Treatment' ? 'bg-white py-[4px] border-[0.5px] border-text-light rounded-md text-buttonColor' : 'hover:text-buttonColor'}`}
        onClick={() => onSelect('Treatment')}
      >
        Treatment
      </div>
      <div
        className={`cursor-pointer px-[6px] ${selectedOption === 'Doctor' ? 'bg-white py-[4px] px-[6px] border-[0.5px] border-text-light rounded-md text-buttonColor' : 'hover:text-buttonColor'}`}
        onClick={() => onSelect('Doctor')}
      >
        Doctor
      </div>
      <div
        className={`cursor-pointer px-[6px] ${selectedOption === 'Hospital' ? 'bg-white py-[4px] px-[6px] border-[0.5px] border-text-light rounded-md text-buttonColor' : 'hover:text-buttonColor'}`}
        onClick={() => onSelect('Hospital')}
      >
        Hospital
      </div>
      <div
        className={`cursor-pointer px-[6px] ${selectedOption === 'LabTest' ? 'bg-white py-[4px] px-[6px] border-[0.5px] border-text-light rounded-md text-buttonColor' : 'hover:text-buttonColor'}`}
        onClick={() => onSelect('LabTest')}
      >
        Lab Test
      </div>
    </div>
  );
};

