import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { BookConsultation } from './components/HeroSection/BookConsultation/BookConsultation'
import { CommonSymptoms } from './components/HeroSection/CommonSymptoms'
import { ServiceCard } from './components/HeroSection/ServicesProvided/ServiceCard'
import { ServicesProvided } from './components/HeroSection/ServicesProvided/ServicesProvided'
import { OfferCard } from './components/OfferCard'
import { Doctor } from './components/HeroSection/Doctor'
import { MainSection } from './components/HeroSection/MainSection/MainSection'
import { MainSectionMobile } from './components/HeroSection/MainSection/MainSectionMobile'
import { SearchBarTest } from './components/SearchBarTest'
import { Partners } from './components/Partners'
import { Issues } from './components/Issues'
import { FeaturedServices } from './components/FeaturedServices'
import { TreatmentBySymptoms } from './components/TreatmentBySymptoms'
import { TreatmentBySpeciality } from './components/TreatmentBySpeciality'
import { MedicalProfessionals } from './components/MedicalProfessionals'
import { TreatmentByDiseases } from './components/TreatmentByDiseases'
import { LabTests } from './components/LabTests'
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
     <div className="2xl:mt-[10em] xl:mt-[10em] lg:mt-[9em]">
      <Partners/>
     </div>
     <div className="xl:mt-28 lg:mt-16">
      <Issues/>
     </div>
     <div className="2xl:mt-56 xl:mt-[12em] lg:mt-[10em]">
      <FeaturedServices/>
     </div>
     <div>
      <TreatmentBySymptoms/>
     </div>
     <div>
      <TreatmentBySpeciality/>
     </div>
     <div>
      <MedicalProfessionals/>
     </div>
     <div>
      <TreatmentByDiseases/>
     </div>
     <div>
      <LabTests/>
     </div>
     
    </>
  )
}

export default App
