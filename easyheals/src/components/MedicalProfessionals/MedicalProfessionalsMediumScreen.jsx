import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { MedicalProfessionalsCard } from './MedicalProfessionalsCard';
import { useAuth } from '../AuthContext';
import axios from 'axios';

export const MedicalProfessionalsMediumScreen = () => {
    const settings = {
            dots: false,
            infinite: true,
            centerMode: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: null, // Custom previous arrow component
            nextArrow: null, // Custom next arrow component
    };

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
  

  return (
    <div className="w-screen h-[32em] flex flex-col relative">
        <div className="flex flex-col items-center">
            <div className="flex flex-row font-[Poppins] font-[700] text-[22px]">
                <div>
                    Top
                </div>
                <div className="ml-[0.25em] text-green2">
                    Medical Professionals
                </div>
                <div className="ml-[0.25em]">
                    at your service
                </div>
            </div>
            <div className="text-[14px] text-text-dark font-[Raleway] mt-2">
                Delivering Exceptional Care and Specialized Expertise to Enhance Your Health and Well-being
            </div>
        </div>

        <div className="z-10 mt-12 mx-8">
          <Slider {...settings} className="">
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

        <img src="./dotted.svg" className="w-[14em] absolute top-16"/>
        <img src="./plus_bg_1.svg" className="w-[10em] absolute right-0 -top-24"/>
        
        <div className="
            flex 
            flex-row 
            justify-center
            mt-10
            gap-x-10"
        >
            <button className="
                w-[15em]
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
            <button className="
                w-[15em]
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
        </div>
    </div>
  )
}
