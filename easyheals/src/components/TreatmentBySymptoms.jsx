import React from 'react';
import Slider from "react-slick";

export const TreatmentBySymptoms = () => {
   // Custom prev arrow component with custom styling
   const CustomPrevArrow = ({ onClick }) => (
    <div
      className="cursor-pointer custom-arrow prev absolute xl:-left-10 lg:-left-8 xl:top-16 lg:top-12 lg:w-[1.7em] xl:w-[2em]"
      onClick={onClick}
    >
      <img src="./navigation_left.svg"/>
    </div>
  );

  // Custom next arrow component with custom styling
  const CustomNextArrow = ({ onClick }) => (
    <div
      className="cursor-pointer custom-arrow next absolute xl:-right-8 lg:-right-8 xl:top-16 lg:top-12 lg:w-[1.7em] xl:w-[2em]"
      onClick={onClick}
    >
       <img src="./navigation_right.svg"/>
    </div>
  );
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />, // Custom previous arrow component
  nextArrow: <CustomNextArrow />, // Custom next arrow component
};

  return (
    <div className="relative w-screen 2xl:h-[40em] xl:h-[38em] lg:h-[37em] flex justify-center">
        {/* Heading */}
        <div className="flex items-center justify-center absolute top-20">
            <span className="2xl:w-[460px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins font-semibold 2xl:text-[27px] xl:text-[23px] lg:text-[22px] mx-2">
                Treatment By Symptoms
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="2xl:w-[460px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
        </div>

        {/* Carousel */}
        <div className="2xl:h-[20em] xl:h-[18em] lg:h-[14em] w-[90vw] absolute xl:top-40 lg:top-36">
          <Slider {...settings} className="">
            <div className=""> {/* Add a gap between cards */}
              <img src="./symptoms/headache.svg" className="2xl:w-[11em] xl:w-[10em] lg:w-[8em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./symptoms/acne.svg" className="2xl:w-[11em] xl:w-[10em] lg:w-[8em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./symptoms/fever.svg" className="2xl:w-[11em] xl:w-[10em] lg:w-[8em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./symptoms/cough.svg" className="2xl:w-[11em] xl:w-[10em] lg:w-[8em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./symptoms/gum_pain.svg" className="2xl:w-[11em] xl:w-[10em] lg:w-[8em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./symptoms/anxiety.svg" className="2xl:w-[11em] xl:w-[10em] lg:w-[8em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./symptoms/back_pain.svg" className="2xl:w-[11em] xl:w-[10em] lg:w-[8em] cursor-pointer"/>
            </div>
            <div className=""> {/* Add a gap between cards */}
              <img src="./symptoms/headache.svg" className="2xl:w-[11em] xl:w-[10em] lg:w-[8em] cursor-pointer"/>
            </div>
          </Slider>
        </div>

        {/* Buttons */}
        <div className="
            absolute 
            flex 
            flex-row 
            justify-center 
            gap-x-10 
            2xl:top-[26em] 
            xl:top-[24.5em] 
            lg:top-[21em]"
        >
            <button className="
                lg:w-[14em] 
                h-[3em] 
                bg-buttonColor 
                text-white 
                2xl:text-[16px] 
                xl:text-[14px] 
                lg:text-[12px] 
                font-[Poppins] 
                font-[700] 
                rounded-lg 
                flex 
                justify-center 
                items-center"
            >
                Book Appointment
            </button>

            <button className="
                lg:w-[14em] 
                h-[3em] border-2 
                border-buttonColor 
                2xl:text-[16px] 
                xl:text-[14px] 
                lg:text-[12px] 
                font-[Poppins] 
                font-[700] 
                text-buttonColor 
                rounded-lg flex 
                justify-center 
                items-center"
            >
                Browse Symptoms
            </button>
        </div>
    </div>
  )
}
