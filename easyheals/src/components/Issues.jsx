import React from 'react'
import Slider from "react-slick";

export const Issues = () => {
  // Custom prev arrow component with custom styling
  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow prev absolute lg:-left-16 md:-left-12 2xl:top-28 xl:top-[5.3em] lg:top-[4em] md:top-[4.5em] xl:w-[2em] lg:w-[1.7em] md:w-[2em]"
      onClick={onClick}
    >
      <img src="./navigation_left.svg"/>
    </div>
  );

  // Custom next arrow component with custom styling
  const CustomNextArrow = ({ onClick }) => (
    <div
      className="custom-arrow next absolute lg:-right-16 md:-right-12 2xl:top-28 xl:top-[5.3em] lg:top-[4em] md:top-[4.5em] xl:w-[2em] lg:w-[1.7em] md:w-[2em]"
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
responsive: [
  {
    breakpoint: 1023,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      prevArrow: null, // Custom previous arrow component
      nextArrow: null // Custom next arrow component
    }
  }
]
};

  return (
      <div>
        <Slider {...settings} className="flex mx-20">
          <div className="mx-2"> {/* Add a gap between cards */}
            <img src="./issues/acne.svg" className=" 2xl:w-[26em] xl:w-[22em] lg:w-[17em] md:w-[18.5em] cursor-pointer"/>
          </div>
          <div className="mx-2"> {/* Add a gap between cards */}
            <img src="./issues/men_health.svg" className="2xl:w-[26em] xl:w-[22em] lg:w-[17em] md:w-[18.5em] cursor-pointer"/>
          </div>
          <div className="mx-2"> {/* Add a gap between cards */}
            <img src="./issues/acne.svg" className="2xl:w-[26em] xl:w-[22em] lg:w-[17em] md:w-[18.5em] cursor-pointer"/>
          </div>
          <div className="mx-2"> {/* Add a gap between cards */}
            <img src="./issues/men_health.svg" className="2xl:w-[26em] xl:w-[22em] lg:w-[17em] md:w-[18.5em] cursor-pointer"/>
          </div>
        </Slider>
      </div>
  )
}
