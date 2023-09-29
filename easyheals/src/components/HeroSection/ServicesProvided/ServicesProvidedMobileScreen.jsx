import React from 'react';
import Slider from 'react-slick';
import { ServiceCard } from './ServiceCard';

export const ServicesProvidedMobileScreen = () => {
    const settings = {
        dots: false,
        infinite: true,
        centerMode: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: null, // Custom previous arrow component
        nextArrow: null, // Custom next arrow component
};

  return (
    <div>
        <Slider {...settings} className="mx-6">
            <div>
                <ServiceCard
                imageUrl="./doctor.png"
                heading="Top Rated Doctors"
                description="Find and book an appointment with best medical professional in town"
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
                imageUrl="./lab-test.png"
                heading="Lab Tests"
                description="Get your lab test samples collected and reports delivered at home"
                />
            </div>
            <div>
                <ServiceCard
                imageUrl="./treatment.png"
                heading="Treatment"
                description="Compare prices of surgeries and book the best treatment in town"
                />
            </div>
        </Slider>
    </div>
  )
}
