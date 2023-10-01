import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { TreatmentByDiseasesCard } from './TreatmentByDiseasesCard';
import { useAuth } from '../../AuthContext';
import axios from 'axios';

export const TreatmentByDiseases = () => {

      // Custom prev arrow component with custom styling
  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="cursor-pointer custom-arrow prev absolute 2xl:-left-20 xl:-left-14 lg:-left-14 2xl:top-28 xl:top-[6.4em] lg:top-[5.8em] lg:w-[1.7em] xl:w-[2em]"
      onClick={onClick}
    >
      <img src="./navigation_left.svg"/>
    </div>
  );

  // Custom next arrow component with custom styling
  const CustomNextArrow = ({ onClick }) => (
    <div
      className="cursor-pointer custom-arrow next absolute 2xl:-right-16 xl:-right-12 lg:-right-10 2xl:top-28 xl:top-[6.4em] lg:top-[5.8em] lg:w-[1.7em] xl:w-[2em]"
      onClick={onClick}
    >
       <img src="./navigation_right.svg"/>
    </div>
  );
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />, // Custom previous arrow component
        nextArrow: <CustomNextArrow />, // Custom next arrow component
        rows: 2,
        itemsPerRow: 2,
    };

    const bearerToken = useAuth();
    const [problems, setProblems] = useState([]);

    useEffect(() => {
      const apiUrl = 'https://api.development.easyheals.com/lookups/problems';
    
      // Use the bearerToken obtained from useAuth to make the request
      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        })
        .then((response) => {
          const data = response.data.data
            .filter((item) => item.image !== null) // Filter out items with null images
            .map((item) => {
              // Filter out items with title length > 15
              if (item.title.length > 25) {
                return { ...item, title: item.title.slice(0, 25) + '...' };
              }
    
              // Truncate description to 50 characters and add "..." if it's longer
              if (item.short_description.length > 100) {
                return { ...item, short_description: item.short_description.slice(0, 100) + '...' };
              }
    
              return item;
            });
          setProblems(data);
        })
        .catch((error) => {
          console.error('Error fetching problems:', error);
        });
    }, [bearerToken]);
    

  return (
    <div className="relative w-screen 2xl:h-[28em] xl:h-[23em] lg:h-[17em] flex justify-center font-[Raleway]">
        {/* Heading */}
        <div className="flex items-center justify-center absolute top-20">
            <span className="3xl:w-[32vw] 2xl:w-[460px] xl:w-[32vw] lg:w-[320px] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins font-[700] 3xl:text-[30px] 2xl:text-[27px] xl:text-[23px] lg:text-[22px] mx-2">
                Treatment By Diseases
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="3xl:w-[32vw] 2xl:w-[460px] xl:w-[32vw] lg:w-[320px] h-[1px] bg-text-light"></span>
        </div>

        <img src="./plus_bg_4.svg" className="absolute left-0 2xl:top-4 xl:top-10 lg:top-12 2xl:w-[11em] xl:w-[8em] lg:w-[7em]"/>
        <img src="./diseases_section_vector.svg" className="absolute left-0 2xl:-top-[25em] xl:-top-[23em] lg:-top-[20em] 2xl:w-[25em] xl:w-[23em] lg:w-[20em]"/>

         {/* Carousel */}
         {problems.length > 0 && (
            <div className="2xl:h-[20em] xl:h-[18em] lg:h-[14em] md:h-[30em] xl:w-[87vw] lg:w-[80vw] absolute 2xl:top-44 xl:top-40 lg:top-36 lg:mx-[4.5em]">
              <Slider {...settings} className="flex 2xl:ml-6 xl:ml-0">
                {problems.map((problem) => (
                  <div key={problem.id}>
                    <TreatmentByDiseasesCard
                      imageSrc={problem.image}
                      title={problem.title}
                      description={problem.short_description}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          )}

        {/* Button */}
        <button className="
            lg:w-[14em] 
            md:w-[15em]
            h-[3em] 
            border-2 
            border-buttonColor 
            3xl:text-[18px]
            2xl:text-[16px] 
            xl:text-[14px] 
            lg:text-[12px] 
            md:text-[13px]
            font-[Poppins] 
            font-[700] 
            text-buttonColor 
            rounded-lg 
            absolute  
            3xl:top-[27em]
            lg:top-[30em] 
            flex 
            self-center 
            justify-center 
            items-center
            cursor-pointer"
        >
            View all Diseases
        </button>
    </div>
  )
}
