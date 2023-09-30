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
    // Close the treatment dropdown when location is opened
    setTreatmentDropDown(false);
  };

  const treatmentOnChange = (e) => {
    const value = e.target.value;
    setTreatment(value);
    setTreatmentDropDown(value);
    // Close the location dropdown when treatment is opened
    setLocationDropDown(false);
  };

  return (
    <div 
      style={{boxShadow: "0px 4px 40px 0px #39393933"}} 
      className="
        z-20 
        xl:left-16 
        lg:left-12 
        flex 
        flex-row 
        2xl:w-[47em] 
        xl:w-[41em] 
        lg:w-[32em] 
        md:w-[45em] 
        sm:w-[22em] 
        xl:h-[5.5em] 
        lg:h-[4em] 
        md:h-[6em] 
        sm:h-[4em] 
        bg-white 
        border-[0.1px] 
        border-text-light 
        font-[Raleway] 
        rounded-2xl 
        relative"
    >
      
      {/* Location Section */}
      <div className="flex flex-col relative">

        {/* Location Heading */}
        <div className="
          absolute 
          text-green2 
          2xl:text-[12px] 
          xl:text-[11px] 
          lg:text-[9px] 
          font-bold 
          2xl:top-[1.8em] 
          xl:top-[1.9em] 
          lg:top-[1.3em] 
          md:top-[1em] 
          2xl:left-8 
          xl:left-6 
          lg:left-4 
          md:left-8"
        >
          Location
        </div>

        {/* Location Input */}
        <input
          onChange={locationOnChange}
          placeholder="Search Location"
          className="
            absolute 
            bg-white 
            2xl:text-[15px] 
            xl:text-[14px] 
            lg:text-[11px] 
            focus:outline-none 
            xl:w-28 lg:w-[7.3em] 
            placeholder:text-black 
            2xl:top-[3em] 
            xl:top-[3.1em] 
            lg:top-[2.7em] 
            md:top-[2.8em] 
            2xl:left-8 
            xl:left-6 
            lg:left-4 
            md:left-8"
        />

        {/* Location Dropdown */}
        {locationDropDown && (
          <div 
            style={{boxShadow: "0px 4px 40px 0px #39393933"}} 
            className="
              absolute 
              2xl:h-52 
              xl:h-48 
              lg:h-44 
              md:h-[14em] 
              2xl:w-[13em] 
              xl:w-44 
              lg:w-36 
              md:w-52 
              bg-white 
              border-[0.1px] 
              border-text-light 
              xl:top-24 
              lg:top-[4.3em] 
              md:top-[6.6em] 
              rounded-2xl 
              font-[Raleway]"
            >
            {/* Location dropdown content */}
            <div className="flex flex-col">
              {/* Current location  */}
              <div className="flex flex-row items-center absolute top-4 2xl:left-6 xl:left-4 lg:left-[1em] md:left-[1em]">
                <img 
                  src="./location-crosshairs.png" 
                  alt="location crosshairs" 
                  className="2xl:w-4 xl:w-[1em] lg:w-[0.7em] 2xl:h-4 xl:h-[1em] lg:h-[0.7em]" 
                />
                <div className="text-buttonColor 2xl:text-[16px] xl:text-[14px] lg:text-[12px] font-semibold xl:ml-2 lg:ml-[0.4em] md:ml-[0.4em]">
                  Current Location
                </div>
              </div>

              <div className="
                xl:text-[10px] 
                lg:text-[8px] 
                text-text-light 
                absolute 
                xl:top-12 
                lg:top-10 
                md:top-12 
                2xl:left-6 
                xl:left-4 
                lg:left-[2em] 
                md:left-[1.2em]"
              >
                Popular Searches
              </div>

              {/* Searched Locations */}
              <div className="absolute xl:top-[4.5em] lg:top-[3.6em] md:top-[4.5em] 2xl:left-6 xl:left-4 lg:left-[1em] md:left-[1.2em]">
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
      <div className="
        absolute 
        xl:h-[2.3em] 
        lg:h-[1.7em] 
        md:h-[2.5em] 
        w-[0.5px] 
        bg-text-light 
        2xl:left-48 
        xl:left-40 
        lg:left-32 
        md:left-48 
        flex 
        self-center 
        xl:top-[1.8em] 
        md:top-[1.6em]"
      >
      </div>
      
      {/* Treatment Section*/}
      <div className="flex flex-col relative">
      {/* Treatment/Doctor/Hospital/Lab Tests Heading */}
        <div className="
          absolute w-72 
          text-green2 
          2xl:text-[12px] 
          xl:text-[11px] 
          lg:text-[9px] 
          font-bold 
          2xl:top-[1.8em] 
          xl:top-[1.9em] 
          lg:top-[1.3em] 
          md:top-[1em] 
          2xl:left-52 
          xl:left-44 
          lg:left-36 
          md:left-52"
        >
          Treatment/Doctor/Hospital/Lab Tests
        </div>
        
        {/* Treatment/Doctor/Hospital/Lab Tests Input */}
        <input
          onChange={treatmentOnChange}
          placeholder="Search by Symptoms, Diseases, Specialties, etc."
          className="
            absolute 
            bg-white 
            2xl:text-[15px] 
            xl:text-[14px] 
            lg:text-[11px] 
            focus:outline-none 
            w-[22em] 
            placeholder:text-black 
            2xl:top-[3em] 
            xl:top-[3.1em] 
            lg:top-[2.7em] 
            md:top-[2.8em] 
            2xl:left-52 
            xl:left-44 
            lg:left-36 
            md:left-52" 
        />

        {/* Treatment/Doctor/Hospital/Lab Tests dropdown */}
        {treatmentDropDown && (
          <div style={{boxShadow: "0px 4px 40px 0px #39393933"}} className="absolute xl:w-96 xl:h-52 lg:w-60 md:w-96 lg:h-44 md:h-[14em] bg-white border-[0.1px] border-text-light 2xl:left-52 xl:left-44 lg:left-36 md:left-52 xl:top-24 lg:top-[4.3em] md:top-[6.6em] rounded-2xl font-Raleway">
            
          </div>
        )}
      </div>

      <button className="
        absolute 
        right-4 
        2xl:top-6 
        xl:top-[2.1em] 
        lg:top-[1.7em] 
        md:top-[1.7em] 
        py-2 2xl:w-32 
        xl:w-28 
        lg:w-16 
        md:w-24 
        bg-buttonColor 
        text-white 
        font-[Poppins] 
        font-bold 
        2xl:text-base 
        xl:text-[13px] 
        lg:text-[10px] 
        rounded-lg"
      >
        Search
      </button>
    </div>
  );
};
