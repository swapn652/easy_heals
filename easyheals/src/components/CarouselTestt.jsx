import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import the slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import the slick-carousel theme CSS

const CarouselTestt = () => {
    const CustomPrevArrow = ({ onClick }) => (
        <div
          className="custom-arrow prev absolute -left-16 top-24"
          onClick={onClick}
        >
          <img src="./navigation_left.svg"/>
        </div>
      );
    
      // Custom next arrow component with custom styling
      const CustomNextArrow = ({ onClick }) => (
        <div
          className="custom-arrow next absolute -right-16 top-24"
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

  // Custom previous arrow component with custom stylin

  return (
    <div>
      <div>
        <Slider {...settings} className="flex mx-20">
          <div className="gap-x-4"> {/* Add a gap between cards */}
            <img src="./issues/acne.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
          </div>
          <div className="gap-x-4"> {/* Add a gap between cards */}
            <img src="./issues/men_health.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
          </div>
          <div className="gap-x-4"> {/* Add a gap between cards */}
            <img src="./issues/acne.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
          </div>
          <div className="gap-x-4"> {/* Add a gap between cards */}
            <img src="./issues/men_health.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselTestt;
