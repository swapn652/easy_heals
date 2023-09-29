import React from 'react'
import Slider from 'react-slick';

export const PartnersMobile = () => {
    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: null, // Custom previous arrow component
        nextArrow: null, // Custom next arrow component
};

  return (
    <div className="flex flex-col mt-10">
        <div className="flex flex-row items-center justify-center">
            <div className="h-[1px] w-[17vw] bg-text-light"></div>
            <img src="./plus_icon.svg" />
            <div className="mx-4 font-[700] text-[16px]">Our Trusted Partners</div>
            <img src="./plus_icon.svg" />
            <div className="h-[1px] w-[17vw] bg-text-light"></div>
        </div>

        <Slider {...settings} className="mx-6 mt-6">
            <img src="./partners/ruby.svg" alt="Ruby Hall Clinic" className="w-10"  />
            <img src="./partners/agarwal.svg" alt="Dr. Agarwals" className=""/>
            <img src="./partners/unity.svg" alt="Unity Hospital" className=""/>
            <img src="./partners/orion.svg" alt="Orion Hospital" className=""/>
            <img src="./partners/sahyadri.svg" alt="Sahyadri Hospitals" className=""/>
        </Slider>
    </div>
  )
}
