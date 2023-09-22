import React, { useState } from 'react';
import Slider from 'react-slick';

export const TopHospitals = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // Custom prev arrow component with custom styling
    const CustomPrevArrow = ({ onClick }) => (
      <div
        className="cursor-pointer custom-arrow prev absolute xl:-left-10 lg:-left-8 2xl:top-32 xl:top-24 lg:top-20 lg:w-[1.7em] xl:w-[2em]"
        onClick={onClick}
      >
        <img src="./navigation_left.svg" />
      </div>
    );
  
    // Custom next arrow component with custom styling
    const CustomNextArrow = ({ onClick }) => (
      <div
        className="cursor-pointer custom-arrow next absolute xl:-right-8 lg:-right-[1.7em] 2xl:top-32 xl:top-24 lg:top-20 lg:w-[1.7em] xl:w-[2em]"
        onClick={onClick}
      >
        <img src="./navigation_right.svg" />
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
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update the current slide
    };

  return (
    <div className="relative w-screen 2xl:h-[40.5em] xl:h-[40em] lg:h-[30em] flex justify-center flex-row font-[Raleway]">
        <img src="./plus_bg_3.svg" alt="plus_bg_3.svg" className="absolute xl:top-[7em] right-0 2xl:w-[11em] xl:w-[10em]"/>
        <div className="w-[90vw] h-[0.5px] bg-text-light absolute xl:top-[6em] lg:top-[4em]"></div>
    {/* Left section */}
        <div className="absolute flex flex-col right-24 2xl:top-[13em] xl:top-[12em] lg:top-[10em]">
            <div className="2xl:text-[38px] xl:text-[35px] lg:text-[26px] font-[700]">
                <div>
                    Find and Book
                </div>
                <div className="flex flex-row"> 
                    <div className="text-green2">Top Hospitals</div>
                    <div className="ml-[0.2em]">near you</div>
                </div>
            </div>
            <div className="2xl:text-[15px] xl:text-[14px] lg:text-[11.2px] text-text-dark mt-2">
                <div>
                    Delivering Exceptional Care and Specialized Expertise to 
                </div>
                <div>
                    Enhance Your Health and Well-being
                </div>
            </div>
        </div>

        {/* Buttons */}
        <button className="
            absolute
            top-[26.5em]
            xl:right-[21em]
            lg:right-[23em]
            xl:w-[13em] 
            lg:w-[12em] 
            h-[3em] 
            bg-buttonColor 
            text-white 
            2xl:text-[15px] 
            xl:text-[14px] 
            lg:text-[11px] 
            font-[Poppins] 
            font-[700] 
            rounded-lg 
            flex 
            justify-center 
            items-center"
            >
                Find Best Hospitals
        </button>

        <div className="w-[90vw] h-[0.5px] bg-text-light absolute xl:bottom-[8em] lg:bottom-[6em]"></div>

        <div className="absolute xl:left-[5em] lg:left-[4em] 2xl:top-[11em] xl:top-[10.5em] lg:top-[7.5em] 2xl:w-[45em] xl:w-[40em] lg:w-[33em]">
            <Slider {...settings} className="">
            {[0, 1, 2, 3].map((index) => (
                <div
                key={index}
                className={`w-[10em] ${
                    index === currentSlide ? 'scale-100' : 'scale-90'
                } transition-transform duration-300 ease-in-out`}
                >
                <img src="./doc.svg" className="w-full" />
                </div>
            ))}
            </Slider>
        </div>
    </div>
  )
}
