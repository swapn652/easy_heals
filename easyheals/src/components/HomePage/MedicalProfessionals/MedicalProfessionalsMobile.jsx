import React, { useState, useEffect } from 'react';
import { MedicalProfessionalsCard } from './MedicalProfessionalsCard';
import axios from 'axios';
import Slider from 'react-slick';
import { useAuth } from '../../AuthContext';

export const MedicalProfessionalsMobile = () => {
    
  const bearerToken = useAuth();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.development.easyheals.com/Search/featuredDoctors';

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        const doctorInfo = data.map((doctor) => ({
          title: doctor.title,
          imageSrc: doctor.image,
          department: doctor.specialities && doctor.specialities.length > 0
            ? doctor.specialities[0].title
            : 'Unknown', // Get the first specialization or use 'Unknown'
        }));
        setDoctors(doctorInfo);
      })
      .catch((error) => {
        console.error('Error fetching featured doctors:', error);
      });
  }, [bearerToken]);

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: null, // Custom previous arrow component
    nextArrow: null, // Custom next arrow component
};

  return (
    <div className="flex flex-col 3xs:h-[32em] 2xs:h-[33em] xs:h-[34.5em] sm:h-[36.5em]">
        {/* <img src="./plus_bg_1.svg" className="absolute w-[6em] right-0"/> */}

        {/* Heading and subheading */}
        <div className="flex flex-col items-center font-[Poppins]">
            <div className="flex flex-row font-[600] 3xs:text-[20px] xs:text-[21px] sm:text-[24px]">
                <div className="">Top</div>
                <div className="ml-[0.3em] text-green2">Medical Professionals</div>
            </div>
            <div className="text-[18px] font-[600] 3xs:text-[20px] xs:text-[21px] sm:text-[24px]">at Your Service</div>
        </div>
        <div className="flex flex-col items-center font-[Raleway] 3xs:text-[14px] xs:text-[15px] sm:text-[16px] text-text-dark mt-2">
            <div>Delivering Exceptional Care and Specialized</div>
            <div>Expertise to Enhance Your Health and Well-being</div>
        </div>

        {/* Carousel */}
        <div>
            <Slider {...settings} className="mx-6 mt-10">
            {doctors.map((doctor, index) => (
              <div
                key={index}
              >
                <MedicalProfessionalsCard
                  imageSrc={doctor.imageSrc}
                  name={doctor.title}
                  specialization={doctor.department}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Buttons */}
        <div className="
            flex 
            flex-row 
            justify-center
            mt-8
            gap-x-4"
        >
            <button className="
                w-[12em]
                h-[3em] 
                border-2 
                border-buttonColor 
                text-[13px]
                font-[Poppins] 
                font-[700] 
                text-buttonColor 
                rounded-lg 
                flex 
                justify-center 
                items-center"
            >
                Find Best Doctors
            </button>

            <button className="
                w-[12em]
                h-[3em] 
                bg-buttonColor 
                text-white 
                text-[13px]
                font-[Poppins] 
                font-[700] 
                rounded-lg 
                flex 
                justify-center 
                items-center"
            >
                Book Appointment
            </button>
        </div>
    </div>
  )
}
