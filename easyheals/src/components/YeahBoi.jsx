import React, { useState } from 'react';
import Slider from 'react-slick';

export const YeahBoi = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Custom prev arrow component with custom styling
  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="cursor-pointer custom-arrow prev absolute xl:-left-10 lg:-left-8 xl:top-16 lg:top-12 lg:w-[1.7em] xl:w-[2em]"
      onClick={onClick}
    >
      <img src="./navigation_left.svg" />
    </div>
  );

  // Custom next arrow component with custom styling
  const CustomNextArrow = ({ onClick }) => (
    <div
      className="cursor-pointer custom-arrow next absolute xl:-right-8 lg:-right-8 xl:top-16 lg:top-12 lg:w-[1.7em] xl:w-[2em]"
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
    <div>
      <div className="w-[40em] ml-20">
        <Slider {...settings} className="grid-cols-2 grid-rows-4">
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
  );
};
