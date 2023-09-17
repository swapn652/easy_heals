import React from 'react'

export const LabTests = () => {
    const divStyle = {
        backgroundImage: `url('./FeaturedServices_bg.svg')`,
        backgroundSize: 'cover', // You can adjust this based on your image requirements
        backgroundRepeat: 'no-repeat'
      };

  return (
    <div className="relative w-screen 2xl:h-[40em] xl:h-[30em] lg:h-[23em] flex flex-row justify-center font-[Raleway]">
        {/* Heading */}
        <div className="flex items-center justify-center absolute top-44">
            <span className="2xl:w-[540px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins font-semibold 2xl:text-[27px] xl:text-[23px] lg:text-[22px] mx-2">
                Lab Tests
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="2xl:w-[540px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
        </div>
        <div style={divStyle} className="absolute w-screen xl:h-[27em] lg:h-[24em] flex flex-row justify-center top-[17em]">
            <div className="absolute flex flex-row top-12">
                <img src="./LabTestCard.svg" className="w-[27em]"/>
                <img src="./LabTestCard.svg" className="w-[27em]"/>
                <img src="./LabTestCard.svg" className="w-[27em]"/>
            </div>

            <div className="
            absolute 
            flex 
            flex-row 
            justify-center 
            gap-x-10 
            2xl:top-[22em] 
            xl:top-[27em] 
            lg:top-[25em]"
        >
            <button className="
                lg:w-[12em] 
                h-[3em] 
                bg-buttonColor 
                text-white 
                2xl:text-[14px] 
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
                lg:w-[12em] 
                h-[3em] border-2 
                border-buttonColor 
                2xl:text-[14px] 
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
    
    </div>
  )
}
