import React from 'react'
import { BookConsultation } from '../BookConsultation/BookConsultation'
import { ServicesProvided } from '../ServicesProvided/ServicesProvided'
import { Doctor } from '../Doctor'
import { SearchBar } from '../SearchBar/SearchBar'
import { CommonSymptoms } from '../CommonSymptoms'
import { BookConsultationMediumScreen } from '../BookConsultation/BookConsultationMediumScreen'
import { ServicesProvidedMediumScreens } from '../ServicesProvided/ServicesProvidedMediumScreens'

export const MainSection = () => {
    const backgroundStyles = {
        backgroundImage: 'url("./bg.png")', // Use the imported image
        backgroundSize: 'cover', // Adjust this based on your image requirements
        backgroundRepeat: 'no-repeat',
      };

  return (
    <div className="
        relative 
        mt-[4.2em] 
        2xl:h-[33.8em] 
        xl:h-[30em] 
        lg:h-[25em] 
        md:h-[40em] 
        flex 
        flex-row 
        w-screen" 
        
        style={{ ...backgroundStyles, backgroundPosition: 'center' }}
    >
        <div className="relative flex flex-col">
            <div className="absolute hidden lg:block lg:w-[60em] left-16">
                <BookConsultation/>
            </div>
            <div className="absolute md:block lg:hidden w-[40em] left-16">
                <BookConsultationMediumScreen/>
            </div>
            <div className="absolute w-screen 4xl:mt-80 2xl:mt-72 xl:mt-60 lg:mt-52 md:mt-[18.5em] md:flex md:justify-center lg:justify-start">
               <SearchBar/>
            </div>
            <div className="absolute md:hidden lg:block w-[30em] 4xl:mt-[26.5em] 2xl:mt-[25em] xl:mt-[21.5em] lg:mt-[18em] md:mt-[17em] lg:left-12 xl:left-16">
                <CommonSymptoms/>
            </div>
            <div className="absolute hidden lg:block 2xl:mt-[31em] xl:mt-[27em] lg:mt-[23em] z-10">
                <ServicesProvided/>
            </div>
            <div className="absolute block lg:hidden mt-[26em] z-10">
                <ServicesProvidedMediumScreens/>
            </div>

        </div>
        <div className="absolute flex-shrink-0 right-0 lg:top-4 md:top-4">
            <Doctor/>
        </div>
    </div>
  )
}
