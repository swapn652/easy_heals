import React from 'react'
import { OfferCard } from '../OfferCard'

export const Doctor = () => {
  return (
    <div className="flex flex-row relative">
      {/* <div className="absolute 2xl:mt-[15em] xl:mt-[14em] lg:mt-[11.5em] md:mt-[7.5em] sm:mt-[9em] 2xl:-ml-[1em] xl:-ml-[1em] lg:-ml-[1em] md:-ml-[1em]">
        <OfferCard imageUrl="./hsptl.png" heading="Choose Best Hospital" />
      </div>
      <div className="absolute 2xl:mt-[9.1em] xl:mt-[9em] lg:mt-[7em] md:mt-[4em] sm:mt-[5em] 2xl:ml-[3em] xl:ml-[2em] lg:ml-[2em] md:ml-[0.5em] sm:ml-[2em]">
        <OfferCard imageUrl="./price.png" heading="Compare Treatment Prices" />
      </div>
      <div className="absolute 2xl:mt-24 xl:mt-24 lg:mt-24 md:mt-14 sm:mt-16 2xl:ml-[25.5em] xl:ml-[24.5em] lg:ml-[20.5em] md:ml-[14.5em] sm:ml-[16.5em]">
        <OfferCard imageUrl="./dicount.png" heading="Get Best Offers" />
      </div> */}
      <img src="./ladyDoctor.svg" alt="doctor" className="2xl:w-[38rem] xl:w-[34rem] lg:w-[28rem] md:w-[22rem] 2xl:h-[33rem]"/>
    </div>
  )
}
