import React from 'react'

export const CommonSymptoms = () => {
  return (
    <div className="flex flex-row items-center mt-96 mx-auto 2xl:gap-x-4 gap-x-2">
        <div className="2xl:text-base text-sm lg:text-[12px] md:text-[12px] sm:text-[10px]">
            Common Symptoms:
        </div>
        <div className="flex flex-row 2xl:gap-x-4 gap-x-2">
            <button className="py-[4px] px-2 2xl:text-sm xl:text-xs lg:text-[8px] md:text-[10px] sm:text-[10px] bg-buttonColor2 text-green border-[1px] border-green2 rounded-md">Headache</button>
            <button className="py-[4px] px-2 2xl:text-sm xl:text-xs lg:text-[8px] md:text-[10px] sm:text-[10px] bg-buttonColor2 text-green border-[1px] border-green2 rounded-md">Cold</button>
            <button className="py-[4px] px-2 2xl:text-sm xl:text-xs lg:text-[8px] md:text-[10px] sm:text-[10px] bg-buttonColor2 text-green border-[1px] border-green2 rounded-md">Backpain</button>
        </div>
        <div className="text-green hover:underline cursor-pointer 2xl:text-sm xl:text-xs lg:text-[8px] md:text-[10px] sm:text-[10px]">
            See all
        </div>
    </div>
  )
}
