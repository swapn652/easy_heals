import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import Slider from 'react-slick';
import { TreatmentBySymptomsCard } from './TreatmentBySymptomsCard';

export const TreatmentBySpecialityMobile = () => {
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
    
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: null,
    nextArrow: null
  };

  return (
    <div className="flex flex-col relative 3xs:h-[17.5em] xs:h-[18.2em]">
        <div className="flex flex-row items-center justify-center">
            <div className="h-[1px] 3xs:w-[13.3vw] 2xs:w-[14.8vw] xs:w-[16.1vw] sm:w-[17.9vw] bg-text-light"></div>
            <img src="./plus_icon.svg" />
            <div className="mx-4 font-[700] text-[16px]">Treatment By Specialities</div>
            <img src="./plus_icon.svg" />
            <div className="h-[1px] 3xs:w-[13.3vw] 2xs:w-[14.8vw] xs:w-[16.1vw] sm:w-[17.9vw] bg-text-light"></div>
        </div>

        <div>
            <Slider {...settings} className="mx-6">
              {specialities.map((speciality) => (
                      <div key={speciality.id} className="ml-4">
                        {/* Pass the symptom data to the TreatmentBySymptomsCard component */}
                        <TreatmentBySymptomsCard
                          imageSrc={speciality.image}
                          title={speciality.title}
                        />
                    </div>
                  ))}
            </Slider>
        </div>
    </div>
  )
}
