import React from 'react'

export const HospitalCard = ({imageSrc, name, address}) => {
    // Constant rating value
    const rating = '5.0';

    return (
        <div 
            style={{boxShadow: "0px 2.310344934463501px 4.620689868927002px 0px #6060601A"}} 
            className="
                2xl:h-[19em] 
                xl:h-[17em] 
                lg:h-[13.5em] 
                md:h-[16em] 
                sm:h-[19em]
                xs:h-[18em]
                2xs:h-[16.5em]
                3xs:h-[15.5em]
                2xl:w-[14.5em] 
                xl:w-[13em] 
                lg:w-[11em]
                md:w-[12em] 
                sm:w-[15em]
                xs:w-[14em]
                2xs:w-[13em]
                3xs:w-[12em]
                bg-white 
                flex 
                flex-col 
                items-center 
                relative 
                rounded-xl 
                border-[0.1px] 
                border-text-light"
                >
                    <img src={imageSrc} className="2xl:h-[15em] xl:h-[13.5em] lg:h-[10.7em] rounded-tl-xl rounded-tr-xl" alt={name} />
                    <div className="md:mt-2 mt-4 flex flex-col items-center font-[Poppins] font-[500]">
                        <div className="2xl:text-[15px] xl:text-[13px] lg:text-[11px] md:text-[12px] sm:text-[15px] xs:text-[14px] 2xs:text-[13px] 3xs:text-[12px]">{name}</div>
                        <div className="2xl:text-[13px] xl:text-[11px] lg:text-[9px] md:text-[11px] sm:text-[11px] xs:text-[11px] 2xs:text-[10px] 3xs:text-[9px] text-text-light font-[300]">{address}</div>
                    </div>

                    {/* Rating (constant value) */}
                    <div className="absolute bg-green h-[1.5em] w-[4em] left-0 top-4 flex justify-center text-white">
                        {rating}
                    </div>
        </div>
    )
}
