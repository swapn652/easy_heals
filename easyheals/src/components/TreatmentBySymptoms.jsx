import React from 'react'

export const TreatmentBySymptoms = () => {
  return (
    <div className="relative w-screen 2xl:h-[40em] xl:h-[38em] lg:h-[37em] flex justify-center">
        {/* Heading */}
        <div className="flex items-center justify-center absolute top-20">
            <span className="2xl:w-[460px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins font-semibold 2xl:text-[27px] xl:text-[23px] lg:text-[22px] mx-2">
                Treatment By Symptoms
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="2xl:w-[460px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
        </div>

        {/* Carousel */}
        <div className="w-[90vw] xl:h-[13em] lg:h-[11em] bg-green2 absolute top-44">

        </div>

        {/* Buttons */}
        <div className="
            absolute 
            flex 
            flex-row 
            justify-center 
            gap-x-10 
            2xl:top-[28em] 
            xl:top-[27em] 
            lg:top-[25em]"
        >
            <button className="
                lg:w-[14em] 
                h-[3em] 
                bg-buttonColor 
                text-white 
                2xl:text-[16px] 
                xl:text-[14px] 
                lg:text-[12px] 
                font-[Poppins] 
                font-[700] 
                rounded-lg 
                flex 
                justify-center 
                items-center"
            >
                Book Appointment
            </button>

            <button className="
                lg:w-[14em] 
                h-[3em] border-2 
                border-buttonColor 
                2xl:text-[16px] 
                xl:text-[14px] 
                lg:text-[12px] 
                font-[Poppins] 
                font-[700] 
                text-buttonColor 
                rounded-lg flex 
                justify-center 
                items-center"
            >
                Browse Symptoms
            </button>
        </div>
    </div>
  )
}
