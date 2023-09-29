import React from 'react'
import { BookConsultation } from '../BookConsultation/BookConsultation'
import { BookConsultationMobile } from '../BookConsultation/BookConsultationMobile'
import { SearchBar } from '../SearchBar/SearchBar'
import { CommonSymptoms } from '../CommonSymptoms'
import { Doctor } from '../Doctor'
import { SearchBarMobile } from '../SearchBar/SearchBarMobile'
import { ServicesProvidedMediumScreens } from '../ServicesProvided/ServicesProvidedMediumScreens'
import { ServicesProvidedMobileScreen } from '../ServicesProvided/ServicesProvidedMobileScreen'

export const MainSectionMobile = () => {
    const backgroundStyles = {
        backgroundImage: 'url("./bg.png")', // Use the imported image
        backgroundSize: 'cover', // Adjust this based on your image requirements
        backgroundRepeat: 'no-repeat',
      };

  return (
    <div style={{ ...backgroundStyles }} className="relative mt-24 flex flex-col h-[50em]">
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
            <ServicesProvidedMobileScreen/>
        </div>
    </div>
  )
}
