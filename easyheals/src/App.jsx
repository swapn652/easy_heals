import "slick-carousel/slick/slick.css"; // Import the slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import the slick-carousel theme CSS
import './App.css'
import { Navbar } from './components/Navbar'
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
import { TopHospitals } from './components/TopHospitals'
import { DownloadApp } from './components/DownloadApp'
import { Footer } from './components/Footer'
import { YeahBoi } from "./components/YeahBoi";


function App() {
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
     <div>
      <TopHospitals/>
     </div>
     <div>
      <DownloadApp/>
     </div>
     <div>
      <Footer/>
     </div>
    </>
  )
}

export default App
