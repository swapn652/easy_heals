import React from 'react'

export const TreatmentBySpeciality = () => {
    const divStyle = {
        backgroundImage: `url('./FeaturedServices_bg.svg')`,
        backgroundSize: 'cover', // You can adjust this based on your image requirements
        backgroundRepeat: 'no-repeat'
      };

  return (
    <div style={divStyle} className="relative w-screen xl:h-[27em] lg:h-[24em] flex justify-center">
        <img 
            src="./plus_bg_1.svg" 
            className="
                absolute 
                right-0 
                2xl:-top-[12.2em] 
                xl:-top-[10.3em] 
                lg:-top-[8.5em] 
                2xl:w-52 
                xl:w-44 
                lg:w-36"
            />
        <div 
            style={{boxShadow: "0px 4px 40px 0px #60606040"}}  
            className="absolute w-[90vw] xl:h-[25em] lg:h-[22em] bg-white -top-12"
        >
            <div className="absolute top-10 flex items-center justify-center">
                <span className="2xl:w-[497.5px] xl:w-[441.8px] lg:w-[330.65px] h-[1px] bg-text-light"></span>
                <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
                <span className="px-4 font-Poppins font-semibold 2xl:text-[27px] xl:text-[23px] lg:text-[22px] mx-2">
                    Featured Services
                </span>
                <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
                <span className="2xl:w-[497.5px] xl:w-[441.8px] lg:w-[330.65px] h-[1px] bg-text-light"></span>
            </div>
        </div>
 
        {/* Carousel */}
        <div className="xl:h-[9em] lg:h-[8em] w-[80vw] bg-green2 absolute flex self-center xl:top-20 lg:top-16">

        </div>

        {/* Button */}
        <button className="
            lg:w-[14em] 
            h-[3em] 
            border-2 
            border-green2 
            2xl:text-[16px] 
            xl:text-[14px] 
            lg:text-[12px] 
            font-[Poppins] 
            font-[700] 
            text-green2 
            rounded-lg 
            absolute 
            2xl:top-[16.5em] 
            xl:top-[19em] 
            lg:top-[19em] 
            flex 
            self-center 
            justify-center 
            items-center"
        >
            Browse All Specialities
        </button>
    </div>
  )
}
