import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { HospitalCard } from './HospitalCard';
import Slider from 'react-slick';

export const TopHospitalsMobile = () => {
    const extractAddress = (address) => {
        const addressTerms = address.split(',').map((term) => term.trim());
        if (addressTerms.length >= 3) {
          return addressTerms[1] + ', ' + addressTerms[addressTerms.length - 3];
        }
        return address;
      };
  
    const bearerToken = useAuth();
    const [hospitals, setHospitals] = useState([]);
      
    useEffect(() => {
        const apiUrl = 'https://api.development.easyheals.com/Search/featuredHospitals';
      
        axios
          .get(apiUrl, {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          })
          .then((response) => {
            const data = response.data.data.filter((hospital) => hospital.title && hospital.title.length <= 30)  // Filter out hospitals with names > 25 characters
            .map((hospital) => ({ 
              name: hospital.title,
              imageSrc: hospital.image,
              address: extractAddress(hospital.address),
            }))
            .filter((hospital) => hospital.address && hospital.address.length <= 50); // Filter out hospitals with missing or > 25 characters address
  
            console.log(data)
            setHospitals(data);
          })
          .catch((error) => {
            console.error('Error fetching featured hospitals:', error);
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
    <div className="flex flex-col relative 3xs:h-[34em] 2xs:h-[35em] xs:h-[37em] sm:h-[39em]">

        {/* Heading and subheading */}
        <div className="flex flex-col items-center font-[Poppins]">
            <div className="text-[18px] font-[600] 3xs:text-[20px] xs:text-[21px] sm:text-[24px]">Find and Book</div>
            <div className="flex flex-row font-[600] 3xs:text-[20px] xs:text-[21px] sm:text-[24px]">
                <div className="text-green2">Top Hospitals</div>
                <div className="ml-[0.3em]">near you</div>
            </div>
        </div>
        <div className="flex flex-col items-center font-[Raleway] 3xs:text-[14px] xs:text-[15px] sm:text-[16px] text-text-dark mt-2">
            <div>Delivering Exceptional Care and Specialized</div>
            <div>Expertise to Enhance Your Health and Well-being</div>
        </div>

        {/* Carousel */}
        <div>
            <Slider {...settings} className="mx-6 mt-6">
                {hospitals.map((hospital, index) => (
                <div
                    key={index}
                >
                    <HospitalCard
                    imageSrc={hospital.imageSrc}
                    name={hospital.name}
                    address={hospital.address}
                    />
                </div>
                ))}
            </Slider>
        </div>

           {/* Button */}
        <button className="
            w-[15em] 
            h-[2.7em] 
            border-2 
            border-buttonColor 
            font-[Poppins] 
            font-[700] 
            text-[14px]
            text-buttonColor 
            rounded-lg 
            absolute 
            sm:top-[35em]
            xs:top-[33em]
            2xs:top-[30em]
            3xs:top-[29.5em]
            flex 
            self-center 
            justify-center 
            items-center"
        >
            Find Best Hospitals
        </button>
    </div>
  )
}
