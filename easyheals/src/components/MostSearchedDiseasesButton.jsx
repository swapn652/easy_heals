import React from 'react'

export const MostSearchedDiseasesButton = ({ disease }) => {
  return (
    <div className="
      flex 
      justify-center 
      items-center 
      xl:px-[15px] 
      lg:px-[12px]
      py-[8px] 
      rounded-[20px] 
      bg-[#FFFAF9] 
      border-[0.5px] 
      border-buttonColor 
      text-buttonColor 
      2xl:text-[14px] 
      xl:text-[12px] 
      lg:text-[10px]
      font-[700]">
        {disease}
    </div>
  )
}
