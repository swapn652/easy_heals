import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import { useAuth } from '../../AuthContext';
import { TreatmentBySymptomsCard } from './TreatmentBySymptomsCard';

export const TreatmentBySpeciality = () => {
    const divStyle = {
        backgroundImage: `url('./FeaturedServices_bg.svg')`,
        backgroundSize: 'cover', // You can adjust this based on your image requirements
        backgroundRepeat: 'no-repeat'
      };

      const CustomPrevArrow = ({ onClick }) => (
        <div
          className="cursor-pointer custom-arrow prev absolute xl:-left-10 lg:-left-8 2xl:top-16 xl:top-12 lg:top-10 lg:w-[1.7em] xl:w-[2em]"
          onClick={onClick}
        >
          <img src="./navigation_left.svg"/>
        </div>
      );
    
      // Custom next arrow component with custom styling
      const CustomNextArrow = ({ onClick }) => (
        <div
          className="cursor-pointer custom-arrow next absolute xl:-right-8 lg:-right-8 2xl:top-16 xl:top-12 lg:top-10 lg:w-[1.7em] xl:w-[2em]"
          onClick={onClick}
        >
           <img src="./navigation_right.svg"/>
        </div>
      );
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />, // Custom previous arrow component
      nextArrow: <CustomNextArrow />, // Custom next arrow component
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
    <div style={divStyle} className="relative w-screen 4xl:h-[33em] 2xl:h-[30em] xl:h-[28em] lg:h-[24em] flex justify-center">
        <img 
            src="./plus_bg_1.svg" 
            className="
                absolute 
                right-0 
                2xl:-top-[12.2em] 
                xl:-top-[10.3em] 
                lg:-top-[8.5em] 
                2xl:w-52 
                xl:w-44 
                lg:w-36"
            />
        <div 
            style={{boxShadow: "0px 4px 40px 0px #60606040"}}  
            className="absolute w-[90vw] 3xl:h-[30em] 2xl:h-[28em] xl:h-[27em] lg:h-[22em] bg-white -top-12"
        >
            <div className="mt-10 flex items-center justify-center">
                <span className="5xl:w-[33.4vw] 4xl:w-[32.7vw] 3xl:w-[32.4vw] 2xl:w-[455.6px] xl:w-[32.25vw] lg:w-[296.5px] h-[1px] bg-text-light"></span>
                <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
                <span className="px-4 font-Poppins font-semibold 4xl:text-[34px] 3xl:text-[30px] 2xl:text-[27px] xl:text-[23px] lg:text-[22px] mx-2">
                    Treatment By Speciality
                </span>
                <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
                <span className="5xl:w-[33.4vw] 4xl:w-[32.7vw] 3xl:w-[32.4vw] 2xl:w-[455.6px] xl:w-[32.25vw] lg:w-[296.5px] h-[1px] bg-text-light"></span>
            </div>
        </div>
 
        {/* Carousel */}
        <div className="xl:h-[9em] lg:h-[8em] w-[80vw] absolute xl:top-[4.5em] lg:top-16">
          <Slider {...settings} className="m-4">
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

        {/* Button */}
        <button className="
            lg:w-[14em] 
            h-[3em] 
            border-2 
            border-green2 
            4xl:text-[20px]
            3xl:text-[18px]
            2xl:text-[16px] 
            xl:text-[14px] 
            lg:text-[12px] 
            font-[Poppins] 
            font-[700] 
            text-green2 
            rounded-lg 
            absolute 
            4xl:top-[16em]
            3xl:top-[18em]
            2xl:top-[19em] 
            xl:top-[21em] 
            lg:top-[19em] 
            flex 
            self-center 
            justify-center 
            items-center"
        >
            Browse All Specialities
        </button>
    </div>
  )
}
