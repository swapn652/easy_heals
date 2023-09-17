import React from 'react'
import { BookConsultation } from '../BookConsultation/BookConsultation'
import { BookConsultationMobile } from '../BookConsultation/BookConsultationMobile'
import { SearchBar } from '../SearchBar/SearchBar'
import { CommonSymptoms } from '../CommonSymptoms'
import { Doctor } from '../Doctor'
import { SearchBarMobile } from '../SearchBar/SearchBarMobile'
import { ServicesProvidedMediumScreens } from '../ServicesProvided/ServicesProvidedMediumScreens'

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
        <div>
            <Doctor/>
        </div>
        <div className="flex justify-center -mt-2 z-10">
            <SearchBarMobile/>
        </div>
        <div className="mt-6">
            <ServicesProvidedMediumScreens/>
        </div>
    </div>
  )
}
