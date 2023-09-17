import React from 'react'

export const MedicalProfessionals = () => {
  return (
    // Parent Container, made flex row to align text on left and doctors carousel on right
    <div className="relative w-screen 2xl:h-[40em] xl:h-[36em] lg:h-[30em] flex flex-row font-[Raleway]">
        {/* Left section */}
        <div className="absolute flex flex-col left-20 2xl:top-[11em] xl:top-[10em] lg:top-[8em]">
            <div className="2xl:text-[38px] xl:text-[35px] lg:text-[26px] font-[700]">
                <div className="flex flex-row ">
                    <div>
                        Top
                    </div>
                    <div className="text-green2 ml-2">
                        Medical Professionals
                    </div>
                </div>
                <div className=""> 
                    at Your Service
                </div>
            </div>
            <div className="2xl:text-[15px] xl:text-[14px] lg:text-[11.2px] text-text-dark mt-2">
                <div>
                    Delivering Exceptional Care and Specialized Expertise to 
                </div>
                <div>
                    Enhance Your Health and Well-being
                </div>
            </div>
        </div>

        {/* Buttons */}
        <div className="absolute 
            flex 
            flex-row 
            justify-center 
            xl:gap-x-6 
            lg:gap-x-4 
            2xl:top-[23.5em] 
            xl:top-[21.5em] 
            lg:top-[16.7em] 
            left-20"
        >
            <button className="
                xl:w-[13em] 
                lg:w-[12em] 
                h-[3em] 
                bg-buttonColor 
                text-white 
                2xl:text-[15px] 
                xl:text-[14px] 
                lg:text-[11px] 
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
                xl:w-[13em] 
                lg:w-[12em] 
                h-[3em] 
                border-2 
                border-buttonColor 
                2xl:text-[15px] 
                xl:text-[14px] 
                lg:text-[11px] 
                font-[Poppins] 
                font-[700] 
                text-buttonColor 
                rounded-lg 
                flex 
                justify-center 
                items-center"
            >
                Find Best Doctors
            </button>
        </div>
    </div>
  )
}
