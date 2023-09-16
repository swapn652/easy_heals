import React, { useState } from "react";

export const SearchBarTest = () => {
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
    <div className="flex flex-row w-[47em] h-[5.5em] bg-cyan font-[Raleway] rounded-2xl relative">
      <div className="flex flex-col">
        {/* Location Dropdown */}
        <div className="absolute text-green2 text-[12px] font-bold top-[1.8em] left-8">
          Location
        </div>
        <input
          onChange={locationOnChange}
          placeholder="Search Location"
          className="absolute bg-cyan text-[15px] focus:outline-none w-28 placeholder:text-black top-[3em] left-8"
        />
        {locationDropDown && (
          <div className="absolute h-52 w-56 bg-cyan top-24 rounded-2xl font-Raleway">
            {/* Location dropdown content */}
            <div className="flex flex-col">
              <div className="flex flex-row items-center absolute top-4 left-8">
                <img src="./location-crosshairs.png" alt="location crosshairs" className="w-4 h-4" />
                <div className="text-buttonColor text-[16px] font-semibold ml-2">Current Location</div>
              </div>
              <div className="text-[10px] text-text-light absolute top-12 left-8">
                Popular Searches
              </div>
              <div className="absolute top-[4.5em] left-8">
                {locations.map((location) => (
                  <div className="py-[4px] text-[15px]" key={location}>
                    {location}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Separator */}
      <div className="absolute h-[2.3em] w-[0.5px] bg-text-light left-48 flex self-center top-[1.8em]"></div>

      <div className="flex flex-col">
        {/* Treatment Dropdown */}
        <div className="absolute text-green2 text-[12px] font-bold top-[1.8em] left-52">
          Treatment/Doctor/Hospital/Lab Tests
        </div>
        <input
          onChange={treatmentOnChange}
          placeholder="Search by Symptoms, Diseases, Specialties, etc."
          className="absolute bg-cyan text-[15px] focus:outline-none w-[22em] placeholder:text-black top-[3em] left-52"
        />
        {treatmentDropDown && (
          <div className="absolute w-96 h-56 bg-cyan left-52 top-24 rounded-2xl font-Raleway">
            
          </div>
        )}
      </div>

      <button className="absolute right-4 top-6 py-2 w-32 bg-buttonColor text-white font-[Poppins] font-bold rounded-lg">
        Search
      </button>
    </div>
  );
};
