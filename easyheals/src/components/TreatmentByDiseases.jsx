import React from 'react'

export const TreatmentByDiseases = () => {
  return (
    <div className="relative w-screen 2xl:h-[32em] xl:h-[28em] lg:h-[21em] flex justify-center font-[Raleway]">
        {/* Heading */}
        <div className="flex items-center justify-center absolute top-20">
            <span className="2xl:w-[460px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins font-semibold 2xl:text-[27px] xl:text-[23px] lg:text-[22px] mx-2">
                Treatment By Diseases
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="2xl:w-[460px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
        </div>

         {/* Carousel */}
         <div className="2xl:h-[20em] xl:h-[18em] lg:h-[14em] w-[80vw] bg-green2 absolute flex self-center 2xl:top-48 xl:top-40 lg:top-36">
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
            xl:top-[34em] 
            lg:top-[33em] 
            flex 
            self-center 
            justify-center 
            items-center"
        >
            View all Diseases
        </button>
    </div>
  )
}
