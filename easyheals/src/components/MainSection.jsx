import React from 'react'
import { BookConsultation } from './BookConsultation'
import { ServicesProvided } from './ServicesProvided'
import { Doctor } from './Doctor'
import { SearchBar } from './SearchBar'
import { CommonSymptoms } from './CommonSymptoms'
import { BookConsultationMediumScreen } from './BookConsultationMediumScreen'

export const MainSection = () => {
    const backgroundStyles = {
        backgroundImage: 'url("./bg.png")', // Use the imported image
        backgroundSize: 'cover', // Adjust this based on your image requirements
        backgroundRepeat: 'no-repeat'
      };

  return (
    <div className="relative mt-[4.2em] flex flex-row w-screen" style={{ ...backgroundStyles, backgroundPosition: 'center' }}>
        <div className="relative flex flex-col">
            <div className="absolute hidden lg:block lg:w-[60em] ml-16">
                <BookConsultation/>
            </div>
            <div className="absolute md:block lg:hidden w-[40em] ml-16">
                <BookConsultationMediumScreen/>
            </div>
            <div className="absolute 2xl:mt-72 xl:mt-60 lg:mt-52 md:mt-48 xl:ml-16 lg:ml-12 md:ml-8">
                <SearchBar/>
            </div>
            {/* <div className="absolute w-[30em] 2xl:mt-[25em] xl:mt-[21.5em] lg:mt-[18em] md:mt-[17em] lg:ml-16 xl:left-0 lg:-left-4 md:left-[2em]">
                <CommonSymptoms/>
            </div> */}
            {/* <div className="absolute 2xl:mt-[31em] xl:mt-[27em] lg:mt-[23em] xl:ml-16 lg:ml-12 z-10">
                <ServicesProvided/>
            </div> */}
        </div>
        <div className="absolute flex-shrink-0 right-0 lg:top-4 md:top-4">
            <Doctor/>
        </div>
    </div>
  )
}
