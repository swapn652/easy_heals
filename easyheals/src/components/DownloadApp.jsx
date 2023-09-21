import React from 'react'

export const DownloadApp = () => {
  return (
    <div className="relative w-screen 2xl:h-[26em] xl:h-[30em] lg:h-[23em] flex flex-row font-[Poppins] bg-green">
      <div className="flex flex-col absolute text-white left-[14em] top-[6em]">
        <div className="text-[36px] font-[700]">
          Download the EasyHeals
        </div>
        <div className="text-[29px] font-[700]">
          Mobile Application
        </div>
        <div className="text-[13px] mt-4">
          <div>
            Say goodbye to long waiting times and endless
          </div>
          <div>
            phone calls, just book appointment on the go.
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-4 absolute left-[14em] top-[17em]">
        <img src="./downloads/google_play_store.svg" className="w-[11em] cursor-pointer"/>
        <img src="./downloads/app_store.svg" className="w-[10em] cursor-pointer"/>
      </div>
      <img src="./downloads/phone_1.svg" className="absolute w-[13em] right-[25.7em] -top-[3em]"/>
      <img src="./downloads/phone_2.svg" className="absolute w-[30em] right-0 -top-[6em]"/>
    </div>
  )
}
