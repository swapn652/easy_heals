import React from 'react'

export const BookConsultation = () => {
  return (
    <div style={{fontFamily: 'Raleway'}} className="relative flex flex-col mt-20 ml-20">
        <div className="absolute xl:w-32 lg:w-24 md:w-24 sm:w-16 sm:-ml-20">
            <img src="./plus_bg_2.png" alt="plus_bg_2"/>
        </div>
        <div style={{fontWeight: 700}} className="absolute 2xl:text-[38px] xl:text-[30px] lg:text-[26px] md:text-[22px] sm:text-[18px] xl:mt-24 md:mt-[4.75rem] sm:mt-12 xl:-ml-4 md:-ml-10 sm:-ml-8">
            <div>
                <span className="text-green2">Compare and Book</span> any Hospital, Doctor
            </div>
            <div>
                & Diagnostics anytime and anywhere
            </div>
        </div>
        <div className="hidden md:block absolute 2xl:text-[16.5px] xl:text-[12px] lg:text-[11.2px] md:text-[9.5px] 2xl:mt-52 xl:mt-48 lg:mt-[10rem] md:mt-[9.5rem] xl:-ml-4 md:-ml-10">
            <div>
                Taking care of your well being has never been easier. Book any service with utmost
            </div>
            <div>
                convenience through easyheals
            </div>
        </div>
    </div>
  )
}
