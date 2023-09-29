import "slick-carousel/slick/slick.css"; // Import the slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import the slick-carousel theme CSS
import './App.css'
import { Navbar } from './components/Navbar'
import { MainSection } from './components/HeroSection/MainSection/MainSection'
import { MainSectionMobile } from './components/HeroSection/MainSection/MainSectionMobile'
import { Partners } from './components/Partners'
import { Issues } from './components/Issues'
import {FeaturedServices} from './components/FeaturedServices/FeaturedServices'
import { TreatmentBySymptoms } from './components/Treatments/TreatmentBySymptoms'
import { TreatmentBySpeciality } from './components/Treatments/TreatmentBySpeciality'
import { MedicalProfessionals } from "./components/MedicalProfessionals/MedicalProfessionals";
import { TreatmentByDiseases } from './components/Treatments/TreatmentByDiseases'
import { LabTests } from './components/LabTest/LabTests'
import { TopHospitals } from './components/MedicalProfessionals/TopHospitals'
import { DownloadApp } from './components/DownloadSection/DownloadApp'
import { Footer } from './components/Footers/Footer'
import { AuthProvider } from "./components/AuthContext";
import { TreatmentBySpecialityMediumScreen } from "./components/Treatments/TreatmentBySpecialityMediumScreen";
import { MedicalProfessionalsMediumScreen } from "./components/MedicalProfessionals/MedicalProfessionalsMediumScreen";
import { TreatmentByDiseasesMediumScreen } from "./components/Treatments/TreatmentByDiseasesMediumScreen";
import { LabTestMediumScreen } from "./components/LabTest/LabTestMediumScreen";
import { TopHospitalsMediumScreen } from "./components/MedicalProfessionals/TopHospitalsMediumScreen";
import { DownloadAppMediumScreen } from "./components/DownloadSection/DownloadAppMediumScreen";
import { FooterMediumScreen } from "./components/Footers/FooterMediumScreen";
import { PartnersMobile } from "./components/PartnersMobile";
import { FeaturedServicesMobile } from "./components/FeaturedServices/FeaturedServicesMobile";

function App() {
  return (
    <>
    <AuthProvider>
     <Navbar/>
     <div className="hidden md:block">
      <MainSection/>
     </div>
     <div className="block md:hidden">
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
     {/* <div className="lg:mt-0 md:mt-[20em]">
      <TreatmentBySymptoms/>
     </div>
     <div className="md:hidden lg:block">
      <TreatmentBySpeciality/>
     </div>
     <div className="md:block lg:hidden">
      <TreatmentBySpecialityMediumScreen/>
     </div>
     <div className="md:hidden lg:block">
      <MedicalProfessionals/>
     </div>
     <div className="lg:hidden md:block">
      <MedicalProfessionalsMediumScreen/>
     </div>
     <div className="hidden lg:block">
      <TreatmentByDiseases/>
     </div>
     <div className="block lg:hidden">
      <TreatmentByDiseasesMediumScreen/>
     </div>
     <div className="hidden lg:block">
      <LabTests/>
     </div>
     <div className="block lg:hidden">
      <LabTestMediumScreen/>
     </div>
     <div className="hidden lg:block">
      <TopHospitals/>
     </div>
     <div className="block lg:hidden">
      <TopHospitalsMediumScreen/>
     </div>
     <div className="hidden lg:block">
      <DownloadApp/>
     </div>
     <div className="block lg:hidden">
      <DownloadAppMediumScreen/>
     </div>
     <div className="hidden lg:block">
      <Footer/>
     </div>
     <div className="block lg:hidden">
      <FooterMediumScreen/>
     </div> */}
    </AuthProvider>
    </>
  )
}

export default App
