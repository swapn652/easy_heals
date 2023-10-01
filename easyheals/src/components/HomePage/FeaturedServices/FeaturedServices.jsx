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
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: null, // Custom previous arrow component
        nextArrow: null, // Custom next arrow component
      }
    },
  ]
};


  return (
    <div style={divStyle} className="relative w-screen 4xl:h-[44em] 3xl:h-[40em] 2xl:h-[37em] xl:h-[33em] lg:h-[27em] flex justify-center">
      <img 
        src="./plus_bg_6.svg" 
        className="
            absolute 
            left-0 
            2xl:-top-[14em] 
            xl:-top-[12.3em] 
            lg:-top-[10.6em] 
            md:-top-[6em]
            2xl:w-52 
            xl:w-44 
            lg:w-36
            md:w-24"
        />
      <div 
        style={{boxShadow: "0px 4px 40px 0px #60606040"}} 
        className="lg:w-[90vw] w-[100vw] 3xl:h-[37em] 4xl:h-[40em] 2xl:h-[35em] xl:h-[31em] lg:h-[26em] bg-white absolute -top-12 flex flex-col"
      >
        {/* Heading */}
        <div className="mt-10 flex items-center justify-center lg:ml-0">
            <span className="5xl:w-[35.6vw] 4xl:w-[35vw] 3xl:w-[34.8vw] 2xl:w-[491.6px] xl:w-[34.5vw] lg:w-[330px] 2md:w-[34.1vw] md:w-[33vw] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins font-semibold 4xl:text-[34px] 3xl:text-[30px] 2xl:text-[27px] xl:text-[23px] md:text-[22px] mx-2">
                Featured Services
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="5xl:w-[35.6vw] 4xl:w-[35vw] 3xl:w-[34.8vw] 2xl:w-[491.6px] xl:w-[34.5vw] lg:w-[330px] 2md:w-[34.1vw] md:w-[33vw] h-[1px] bg-text-light"></span>
        </div>

        {/* Carousel */}
        <div className="2xl:h-[20em] xl:h-[18em] lg:h-[14em] lg:w-[80vw] md:w-[90vw] absolute xl:top-32 lg:top-28 md:top-24 lg:mx-[4.5em] 2md:mx-[2.5em] md:mx-[2.3em]">
          <Slider {...settings} className="flex 2xl:ml-4 xl:ml-0 lg:-ml-6">
            <div className=""> {/* Add a gap between cards */}
              <img src="./featured_services/chemotherapy.svg" className="5xl:w-[23em] 4xl:w-[22em] 3xl:w-[19em] 2xl:w-[17em] xl:w-[15em] lg:w-[12em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./featured_services/knee_replacement.svg" className="5xl:w-[23em] 4xl:w-[22em] 3xl:w-[19em] 2xl:w-[17em] xl:w-[15em] lg:w-[12em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./featured_services/hair_transplant.svg" className="5xl:w-[23em] 4xl:w-[22em] 3xl:w-[19em] 2xl:w-[17em] xl:w-[15em] lg:w-[12em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./featured_services/bone_marrow_transplant.svg" className="5xl:w-[23em] 4xl:w-[22em] 3xl:w-[19em] 2xl:w-[17em] xl:w-[15em] lg:w-[12em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./featured_services/bone_marrow_transplant.svg" className="5xl:w-[23em] 4xl:w-[22em] 3xl:w-[19em] 2xl:w-[17em] xl:w-[15em] lg:w-[12em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./featured_services/bone_marrow_transplant.svg" className="5xl:w-[23em] 4xl:w-[22em] 3xl:w-[19em] 2xl:w-[17em] xl:w-[15em] lg:w-[12em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <FeaturedServicesCard/>
            </div>
          </Slider>
        </div>

        {/* Button */}
        <button className="
            md:w-[14em] 
            h-[3em] 
            border-2 
            border-buttonColor 
            4xl:text-[20px]
            3xl:text-[18px]
            2xl:text-[16px] 
            xl:text-[14px] 
            md:text-[12px]
            font-[Poppins] 
            font-[700] 
            text-buttonColor 
            rounded-lg 
            absolute 
            3xl:top-[27em]
            2xl:top-[29em] 
            xl:top-[30em] 
            lg:top-[28em]
            2md:top-[32em]
            md:top-[30em]
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
