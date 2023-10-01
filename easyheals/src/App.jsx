import "slick-carousel/slick/slick.css"; // Import the slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import the slick-carousel theme CSS
import './App.css'
import { AuthProvider } from "./components/AuthContext";
import { Navbar } from "./components/HomePage/Navbars/Navbar";
import { NavbarMobile } from "./components/HomePage/Navbars/NavbarMobile";
import { Footer } from "./components/HomePage/Footers/Footer";
import { FooterMobile } from "./components/HomePage/Footers/FooterMobile";
import { FooterMediumScreen } from "./components/HomePage/Footers/FooterMediumScreen";
import { HomePage } from "./components/HomePage/HomePage";
import { ThreeColumnLayout } from "./components/ThreeColumnLayout";
import { TreatmentPage } from "./components/TreatmentPage";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="hidden md:block">
          <Navbar/>
        </div>
        <div className="block md:hidden">
            <NavbarMobile/>
        </div>

        <HomePage/>
        {/* <ThreeColumnLayout/> */}
        {/* <TreatmentPage/> */}

        <div className="3xs:hidden lg:block">
          <Footer/>
        </div>
        <div className="3xs:hidden md:block lg:hidden">
          <FooterMediumScreen/>
        </div>
        <div className="block md:hidden">
          <FooterMobile/>
        </div>
      </AuthProvider>
    </>
  )
}

export default App;