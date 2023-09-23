import React from 'react';
import Slider from "react-slick";

export const TreatmentByDiseases = () => {

      // Custom prev arrow component with custom styling
  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow prev absolute lg:-left-16 2xl:top-28 xl:top-[5.3em] lg:top-[4em] lg:w-[1.7em] xl:w-[2em]"
      onClick={onClick}
    >
      <img src="./navigation_left.svg"/>
    </div>
  );

  // Custom next arrow component with custom styling
  const CustomNextArrow = ({ onClick }) => (
    <div
      className="custom-arrow next absolute lg:-right-16 2xl:top-28 xl:top-[5.3em] lg:top-[4em] lg:w-[1.7em] xl:w-[2em]"
      onClick={onClick}
    >
       <img src="./navigation_right.svg"/>
    </div>
  );
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />, // Custom previous arrow component
        nextArrow: <CustomNextArrow />, // Custom next arrow component
        rows: 2,
        itemsPerRow: 2

    };

  return (
    <div className="relative w-screen 2xl:h-[28em] xl:h-[23em] lg:h-[17em] flex justify-center font-[Raleway]">
        {/* Heading */}
        <div className="flex items-center justify-center absolute top-20">
            <span className="2xl:w-[460px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins font-semibold 2xl:text-[27px] xl:text-[23px] lg:text-[22px] mx-2">
                Treatment By Diseases
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="2xl:w-[460px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
        </div>

         {/* Carousel */}
         <div className="2xl:h-[20em] xl:h-[18em] lg:h-[14em] xl:w-[87vw] lg:w-[80vw] absolute 2xl:top-44 xl:top-40 lg:top-36 mx-[4.5em]">
          <Slider {...settings} className="flex 2xl:ml-4 xl:ml-0">
            <div className=""> {/* Add a gap between cards */}
              <img src="./chronic_reflex.svg" className="2xl:w-[26em] xl:w-[23em] lg:w-[21em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./chronic_reflex.svg" className="2xl:w-[26em] xl:w-[23em] lg:w-[21em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./chronic_reflex.svg" className="2xl:w-[26em] xl:w-[23em] lg:w-[21em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./chronic_reflex.svg" className="2xl:w-[26em] xl:w-[23em] lg:w-[21em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./chronic_reflex.svg" className="2xl:w-[26em] xl:w-[23em] lg:w-[21em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./chronic_reflex.svg" className="2xl:w-[26em] xl:w-[23em] lg:w-[21em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./chronic_reflex.svg" className="2xl:w-[26em] xl:w-[23em] lg:w-[21em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./chronic_reflex.svg" className="2xl:w-[26em] xl:w-[23em] lg:w-[21em] cursor-pointer"/>
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
            View all Diseases
        </button>
    </div>
  )
}
