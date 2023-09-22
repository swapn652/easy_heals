import React from 'react'

export const LabTests = () => {
    const divStyle = {
        backgroundImage: `url('./FeaturedServices_bg.svg')`,
        backgroundSize: 'cover', // You can adjust this based on your image requirements
        backgroundRepeat: 'no-repeat'
      };

  return (
    <div className="relative w-screen 2xl:h-[44em] xl:h-[42em] lg:h-[36em] flex flex-row justify-center font-[Raleway]">
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
        <div style={divStyle} className="absolute w-screen 2xl:h-[27em] xl:h-[25em] lg:h-[21em] flex flex-row justify-center xl:top-[17em] lg:top-[15em]">
            <div className="absolute flex flex-row top-12">
                <img src="./LabTestCard.svg" className="2xl:w-[27em] xl:w-[24em] lg:w-[19em]"/>
                <img src="./LabTestCard.svg" className="2xl:w-[27em] xl:w-[24em] lg:w-[19em]"/>
                <img src="./LabTestCard.svg" className="2xl:w-[27em] xl:w-[24em] lg:w-[19em]"/>
            </div>

            <div className="
            absolute 
            flex 
            flex-row 
            justify-center 
            gap-x-10 
            2xl:top-[22em] 
            xl:top-[19.5em] 
            lg:top-[16.5em]"
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
