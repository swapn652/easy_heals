import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { TreatmentBySymptomsCard } from './TreatmentBySymptomsCard';
import axios from 'axios';
import { useAuth } from '../../AuthContext';

export const TreatmentBySymptoms = () => {
   // Custom prev arrow component with custom styling
   const CustomPrevArrow = ({ onClick }) => (
    <div
      className="cursor-pointer custom-arrow prev absolute xl:-left-10 lg:-left-8 xl:top-16 lg:top-12 lg:w-[1.7em] xl:w-[2em]"
      onClick={onClick}
    >
      <img src="./navigation_left.svg"/>
    </div>
  );

  // Custom next arrow component with custom styling
  const CustomNextArrow = ({ onClick }) => (
    <div
      className="cursor-pointer custom-arrow next absolute xl:-right-8 lg:-right-8 xl:top-16 lg:top-12 lg:w-[1.7em] xl:w-[2em]"
      onClick={onClick}
    >
       <img src="./navigation_right.svg"/>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, // Custom previous arrow component
    nextArrow: <CustomNextArrow />, // Custom next arrow component
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          prevArrow: null,
          nextArrow: null
        }
      }
    ]
  };

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
    <div className="relative w-screen 2xl:h-[39em] xl:h-[35em] lg:h-[30em] md:h-[21em] flex justify-center">
        {/* Heading */}
        <div className="flex items-center justify-center absolute top-20">
            <span className="3xl:w-[32vw] 2xl:w-[460px] xl:w-[32vw] lg:w-[320px] 2md:w-[30.1vw] md:w-[28.7vw] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins font-semibold 3xl:text-[30px] 2xl:text-[27px] xl:text-[23px] md:text-[22px] mx-2">
                Treatment By Symptoms
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="3xl:w-[32vw] 2xl:w-[460px] xl:w-[32vw] lg:w-[320px] 2md:w-[30.1vw] md:w-[28.7vw] h-[1px] bg-text-light"></span>
        </div>

        {/* Carousel */}
        {symptoms.length > 0 && (<div className="2xl:h-[20em] xl:h-[18em] lg:h-[14em] w-[90vw] absolute xl:top-40 lg:top-36 md:top-32">
          <Slider {...settings} className="">
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
        )}

        {/* Buttons */}
        <div className="
            absolute 
            flex 
            flex-row 
            justify-center 
            gap-x-10 
            2xl:top-[26em] 
            xl:top-[23.5em] 
            lg:top-[20em]
            md:top-[19.5em]"
        >
            <button className="
                md:w-[14em] 
                h-[3em] 
                bg-buttonColor 
                text-white 
                3xl:text-[18px]
                2xl:text-[16px] 
                xl:text-[14px] 
                lg:text-[12px] 
                md:text-[13px]
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
                md:w-[14em]
                h-[3em] border-2 
                border-buttonColor 
                3xl:text-[18px]
                2xl:text-[16px] 
                xl:text-[14px] 
                lg:text-[12px] 
                md:text-[13px]
                font-[Poppins] 
                font-[700] 
                text-buttonColor 
                rounded-lg flex 
                justify-center 
                items-center"
            >
                Browse Symptoms
            </button>
        </div>
    </div>
  )
}
