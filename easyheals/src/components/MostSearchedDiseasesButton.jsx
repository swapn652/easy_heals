import React from 'react'

export const MostSearchedDiseasesButton = ({ disease }) => {
  return (
    <div className="flex justify-center items-center px-[15px] py-[8px] rounded-[20px] bg-[#FFFAF9] border-[0.5px] border-buttonColor text-buttonColor text-[14px] font-[700]">
        {disease}
    </div>
  )
}
