import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { BookConsultation } from './components/BookConsultation'
import { CommonSymptoms } from './components/CommonSymptoms'
import { ServiceCard } from './components/ServiceCard'
import { ServicesProvided } from './components/ServicesProvided'
import Carousel from './components/Carousel'
import { OfferCard } from './components/OfferCard'
import { Doctor } from './components/Doctor'
import { Check } from './components/Check'
import { MainSection } from './components/MainSection'
import { MainSectionMobile } from './components/MainSectionMobile'
import { SearchBarTest } from './components/SearchBarTest'

function App() {

  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png"
      ]

  return (
    <>
     <Navbar/>
     <div className="hidden md:block">
      <MainSection/>
     </div>
     <div className="block md:hidden">
        <MainSectionMobile/>
     </div>
     {/* <div className="mt-[30em] ml-[10em]">
      <SearchBarTest/>
     </div> */}
     {/* <div className='mt-20'>
     <Carousel>
     <div>
        <ServiceCard
          imageUrl="./doctor.png"
          heading="Top Rated Doctors"
          description="Find and book an appointment with best medical professional in town"
        />
      </div>
      <div>
        <ServiceCard
          imageUrl="./doctor.png"
          heading="Top Rated Doctors"
          description="Find and book an appointment with best medical professional in town"
        />
      </div>
      <div>
        <ServiceCard
          imageUrl="./doctor.png"
          heading="Top Rated Doctors"
          description="Find and book an appointment with best medical professional in town"
        />
      </div>
      <div>
        <ServiceCard
          imageUrl="./doctor.png"
          heading="Top Rated Doctors"
          description="Find and book an appointment with best medical professional in town"
        />
      </div>
     </Carousel>
     </div> */}
     {/* <Doctor/> */}
     {/* <div className="mt-20">
<Check/>
</div> */}
    </>
  )
}

export default App
