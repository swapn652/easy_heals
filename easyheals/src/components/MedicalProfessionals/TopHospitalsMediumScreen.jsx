import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import { HospitalCard } from './HospitalCard'

export const TopHospitalsMediumScreen = () => {
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

  return (
    <div className="w-screen h-[30em] flex flex-col relative">
    <div className="flex flex-col items-center">
        <div className="flex flex-row font-[Poppins] font-[700] text-[22px]">
            <div>
                Find and Book
            </div>
            <div className="ml-[0.25em] text-green2">
                Top Hospitals
            </div>
            <div className="ml-[0.25em]">
                near you
            </div>
        </div>
        <div className="text-[14px] text-text-dark font-[Raleway] mt-2">
            Delivering Exceptional Care and Specialized Expertise to Enhance Your Health and Well-being
        </div>
    </div>

    <div className="z-10 mt-12 mx-8">
      <Slider {...settings} className="">
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
    
    <button className="
            w-[15em]
            h-[3em] 
            border-2 
            border-buttonColor 
            md:text-[13px]
            font-[Poppins] 
            font-[700] 
            text-buttonColor 
            rounded-lg 
            absolute  
            top-[30.5em]
            flex 
            self-center 
            justify-center 
            items-center
            cursor-pointer"
        >
            Find Best Hospitals
        </button>
</div>
  )
}
