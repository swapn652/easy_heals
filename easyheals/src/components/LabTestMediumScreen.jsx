import React from 'react'
import { LabTestCardMediumScreen } from './LabTestCardMediumScreen'
import axios from 'axios'

export const LabTestMediumScreen = () => {
  return (
    <div className="relative flex flex-col h-[26em]">
        <div className="flex flex-row justify-center items-center">
            <div className="w-[30vw] h-[1px] bg-text-light"></div>
            <img src="./plus_icon.svg" />
            <div className="text-[22px] mx-6 font-[700] font-[Raleway]">Lab Tests</div>
            <img src="./plus_icon.svg" />
            <div className="w-[30vw] h-[1px] bg-text-light"></div>
        </div>
        <div className="flex flex-row gap-x-4 mx-8 font-[Poppins] mt-10">
            <LabTestCardMediumScreen/>
            <LabTestCardMediumScreen/>
            <LabTestCardMediumScreen/>
        </div>
    </div>
  )
}
