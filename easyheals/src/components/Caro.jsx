import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ServiceCard } from "./HeroSection/ServicesProvided/ServiceCard";

export const Caro = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <h2 className="bg-green2 flex justify-center">Single Item</h2>
      <Slider {...settings} className="bg-green2 flex justify-center">
      <div>
        <ServiceCard
          imageUrl="./hospital.png"
          heading="Best Hospitals"
          description="Explore top rated hospitals and book your visit in a few seconds"
        />
      </div>
      <div>
        <ServiceCard
          imageUrl="./hospital.png"
          heading="Best Hospitals"
          description="Explore top rated hospitals and book your visit in a few seconds"
        />
      </div>
      <div>
        <ServiceCard
          imageUrl="./hospital.png"
          heading="Best Hospitals"
          description="Explore top rated hospitals and book your visit in a few seconds"
        />
      </div>
      <div>
        <ServiceCard
          imageUrl="./hospital.png"
          heading="Best Hospitals"
          description="Explore top rated hospitals and book your visit in a few seconds"
        />
      </div>
      </Slider>
    </div>
  );
};
