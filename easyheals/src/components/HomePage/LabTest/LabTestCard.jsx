import React from 'react'

export const LabTestCard = ({title, preparation, hospitalName1, hospitalAddress1, hospitalPrice1, hospitalOfferPrice1,
     hospitalName2, hospitalAddress2, hospitalPrice2, hospitalOfferPrice2}) => {
  return (
    <div style={{boxShadow: "0px 2px 10px 0px #60606026"}} className="4xl:w-[35em] 3xl:w-[30em] 2xl:w-[26em] xl:w-[24em] lg:w-[19em] 4xl:h-[19em] 3xl:h-[17em] 2xl:h-[15.5em] xl:h-[13.5em] lg:h-[11em] border-[0.1px] border-text-light rounded-lg flex flex-col relative bg-white font-[Poppins]">
        <div className="flex flex-col 2xl:h-[7em] xl:h-[6em] lg:h-[5em]">
            <div className="absolute left-6 4xl:top-[0.8em] 2xl:top-[1em] xl:top-[0.8em] lg:top-[0.5em] text-buttonColor 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] font-[700]">
                {title}
            </div>
            <div className="absolute left-6 4xl:top-[4em] xl:top-[3.8em] lg:top-[3.2em] 2xl:text-[13px] xl:text-[11px] lg:text-[9px] text-text-light">
                {preparation}
            </div>
            <div className="w-[100%] h-[1px] bg-text-light absolute 2xl:top-[5em] xl:top-[4.5em] lg:top-[3.2em]"></div>
        </div>

        {/* Information about first Hospital */}
        <div className="flex flex-row h-[3em]">
            <div className="flex flex-col ml-6 2xl:w-[17em] xl:w-[15em] lg:w-[12em]">
                <div className="flex flex-row items-center">
                    <img src="./hospital_icon.svg" className="2xl:w-[1.2em] xl:w-[1.1em] lg:w-[0.9em] 2xl:-mt-[0.5em] xl:-mt-[0.4em] lg:-mt-[0.4em]"/>
                    <div className="4xl:text-[17px] 2xl:text-[15px] xl:text-[14px] lg:text-[11px] ml-2">{hospitalName1}</div>
                    <img src="./star_icon.svg" className="2xl:w-[0.8em] xl:w-[0.7em] lg:w-[0.5em] ml-2" />
                    <div className="4xl:text-[12px] 2xl:text-[10px] xl:text-[9px] lg:text-[8px] ml-[0.4em]">4.1</div>
                </div>
                <div className="flex flex-row mt-2">
                    <img src="./location_icon.svg" className="2xl:w-[0.9em] xl:w-[0.8em] lg:w-[0.7em]" />
                    <span className="text-text-light 4xl:text-[15px] 2xl:text-[13px] xl:text-[11px] lg:text-[9px] ml-2 font-[300]">{hospitalAddress1}</span>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="font-[300] 2xl:text-[12px] xl:text-[10px] lg:text-[9px] text-green2">
                    Center Visit Only
                </div>
                <div className="flex flex-row">
                    <div className="line-through text-buttonColor 2xl:text-[12px] xl:text-[10px] lg:text-[10px] mt-4">
                        ₹{hospitalPrice1}
                    </div>
                    <div className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] mt-[0.5em] ml-2">
                        ₹{hospitalOfferPrice1}
                    </div>
                </div>
            </div>
        </div>

        {/* Information About second hospital */}
        <div className="flex flex-row h-[4em] 2xl:mt-6 xl:mt-4 lg:mt-2">
            <div className="flex flex-col ml-6 2xl:w-[17em] xl:w-[15em] lg:w-[12em]">
                <div className="flex flex-row items-center">
                    <img src="./hospital_icon.svg" className="2xl:w-[1.2em] xl:w-[1.1em] lg:w-[0.9em] 2xl:-mt-[0.5em] xl:-mt-[0.4em] lg:-mt-[0.4em]"/>
                    <div className="4xl:text-[17px] 2xl:text-[15px] xl:text-[14px] lg:text-[11px] ml-2">{hospitalName2}</div>
                    <img src="./star_icon.svg" className="2xl:w-[0.8em] xl:w-[0.7em] lg:w-[0.5em] ml-2" />
                    <div className="4xl:text-[12px] 2xl:text-[10px] xl:text-[9px] lg:text-[8px] ml-[0.4em]">4.1</div>
                </div>
                <div className="flex flex-row mt-2">
                    <img src="./location_icon.svg" className="2xl:w-[0.9em] xl:w-[0.8em] lg:w-[0.7em]" />
                    <span className="text-text-light 4xl:text-[15px] 2xl:text-[13px] xl:text-[11px] lg:text-[9px] ml-2 font-[300]">{hospitalAddress2}</span>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="font-[300] 2xl:text-[12px] xl:text-[10px] lg:text-[9px] text-green2">
                    Center Visit Only
                </div>
                <div className="flex flex-row">
                    <div className="line-through text-buttonColor 2xl:text-[12px] xl:text-[10px] lg:text-[10px] mt-4">
                        ₹{hospitalPrice2}
                    </div>
                    <div className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] mt-[0.5em] ml-2">
                        ₹{hospitalOfferPrice2}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
