import React from 'react';
import Slider from 'react-slick';

export const YeahBoi = () => {
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
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />, // Custom previous arrow component
  nextArrow: <CustomNextArrow />, // Custom next arrow component
};

  return (
    <div>
         <div className="w-[50em] ml-20">
          <Slider {...settings} className="grid-cols-2 grid-rows-4">
            <div className=""> {/* Add a gap between cards */}
              <img src="./doc.svg" className="w-[10em]"/>
            </div>
            <div className="row-span-2"> {/* Add a gap between cards */}
              <img src="./doc.svg" className="w-[10em]"/>
            </div>
            <div className="row-span-2"> {/* Add a gap between cards */}
              <img src="./doc.svg" className="w-[10em]"/>
            </div>
            <div className="row-span-2"> {/* Add a gap between cards */}
              <img src="./doc.svg" className="w-[10em]"/>
            </div>
          </Slider>
        </div>
    </div>
  )
}
