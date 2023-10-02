import React, { useState } from 'react';
import { FilterTreatment } from './FilterTreatment';
import PriceFilterSlider from './PriceFilterSlider';
import { Navbar } from './Navbar';
import { TreatmentContent } from './TreatmentContent';
import { DoctorContent } from './DoctorContent';
import { HospitalContent } from './HospitalContent';
import { LabTestContent } from './LabTestContent';



export const TreatmentPage = () => {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState('Treatment');

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-row mt-[4em]">
      <div className="flex flex-col border-r-[0.5px] border-text-light h-screen w-[20vw] overflow-scroll">
        <FilterTreatment />
      </div>
      <div className="flex flex-col h-screen w-[55vw] overflow-y-auto">
        <Navbar
          selectedOption={selectedOption}
          onSelect={handleOptionSelect}
        />
        {/* Conditionally render content based on selected option */}

        {selectedOption === 'Treatment' && <TreatmentContent />}
        {selectedOption === 'Doctor' && <DoctorContent />}
        {selectedOption === 'Hospital' && <HospitalContent />}
        {selectedOption === 'LabTest' && <LabTestContent />}
      </div>
      <div className="flex flex-col h-screen w-[25vw] gap-y-10">
        <img src="./treatment-banner-1.svg" />
        <img src="./treatment-banner-2.svg" />
        <img src="./treatment-banner-3.svg" />
      </div>
    </div>
  );
};
