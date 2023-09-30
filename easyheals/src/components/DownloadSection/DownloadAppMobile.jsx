import React from 'react'

export const DownloadAppMobile = () => {
  return (
    <div 
      style={{background: "var(--icon-green, linear-gradient(134deg, #74B641 7.31%, #159939 78.04%))"}}
      className="3xs:h-[29em] 2xs:h-[30em] xs:h-[32em] sm:h-[32.5em] w-screeen flex flex-col relative items-center"
      >
        {/* Phones image */}
        <img src="./downloads/tablet_phones.svg" className="3xs:w-[17em] 2xs:w-[18em] xs:w-[19em] absolute -top-[4em]"/>
        
        {/* Title */}
        <div className="flex flex-col items-center font-[Poppins] font-[700] text-white absolute 3xs:top-[16em] 2xs:top-[17em] xs:top-[18em]">
          <div style={{textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}} className="3xs:text-[20px] xs:text-[22px] sm:text-[24px]">
            Download the EasyHeals
          </div>
          <div style={{textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}} className="3xs:text-[16px] xs:text-[18px] sm:text-[20px]">
            Mobile Application
          </div>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col items-center font-[Poppins] 3xs:text-[12px] xs:text-[13px] sm:text-[14px] text-white font-[300] absolute 3xs:top-[27em] 2xs:top-[28.5em] xs:top-[28em] sm:top-[26.5em]">
          <div>Say goodbye to long waiting times and endless</div>
          <div>phone calls, just book appointment on the go.</div>
        </div>

        {/* Download buttons */}
        <div className="flex flex-row justify-center absolute 3xs:top-[24em] 2xs:top-[25em] xs:top-[26.5em] sm:top-[27em]">
          <div className="relative">
            <img src="./downloads/google_play_store.svg" className="w-[8em]" />
          </div>
          <div className="relative ml-4"> {/* Add margin to separate the buttons */}
            <img src="./downloads/app_store.svg" className="w-[7em]" />
          </div>
        </div>

    </div>
  )
}
