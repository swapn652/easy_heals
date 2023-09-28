import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import { TreatmentByDiseasesCard } from './TreatmentByDiseasesCard';
import axios from 'axios';
import { useAuth } from '../AuthContext';

export const TreatmentByDiseasesMediumScreen = () => {
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
    <div className="relative flex flex-col">
        <div className="flex flex-row justify-center items-center">
            <div className="w-[23.5vw] h-[1px] bg-text-light"></div>
            <img src="./plus_icon.svg" />
            <div className="text-[22px] mx-6 font-[700] font-[Raleway]">Treatment by Diseases</div>
            <img src="./plus_icon.svg" />
            <div className="w-[23.5vw] h-[1px] bg-text-light"></div>
        </div>

        <div className="mx-10 mt-6">
            <Slider {...settings}>
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
    </div>
  )
}
