import React from 'react'

export const DownloadApp = () => {
  return (
    <div className="relative w-screen 2xl:h-[26em] xl:h-[24em] lg:h-[20em] flex flex-row font-[Poppins] bg-green">
      <div className="flex flex-col absolute text-white 2xl:left-[14em] xl:left-[12em] lg:left-[8em] 2xl:top-[6em] xl:top-[5em] lg:top-[4em]">
        <div className="2xl:text-[36px] xl:text-[32px] lg:text-[25px] font-[700]">
          Download the EasyHeals
        </div>
        <div className="2xl:text-[29px] xl:text-[26px] lg:text-[20px] font-[700]">
          Mobile Application
        </div>
        <div className="2xl:text-[13px] xl:text-[12px] lg:text-[10px] mt-4">
          <div>
            Say goodbye to long waiting times and endless
          </div>
          <div>
            phone calls, just book appointment on the go.
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-4 absolute 2xl:left-[14em] xl:left-[12em] lg:left-[8em] 2xl:top-[17em] xl:top-[15em] lg:top-[12em]">
        <img src="./downloads/google_play_store.svg" className="2xl:w-[11em] xl:w-[9em] lg:w-[7.5em] cursor-pointer"/>
        <img src="./downloads/app_store.svg" className="2xl:w-[10em] xl:w-[8em] lg:w-[7em] cursor-pointer"/>
      </div>
      <img src="./downloads/phone_1.svg" className="absolute 2xl:w-[13em] xl:w-[12em] lg:w-[11em] 2xl:right-[25.7em] xl:right-[24em] lg:right-[20em] -top-[3em]"/>
      <img src="./downloads/phone_2.svg" className="absolute 2xl:w-[30em] xl:w-[28em] lg:w-[23.5em] right-0 xl:-top-[6em] lg:-top-[5em]"/>
    </div>
  )
}
