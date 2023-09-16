import React from 'react'
import { BookConsultation } from './BookConsultation'
import { BookConsultationMobile } from './BookConsultationMobile'
import { SearchBar } from './SearchBar'
import { CommonSymptoms } from './CommonSymptoms'
import { Doctor } from './Doctor'

export const MainSectionMobile = () => {
  return (
    <div className="relative mt-24 flex flex-col">
        {/* <div className="relative flex justify-center ml-8">
            <div className="w-48">
                <BookConsultation/>
            </div>
        </div> */}
        <div className="flex mx-auto justify-center">
            <BookConsultationMobile/>
        </div>
        <div className="flex justify-center mt-10">
            <SearchBar/>
        </div>
        <div className="flex justify-center mt-4">
            <CommonSymptoms/>
        </div>
        <div>
            <Doctor/>
        </div>
    </div>
  )
}
