import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { useAuth } from '../AuthContext';
import { TreatmentByDiseasesCard } from './TreatmentByDiseasesCard';

export const TreatmentByDiseasesMobile = () => {

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
              if (item.title.length > 16) {
                return { ...item, title: item.title.slice(0, 16) + '...' };
              }
    
              // Truncate description to 50 characters and add "..." if it's longer
              if (item.short_description.length > 50) {
                return { ...item, short_description: item.short_description.slice(0, 50) + '...' };
              }
    
              return item;
            });
          setProblems(data);
        })
        .catch((error) => {
          console.error('Error fetching problems:', error);
        });
    }, [bearerToken]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: null,
        nextArrow: null,
        rows: 2,
        itemsPerRow: 2,
        centerMode: true
    };

  return (
    <div className="flex flex-col relative sm:h-[26em] xs:h-[24em] 2xs:h-[22em] 3xs:h-[21em]">
        {/* Heading */}
        <div className="flex flex-row items-center justify-center">
            <div className="h-[1px] 3xs:w-[13.4vw] 2xs:w-[14.8vw] xs:w-[14.8vw] sm:w-[15.6vw] bg-text-light"></div>
            <img src="./plus_icon.svg" />
            <div className="mx-4 font-[700] 3xs:text-[18px] xs:text-[19px] sm:text-[20px]">Treatment By Diseases</div>
            <img src="./plus_icon.svg" />
            <div className="h-[1px] 3xs:w-[13.4vw] 2xs:w-[14.8vw] xs:w-[14.8vw] sm:w-[15.6vw] bg-text-light"></div>
        </div>

        {/* Carousel */}
        <div>
            <Slider {...settings} className="mx-6">
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
            sm:top-[21em]
            xs:top-[18.5em]
            2xs:top-[16em]
            3xs:top-[16em]
            flex 
            self-center 
            justify-center 
            items-center"
        >
            View all Diseases
        </button>
    </div>
  )
}
