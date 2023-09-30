import React, { useState, useEffect } from 'react';
import { TreatmentBySymptomsCard } from './TreatmentBySymptomsCard';
import { useAuth } from '../../AuthContext';
import axios from 'axios';
import Slider from 'react-slick';

export const TreatmentBySymptomsMobile = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: null,
        nextArrow: null
    }

  const bearerToken = useAuth();
  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.development.easyheals.com/lookups/symptoms';

    // Use the bearerToken obtained from useAuth to make the request
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .then((response) => {
        const data = response.data.data.filter((item) => item.image !== null && item.title.length <= 10);
        setSymptoms(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [bearerToken]); // Include bearerToken in the dependency array


  return (
    <div className="flex flex-col relative 3xs:h-[17.5em] xs:h-[19em] sm:h-[20em]">
        <div className="flex flex-row items-center justify-center">
            <div className="h-[1px] 3xs:w-[11.2vw] 2xs:w-[12.8vw] xs:w-[12.8vw] sm:w-[13.7vw] bg-text-light"></div>
            <img src="./plus_icon.svg" />
            <div className="mx-4 font-[700] 3xs:text-[18px] xs:text-[19px] sm:text-[20px]">Treatment By Symptoms</div>
            <img src="./plus_icon.svg" />
            <div className="h-[1px] 3xs:w-[11.2vw] 2xs:w-[12.8vw] xs:w-[12.8vw] sm:w-[13.7vw] bg-text-light"></div>
        </div>

        <div>
            <Slider {...settings} className="mx-6">
                {symptoms.map((symptom) => (
                    <div key={symptom.id} className="m-4">
                      {/* Pass the symptom data to the TreatmentBySymptomsCard component */}
                      <TreatmentBySymptomsCard
                        imageSrc={symptom.image}
                        title={symptom.title}
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
            sm:top-[16em]
            xs:top-[15em]
            3xs:top-[14em]
            flex 
            self-center 
            justify-center 
            items-center"
        >
            Browse All Symptoms
        </button>
    </div>
  )
}