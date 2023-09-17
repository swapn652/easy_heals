import React from 'react';

export const FeaturedServices = () => {
  const divStyle = {
    backgroundImage: `url('./FeaturedServices_bg.svg')`,
    backgroundSize: 'cover', // You can adjust this based on your image requirements
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div style={divStyle} className="relative w-screen 2xl:h-[40em] xl:h-[36em] lg:h-[30em] flex justify-center">
      <img 
        src="./plus_bg_6.svg" 
        className="
            absolute 
            left-0 
            2xl:-top-[14em] 
            xl:-top-[12.3em] 
            lg:-top-[10.6em] 
            2xl:w-52 
            xl:w-44 
            lg:w-36"
        />
      <div 
        style={{boxShadow: "0px 4px 40px 0px #60606040"}} 
        className="w-[90vw] 2xl:h-[38em] xl:h-[34em] lg:h-[28em] bg-white absolute -top-12 flex flex-col"
      >
        {/* Heading */}
        <div className="absolute top-10 flex items-center justify-center">
            <span className="2xl:w-[497.5px] xl:w-[441.8px] lg:w-[330.65px] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins font-semibold 2xl:text-[27px] xl:text-[23px] lg:text-[22px] mx-2">
                Featured Services
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="2xl:w-[497.5px] xl:w-[441.8px] lg:w-[330.65px] h-[1px] bg-text-light"></span>
        </div>

        {/* Carousel */}
        <div className="2xl:h-[20em] xl:h-[18em] lg:h-[14em] w-[80vw] bg-green2 absolute flex self-center xl:top-32 lg:top-28">

        </div>

        {/* Button */}
        <button className="
            lg:w-[14em] 
            h-[3em] 
            border-2 
            border-buttonColor 
            2xl:text-[16px] 
            xl:text-[14px] 
            lg:text-[12px] 
            font-[Poppins] 
            font-[700] 
            text-buttonColor 
            rounded-lg 
            absolute 
            2xl:top-[31.2em] 
            xl:top-[32.5em] 
            lg:top-[31em] 
            flex 
            self-center 
            justify-center 
            items-center"
        >
            Browse All Services
        </button>
      </div>
    </div>
  );
};
