import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { TreatmentBySymptomsCard } from './TreatmentBySymptomsCard';

export const TreatmentBySpecialityMediumScreen = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    prevArrow: null,
    nextArrow: null
  };

  const bearerToken = useAuth();
  const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.development.easyheals.com/lookups/specialities';

    // Use the bearerToken obtained from useAuth to make the request
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .then((response) => {
        const data = response.data.data.filter((item) => item.image !== null && item.title.length <= 10);
        setSpecialities(data);
      })
      .catch((error) => {
        console.error('Error fetching specialities:', error);
      });
  }, [bearerToken]); // Include bearerToken in the dependency array



  return (
    <div className="relative w-screen flex justify-center">
        {/* Heading */}
        <div className="flex items-center justify-center absolute top-20">
            <span className="w-[23vw] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins font-semibold 2xl:text-[27px] xl:text-[23px] md:text-[22px] mx-2">
                Treatment By Speciality
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="w-[23vw] h-[1px] bg-text-light"></span>
        </div>

        {/* Carousel */}
        <div className="w-[90vw] absolute top-32">
          <Slider {...settings} className="">
            {specialities.map((speciality) => (
                    <div key={speciality.id} className="m-4">
                      {/* Pass the speciality data to the TreatmentBySymptomsCard component */}
                      <TreatmentBySymptomsCard
                        imageSrc={speciality.image}
                        title={speciality.title}
                      />
                  </div>
                ))}
          </Slider>
        </div>

        {/* Buttons */}
        <div className="
            absolute 
            flex 
            flex-row 
            justify-center 
            gap-x-10 
            top-[19.5em]"
        >
            <button className="
                w-[15em]
                h-[3em] border-2 
                border-green2
                text-[13px]
                font-[Poppins] 
                font-[700] 
                text-green2 
                rounded-lg flex 
                justify-center 
                items-center"
            >
                Browse All Specialities
            </button>
        </div>
    </div>
  )

}
