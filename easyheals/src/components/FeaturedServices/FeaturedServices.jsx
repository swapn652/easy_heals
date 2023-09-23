import React from 'react';
import Slider from "react-slick";
import { FeaturedServicesCard } from './FeaturedServicesCard';

export const FeaturedServices = () => {
  const divStyle = {
    backgroundImage: `url('./FeaturedServices_bg.svg')`,
    backgroundSize: 'cover', // You can adjust this based on your image requirements
    backgroundRepeat: 'no-repeat'
  };

   // Custom prev arrow component with custom styling
   const CustomPrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow prev absolute xl:-left-10 lg:-left-8 2xl:top-32 xl:top-28 lg:top-24 lg:w-[1.7em] xl:w-[2em]"
      onClick={onClick}
    >
      <img src="./navigation_left.svg"/>
    </div>
  );

  // Custom next arrow component with custom styling
  const CustomNextArrow = ({ onClick }) => (
    <div
      className="custom-arrow next absolute xl:-right-8 lg:-right-4 2xl:top-32 xl:top-28 lg:top-24 lg:w-[1.7em] xl:w-[2em]"
      onClick={onClick}
    >
       <img src="./navigation_right.svg"/>
    </div>
  );
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />, // Custom previous arrow component
  nextArrow: <CustomNextArrow />, // Custom next arrow component
};


  return (
    <div style={divStyle} className="relative w-screen 2xl:h-[37em] xl:h-[33em] lg:h-[27em] flex justify-center">
      <img 
        src="./plus_bg_6.svg" 
        className="
            absolute 
            left-0 
            2xl:-top-[14em] 
            xl:-top-[12.3em] 
            lg:-top-[10.6em] 
            2xl:w-52 
            xl:w-44 
            lg:w-36"
        />
      <div 
        style={{boxShadow: "0px 4px 40px 0px #60606040"}} 
        className="w-[90vw] 2xl:h-[35em] xl:h-[31em] lg:h-[26em] bg-white absolute -top-12 flex flex-col"
      >
        {/* Heading */}
        <div className="absolute top-10 flex items-center justify-center">
            <span className="2xl:w-[491.6px] xl:w-[436.8px] lg:w-[326px] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins font-semibold 2xl:text-[27px] xl:text-[23px] lg:text-[22px] mx-2">
                Featured Services
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="2xl:w-[491.6px] xl:w-[436.8px] lg:w-[326px] h-[1px] bg-text-light"></span>
        </div>

        {/* Carousel */}
        <div className="2xl:h-[20em] xl:h-[18em] lg:h-[14em] w-[80vw] absolute xl:top-32 lg:top-28 mx-[4.5em]">
          <Slider {...settings} className="flex 2xl:ml-4 xl:ml-0 lg:-ml-6">
            <div className=""> {/* Add a gap between cards */}
              <img src="./featured_services/chemotherapy.svg" className="2xl:w-[17em] xl:w-[15em] lg:w-[12em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./featured_services/knee_replacement.svg" className="2xl:w-[17em] xl:w-[15em] lg:w-[12em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./featured_services/hair_transplant.svg" className="2xl:w-[17em] xl:w-[15em] lg:w-[12em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./featured_services/bone_marrow_transplant.svg" className="2xl:w-[17em] xl:w-[15em] lg:w-[12em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./featured_services/bone_marrow_transplant.svg" className="2xl:w-[17em] xl:w-[15em] lg:w-[12em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./featured_services/bone_marrow_transplant.svg" className="2xl:w-[17em] xl:w-[15em] lg:w-[12em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <FeaturedServicesCard/>
            </div>
          </Slider>
        </div>

        {/* Button */}
        <button className="
            lg:w-[14em] 
            h-[3em] 
            border-2 
            border-buttonColor 
            2xl:text-[16px] 
            xl:text-[14px] 
            lg:text-[12px] 
            font-[Poppins] 
            font-[700] 
            text-buttonColor 
            rounded-lg 
            absolute 
            2xl:top-[29em] 
            xl:top-[30em] 
            lg:top-[29em] 
            flex 
            self-center 
            justify-center 
            items-center"
        >
            Browse All Services
        </button>
      </div>
    </div>
  );
};
