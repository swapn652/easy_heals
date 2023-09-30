import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import { HospitalCard } from './HospitalCard';

export const TopHospitals = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // Custom prev arrow component with custom styling
    const CustomPrevArrow = ({ onClick }) => (
      <div
        className="cursor-pointer custom-arrow prev absolute xl:-left-12 lg:-left-[2.2em] 2xl:top-32 xl:top-24 lg:top-20 lg:w-[1.7em] xl:w-[2em]"
        onClick={onClick}
      >
        <img src="./navigation_left.svg" />
      </div>
    );
  
    // Custom next arrow component with custom styling
    const CustomNextArrow = ({ onClick }) => (
      <div
        className="cursor-pointer custom-arrow next absolute xl:-right-8 lg:-right-[1.7em] 2xl:top-32 xl:top-24 lg:top-20 lg:w-[1.7em] xl:w-[2em]"
        onClick={onClick}
      >
        <img src="./navigation_right.svg" />
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
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update the current slide
    };

    // Function to extract the second and third last terms from the address
    // Did because the address was too long so took the name of main area and city
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
    <div className="relative w-screen 2xl:h-[40.5em] xl:h-[40em] lg:h-[30em] flex justify-center flex-row font-[Raleway]">
        <img src="./plus_bg_3.svg" alt="plus_bg_3.svg" className="absolute xl:top-[7em] lg:top-[4em] right-0 2xl:w-[11em] xl:w-[10em] lg:w-[9em]"/>
        <div className="w-[90vw] h-[0.5px] bg-text-light absolute xl:top-[6em] lg:top-[4em]"></div>
    {/* Left section */}
        <div className="absolute flex flex-col right-24 2xl:top-[13em] xl:top-[12em] lg:top-[10em]">
            <div className="2xl:text-[38px] xl:text-[35px] lg:text-[26px] font-[700]">
                <div>
                    Find and Book
                </div>
                <div className="flex flex-row"> 
                    <div className="text-green2">Top Hospitals</div>
                    <div className="ml-[0.2em]">near you</div>
                </div>
            </div>
            <div className="2xl:text-[15px] xl:text-[14px] lg:text-[11.2px] text-text-dark mt-2">
                <div>
                    Delivering Exceptional Care and Specialized Expertise to 
                </div>
                <div>
                    Enhance Your Health and Well-being
                </div>
            </div>
        </div>

        {/* Buttons */}
        <button className="
            absolute
            top-[26.5em]
            xl:right-[21em]
            lg:right-[23em]
            xl:w-[13em] 
            lg:w-[12em] 
            h-[3em] 
            bg-buttonColor 
            text-white 
            2xl:text-[15px] 
            xl:text-[14px] 
            lg:text-[11px] 
            font-[Poppins] 
            font-[700] 
            rounded-lg 
            flex 
            justify-center 
            items-center"
            >
                Find Best Hospitals
        </button>

      {/* Line at the end of the section , i.e., after the carousel*/}
        <div className="w-[90vw] h-[0.5px] bg-text-light absolute 2xl:bottom-[6em] xl:bottom-[8em] lg:bottom-[6em]"></div>

        <div className="z-10 absolute xl:left-[5em] lg:left-[4em] 2xl:top-[11em] xl:top-[10.5em] lg:top-[7.5em] 2xl:w-[45em] xl:w-[40em] lg:w-[33em]">
          <Slider {...settings} className="">
              {hospitals.map((hospital, index) => (
                <div
                  key={index}
                  className={`w-[10em] ${
                    index === currentSlide ? 'scale-100' : 'scale-90'
                  } transition-transform duration-300 ease-in-out`}
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

        <img src="./hospitals_vector.svg" className="absolute left-0"/>
    </div>
  )
}
