import React from 'react'

export const BookConsultationMediumScreen = () => {
  return (
    <div className="relative flex flex-col font-[Raleway] text-[27px]">
        <div className="absolute w-28 -ml-[3em] -mt-6">
            <img src="./plus_bg_2.png" alt="plus_bg_2"/>
        </div>
        <div className="absolute top-16 -ml-6">
            <div className="">
                <span className="text-green2 font-[700]">Compare and Book</span>
                <span className="font-[600]"> any</span>
            </div>
            <div className="font-[600]">
                Hospital, Doctor and Diagnostics
            </div>
            <div className="font-[600]">
                anytime and anywhere
            </div>
        </div>
        <div className="absolute top-[13.8em] -ml-6 text-[14px]">
            <div>
                Taking care of your well-being has never been easier. Book
            </div>
            <div>
                any service with utmost convenience through easyheals.
            </div>
        </div>
    </div>
  )
}
