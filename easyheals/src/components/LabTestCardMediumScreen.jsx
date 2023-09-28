import React from 'react'

export const LabTestCardMediumScreen = ({title, preparation, hospitalName1, hospitalAddress1, hospitalPrice1, hospitalOfferPrice1,
    hospitalName2, hospitalAddress2, hospitalPrice2, hospitalOfferPrice2}) => {
  return (
    <div style={{boxShadow: "0px 2px 10px 0px #60606026"}} className="relative h-[16em] w-[15em] border-[0.1px] border-text-light rounded-lg border-2 border-black">
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
                        <div className="text-[12px] ml-2">
                            {hospitalName1}
                        </div>
                        <img src="./star_icon.svg" className="w-[0.8em] ml-2"/>
                        <div className="text-[10px] text-text-light font-[300] ml-[0.5em] absolute top-[0.2em] left-[12.8em]">
                            4.0
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <img src="./location_icon.svg" className="w-[0.8em] absolute top-[6.6em] left-4"/>
                        <div className="text-[10px] text-text-light font-[300] absolute top-[10.5em] left-[3em]">
                            {hospitalAddress1}
                        </div>
                    </div>
                    <div className="flex flex-row absolute top-[8em] items-center left-4">
                        <div className="text-[14px]">
                            ₹{hospitalOfferPrice1}
                        </div>
                        <div className="line-through text-buttonColor text-[10px] ml-2">
                            ₹{hospitalPrice1}
                        </div>
                        <div className="text-green2 text-[9px] font-[300] ml-12">
                            Center Visit Only
                        </div>
                    </div>
                </div>

                <div className="flex flex-col h-[5.5em]">
                    <div className="flex flex-row absolute left-4">
                        <img src="./hospital_icon.svg" className="w-[0.8em]"/>
                        <div className="text-[12px] ml-2 top-[7em]">
                            {hospitalName2}
                        </div>
                        <img src="./star_icon.svg" className="w-[0.8em] ml-2"/>
                        <div className="text-[10px] text-text-light font-[300] ml-[0.5em] absolute top-[0.2em] left-[12.8em]">
                            4.0
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <img src="./location_icon.svg" className="w-[0.8em] absolute top-[12em] left-4"/>
                        <div className="text-[10px] text-text-light font-[300] absolute top-[19.2em] left-[3em]">
                            {hospitalAddress2}
                        </div>
                    </div>
                    <div className="flex flex-row absolute top-[13.4em] items-center left-4">
                        <div className="text-[14px]">
                            ₹{hospitalOfferPrice2}
                        </div>
                        <div className="line-through text-buttonColor text-[10px] ml-2">
                            ₹{hospitalPrice2}
                        </div>
                        <div className="text-green2 text-[9px] font-[300] ml-12">
                            Center Visit Only
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
