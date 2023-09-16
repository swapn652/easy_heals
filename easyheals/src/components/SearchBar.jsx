// import React from 'react'

// export const SearchBar = () => {
//   return (
//     <div className="2xl:w-[47em] xl:w-[37em] lg:w-[30em] md:w-[23em] sm:w-[22em] xl:h-[5.5em] md:h-[4em] sm:h-[4em] bg-green rounded-xl">

//     </div>
//   )
// }

import React, { useState } from "react";

export const SearchBar = () => {
  const [locationDropDown, setLocationDropDown] = useState(false);
  const [location, setLocation] = useState("");
  const [treatment, setTreatment] = useState("");
  const [treatmentDropDown, setTreatmentDropDown] = useState(false);

  const locations = ["New Delhi", "Mumbai", "Chandigarh", "Rajasthan"];

  const locationOnChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    setLocationDropDown(value);
  };

  const treatmentOnChange = (e) => {
    const value = e.target.value;
    setTreatment(value);
    setTreatmentDropDown(value);
  };

  return (
    <div className="z-20 flex flex-row 2xl:w-[47em] xl:w-[39em] lg:w-[30em] md:w-[23em] sm:w-[22em] xl:h-[5.5em] md:h-[4em] sm:h-[4em] bg-cyan font-[Raleway] rounded-2xl relative">
      {/* Location Section */}
      <div className="flex flex-col">
        <div className="absolute text-green2 2xl:text-[12px] xl:text-[11px] lg:text-[9px] font-bold 2xl:top-[1.8em] xl:top-[1.9em] lg:top-[1.3em] 2xl:left-8 xl:left-6 lg:left-4">
          Location
        </div>
        <input
          onChange={locationOnChange}
          placeholder="Search Location"
          className="absolute bg-cyan 2xl:text-[15px] xl:text-[14px] lg:text-[11px] focus:outline-none xl:w-28 lg:w-[7.3em] placeholder:text-black 2xl:top-[3em] xl:top-[3.1em] lg:top-[2.7em] 2xl:left-8 xl:left-6 lg:left-4"
        />
        {locationDropDown && (
          <div className="absolute 2xl:h-52 xl:h-48 lg:h-44 2xl:w-[13em] xl:w-44 lg:w-36 bg-cyan xl:top-24 lg:top-[4.3em] rounded-2xl font-Raleway">
            {/* Location dropdown content */}
            <div className="flex flex-col">
              <div className="flex flex-row items-center absolute top-4 2xl:left-6 xl:left-4 lg:left-[1em]">
                <img src="./location-crosshairs.png" alt="location crosshairs" className="2xl:w-4 xl:w-[1em] lg:w-[0.7em] 2xl:h-4 xl:h-[1em] lg:h-[0.7em]" />
                <div className="text-buttonColor 2xl:text-[16px] xl:text-[14px] lg:text-[12px] font-semibold xl:ml-2 lg:ml-[0.4em]">Current Location</div>
              </div>
              <div className="xl:text-[10px] lg:text-[8px] text-text-light absolute xl:top-12 lg:top-10 2xl:left-6 xl:left-4 lg:left-[2em]">
                Popular Searches
              </div>
              <div className="absolute xl:top-[4.5em] lg:top-[3.6em] 2xl:left-6 xl:left-4 lg:left-[1em]">
                {locations.map((location) => (
                  <div className="py-[4px] 2xl:text-[15px] xl:text-[13px] lg:text-[12px]" key={location}>
                    {location}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Separator */}
      <div className="absolute xl:h-[2.3em] lg:h-[1.7em] w-[0.5px] bg-text-light 2xl:left-48 xl:left-40 lg:left-32 flex self-center xl:top-[1.8em]"></div>
      
      {/* Treatment Section*/}
      <div className="flex flex-col">
        <div className="absolute text-green2 2xl:text-[12px] xl:text-[11px] lg:text-[9px] font-bold 2xl:top-[1.8em] xl:top-[1.9em] lg:top-[1.3em] 2xl:left-52 xl:left-44 lg:left-36">
          Treatment/Doctor/Hospital/Lab Tests
        </div>
        <input
          onChange={treatmentOnChange}
          placeholder="Search by Symptoms, Diseases, Specialties, etc."
          className="absolute bg-cyan 2xl:text-[15px] xl:text-[14px] lg:text-[11px] focus:outline-none w-[22em] placeholder:text-black 2xl:top-[3em] xl:top-[3.1em] lg:top-[2.7em] 2xl:left-52 xl:left-44 lg:left-36" 
        />
        {treatmentDropDown && (
          <div className="absolute xl:w-96 xl:h-52 lg:w-60 lg:h-44 bg-cyan 2xl:left-52 xl:left-44 lg:left-36 xl:top-24 lg:top-[4.3em] rounded-2xl font-Raleway">
            
          </div>
        )}
      </div>

      <button className="absolute right-4 2xl:top-6 xl:top-[2.1em] lg:top-[1.7em] py-2 2xl:w-32 xl:w-28 lg:w-16 bg-buttonColor text-white font-[Poppins] font-bold 2xl:text-base xl:text-[13px] lg:text-[10px] rounded-lg">
        Search
      </button>
    </div>
  );
};
