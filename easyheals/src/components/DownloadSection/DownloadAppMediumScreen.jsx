import React from 'react'

export const DownloadAppMediumScreen = () => {
  return (
    <div className="w-screeen h-[23em] bg-green relative flex flex-row">
        <div className="flex flex-col font-[Poppins] text-white absolute top-[6em] left-[2em]">
            <div className="text-[28px]">Download the EasyHeals</div>
            <div className="text-[20px]">Mobile Application</div>
            <div className="mt-2 font-[300] text-[12px]">Say goodbye to long waiting times and endless phone</div>
            <div className="font-[300] text-[12px]">calls, just book appointment on the go.</div>
            <div className="flex flex-row mt-6">
                <img src="./downloads/google_play_store.svg" className="w-[10em]"/>
                <img src="./downloads/app_store.svg" className="w-[9em] ml-6"/>
            </div>
        </div>
        <img src="./downloads/phone_1.svg" className="w-[11em] absolute right-52 -top-[2em]"/>
        <img src="./downloads/phone_2.svg" className="w-[25em] absolute right-0 -top-[4em]"/>
    </div>
  )
}
