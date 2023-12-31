import React from 'react'

export const LabTestCardMediumScreen = ({title, preparation, hospitalName1, hospitalAddress1, hospitalPrice1, hospitalOfferPrice1,
    hospitalName2, hospitalAddress2, hospitalPrice2, hospitalOfferPrice2}) => {
  return (
    <div 
        style={{boxShadow: "0px 2px 10px 0px #60606026"}} 
        className="relative md:h-[16em]  md:w-[15em] sm:w-[15em] xs:w-[14em] 2xs:w-[13em] 3xs:w-[12em] border-[0.1px] border-text-light rounded-lg">
        <div className="flex flex-col">
            <div className="flex flex-col h-[5em]">
                <div className="absolute left-4 top-2 font-[700] text-[13px]">
                    {title}
                </div>
                <div className="absolute left-4 top-8 font-[300] text-[10px] text-text-light">
                    {preparation}
                </div>
                <div className="absolute top-14 h-[1px] w-[100%] bg-text-light"></div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col h-[5.5em]">
                    <div className="flex flex-row absolute left-4">
                        <img src="./hospital_icon.svg" className="w-[0.8em]"/>
                        <div className="2xs:text-[12px] 3xs:text-[10px] ml-2">
                            {hospitalName1}
                        </div>
                        <img src="./star_icon.svg" className="w-[0.8em] ml-2"/>
                        <div className="text-[10px] text-text-light font-[300] ml-[0.5em] mt-[0.2em]">
                            4.0
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <img src="./location_icon.svg" className="w-[0.8em] absolute top-[6.6em] left-4"/>
                        <div className="2xs:text-[10px] 3xs:text-[8px] text-text-light font-[300] absolute 2xs:top-[10.5em] 3xs:top-[13.2em] 2xs:left-[3em] 3xs:left-[4em]">
                            {hospitalAddress1}
                        </div>
                    </div>
                    <div className="flex flex-row absolute 2xs:top-[14em] 3xs:top-[18em] 2xs:text-[9px] 3xs:text-[7px] items-center left-4">
                        <div className="text-[14px]">
                            ₹{hospitalOfferPrice1}
                        </div>
                        <div className="line-through text-buttonColor text-[8px] ml-2">
                            ₹{hospitalPrice1}
                        </div>
                        <div className="text-green2 xs:text-[9px] 2xs:text-[8px] font-[300] xs:ml-8 2xs:ml-6 3xs:ml-4">
                            Center Visit Only
                        </div>
                    </div>
                </div>

                <div className="flex flex-col h-[5.5em]">
                    <div className="flex flex-row absolute left-4">
                        <img src="./hospital_icon.svg" className="w-[0.8em]"/>
                        <div className="2xs:text-[12px] text-[10px] ml-2 top-[7em]">
                            {hospitalName2}
                        </div>
                        <img src="./star_icon.svg" className="w-[0.8em] ml-2"/>
                        <div className="text-[10px] text-text-light font-[300] ml-[0.5em] mt-[0.2em]">
                            4.0
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <img src="./location_icon.svg" className="w-[0.8em] absolute top-[12em] left-4"/>
                        <div className="2xs:text-[10px] 3xs:text-[8px] text-text-light font-[300] absolute 2xs:top-[19.2em] 3xs:top-[24em] 2xs:left-[3em] 3xs:left-[4em]">
                            {hospitalAddress2}
                        </div>
                    </div>
                    <div className="flex flex-row absolute 2xs:top-[24em] 3xs:top-[30em] 2xs:text-[9px] 3xs:text-[7px] items-center left-4">
                        <div className="text-[14px]">
                            ₹{hospitalOfferPrice1}
                        </div>
                        <div className="line-through text-buttonColor text-[8px] ml-2">
                            ₹{hospitalPrice1}
                        </div>
                        <div className="text-green2 xs:text-[9px] 2xs:text-[8px] font-[300] xs:ml-8 2xs:ml-6 3xs:ml-4">
                            Center Visit Only
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
