import React from 'react'
import { MainSection } from './HeroSection/MainSection/MainSection'
import { MainSectionMobile } from './HeroSection/MainSection/MainSectionMobile'
import { Partners } from './Partner/Partners'
import { Issues } from './Issues'
import {FeaturedServices} from './FeaturedServices/FeaturedServices'
import { TreatmentBySymptoms } from './Treatments/TreatmentBySymptoms'
import { TreatmentBySpeciality } from './Treatments/TreatmentBySpeciality'
import { MedicalProfessionals } from "./MedicalProfessionals/MedicalProfessionals";
import { TreatmentByDiseases } from './Treatments/TreatmentByDiseases'
import { LabTests } from './LabTest/LabTests'
import { TopHospitals } from './MedicalProfessionals/TopHospitals'
import { DownloadApp } from './DownloadSection/DownloadApp'
import { Footer } from './Footers/Footer'
import { TreatmentBySpecialityMediumScreen } from "./Treatments/TreatmentBySpecialityMediumScreen";
import { MedicalProfessionalsMediumScreen } from "./MedicalProfessionals/MedicalProfessionalsMediumScreen";
import { TreatmentByDiseasesMediumScreen } from "./Treatments/TreatmentByDiseasesMediumScreen";
import { LabTestMediumScreen } from "./LabTest/LabTestMediumScreen";
import { TopHospitalsMediumScreen } from "./MedicalProfessionals/TopHospitalsMediumScreen";
import { DownloadAppMediumScreen } from "./DownloadSection/DownloadAppMediumScreen";
import { FooterMediumScreen } from "./Footers/FooterMediumScreen";
import { PartnersMobile } from "./Partner/PartnersMobile";
import { FeaturedServicesMobile } from "./FeaturedServices/FeaturedServicesMobile";
import { TreatmentBySymptomsMobile } from "./Treatments/TreatmentBySymptomsMobile";
import { TreatmentBySpecialityMobile } from "./Treatments/TreatmentBySpecialityMobile";
import { MedicalProfessionalsMobile } from "./MedicalProfessionals/MedicalProfessionalsMobile";
import { TreatmentByDiseasesMobile } from "./Treatments/TreatmentByDiseasesMobile";
import { TopHospitalsMobile } from "./MedicalProfessionals/TopHospitalsMobile";
import { DownloadAppMobile } from "./DownloadSection/DownloadAppMobile";
import { FooterMobile } from "./Footers/FooterMobile";
import { NavbarMobile } from "./Navbars/NavbarMobile";
import { LabTestMobile } from "./LabTest/LabTestMobile";


export const HomePage = () => {
  return (
    <>
     <div className="hidden md:block">
      <MainSection/>
     </div>
     <div className="block md:hidden -mt-16">
        <MainSectionMobile/>
     </div>
     <div className="hidden md:block 2xl:mt-[10em] xl:mt-[10em] lg:mt-[9em] md:mt-[8em]">
      <Partners/>
     </div>
     <div className="block md:hidden">
      <PartnersMobile/>
     </div>
     <div className="xl:mt-28 lg:mt-16 md:mt-12 3xs:mt-10">
      <Issues/>
     </div>
     <div className="hidden md:block 2xl:mt-56 xl:mt-[12em] lg:mt-[10em] md:mt-[4em]">
      <FeaturedServices/>
     </div>
     <div className="block md:hidden">
      <FeaturedServicesMobile/>
     </div>
     <div className="hidden md:block lg:mt-0 2md:mt-[21em] md:mt-[20em]">
      <TreatmentBySymptoms/>
     </div>
     <div className="block md:hidden">
      <TreatmentBySymptomsMobile/>
     </div>
     <div className="3xs:hidden lg:block">
      <TreatmentBySpeciality/>
     </div>
     <div className="3xs:hidden md:block lg:hidden">
      <TreatmentBySpecialityMediumScreen/>
     </div>
     <div className="block md:hidden">
      <TreatmentBySpecialityMobile/>
     </div>
     <div className="3xs:hidden lg:block">
      <MedicalProfessionals/>
     </div>
     <div className="3xs:hidden md:block lg:hidden">
      <MedicalProfessionalsMediumScreen/>
     </div>
     <div className="block md:hidden">
      <MedicalProfessionalsMobile/>
     </div>
     <div className="3xs:hidden lg:block">
      <TreatmentByDiseases/>
     </div>
     <div className="3xs:hidden md:block lg:hidden">
      <TreatmentByDiseasesMediumScreen/>
     </div>
     <div className="block md:hidden">
      <TreatmentByDiseasesMobile/>
     </div>
     <div className="3xs:hidden lg:block">
      <LabTests/>
     </div>
     <div className="3xs:hidden md:block lg:hidden">
      <LabTestMediumScreen/>
     </div>
     <div className="block md:hidden">
      <LabTestMobile/>
     </div>
     <div className="3xs:hidden lg:block">
      <TopHospitals/>
     </div>
     <div className="3xs:hidden md:block lg:hidden">
      <TopHospitalsMediumScreen/>
     </div>
     <div className="block md:hidden">
      <TopHospitalsMobile/>
     </div>
     <div className="3xs:hidden lg:block">
      <DownloadApp/>
     </div>
     <div className="3xs:hidden md:block lg:hidden">
      <DownloadAppMediumScreen/>
     </div>
     <div className="block md:hidden">
      <DownloadAppMobile/>
     </div>
     
    </>
  )
}