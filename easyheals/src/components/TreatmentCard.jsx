import React from 'react'

export const TreatmentCard = () => {
  return (
    <div style={{boxShadow: "0px 2px 10px 0px rgba(96, 96, 96, 0.15)"}} 
        className="w-[43%] h-[20vh] border-[0.5px] border-text-light  flex flex-col font-[Poppins] rounded-lg">
        {/* Heading */}
        <div style={{background: "var(--icon-green, linear-gradient(134deg, #74B641 7.31%, #159939 78.04%))"}} 
            className="w-[100%] h-[20%] flex flex-row items-center pl-[5%] text-white rounded-t-lg text-[1.1vw]">
            Chemotherapy
        </div>

        {/* First Hospital */}

        <div className="flex flex-col px-[1vw]">
            <div className="flex flex-row justify-between items-center">

                <div className="flex flex-row gap-x-2 mt-[0.7vw]">
                    <img src="./red_hospital_icon.svg" className="w-[1.2vw]"/>
                    <div className="text-[1.1vw]">
                        Burari Hospital
                    </div>
                    <div className="flex flex-row gap-x-[0.2vw]">
                        <img src="./star_icon.svg" className="w-[1vw]"/>
                        <div className="text-[0.9vw] font-[500] mt-[0.2vw]">4.1</div>
                    </div>
                </div>

                <div className="font-[300] text-[0.7vw] mt-[0.7vw]">
                    Starting from
                </div>
            </div>

            <div className="flex flex-row justify-between mt-[0.5vh] items-center">
                <div className="flex flex-row">
                    <img src="./location_icon.svg" className="w-[1vw]"/>
                    <div className="text-[0.8vw] font-[300] text-text-light ml-[0.2vw] ">
                        West Sant Nagar, Burari, Delhi
                    </div>
                </div>

                <div className="text-[1vw] ">
                    ₹45000
                </div>
            </div>


            
            <div className="flex flex-col px-[0vw]">
            <div className="flex flex-row justify-between items-center">

                <div className="flex flex-row gap-x-2 mt-[0.7vw]">
                    <img src="./red_hospital_icon.svg" className="w-[1.2vw]"/>
                    <div className="text-[1.1vw]">
                        Burari Hospital
                    </div>
                    <div className="flex flex-row gap-x-[0.2vw]">
                        <img src="./star_icon.svg" className="w-[1vw]"/>
                        <div className="text-[0.9vw] font-[500] mt-[0.2vw]">4.1</div>
                    </div>
                </div>

                <div className="font-[300] text-[0.7vw] mt-[0.7vw]">
                    Starting from
                </div>
            </div>

            <div className="flex flex-row justify-between mt-[0.5vh] items-center">
                <div className="flex flex-row">
                    <img src="./location_icon.svg" className="w-[1vw]"/>
                    <div className="text-[0.8vw] font-[300] text-text-light ml-[0.2vw] ">
                        West Sant Nagar, Burari, Delhi
                    </div>
                </div>

                <div className="text-[1vw] ">
                    ₹45000
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
