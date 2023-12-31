import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { MedicalProfessionalsCard } from './MedicalProfessionalsCard';
import { useAuth } from '../../AuthContext';
import axios from 'axios';

export const MedicalProfessionals = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Custom prev arrow component with custom styling
    const CustomPrevArrow = ({ onClick }) => (
      <div
        className="cursor-pointer custom-arrow prev absolute xl:-left-10 lg:-left-[2.2em] 2xl:top-36 xl:top-28 lg:top-20 lg:w-[1.7em] xl:w-[2em]"
        onClick={onClick}
      >
        <img src="./navigation_left.svg" />
      </div>
    );
  
    // Custom next arrow component with custom styling
    const CustomNextArrow = ({ onClick }) => (
      <div
        className="cursor-pointer custom-arrow next absolute xl:-right-8 lg:-right-[1.7em] 2xl:top-36 xl:top-28 lg:top-20 lg:w-[1.7em] xl:w-[2em]"
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
  
  const bearerToken = useAuth();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.development.easyheals.com/Search/featuredDoctors';

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        const doctorInfo = data.map((doctor) => ({
          title: doctor.title,
          imageSrc: doctor.image,
          department: doctor.specialities && doctor.specialities.length > 0
            ? doctor.specialities[0].title
            : 'General', // Get the first specialization or use 'General' if not present in data
        }));
        setDoctors(doctorInfo);
      })
      .catch((error) => {
        console.error('Error fetching featured doctors:', error);
      });
  }, [bearerToken]);

  return (
    // Parent Container, made flex row to align text on left and doctors carousel on right
    <div className="relative w-screen 2xl:h-[32em] xl:h-[28em] lg:h-[21em] flex flex-row font-[Raleway]">
        {/* Left section */}
        <div className="absolute flex flex-col left-20 3xl:top-[9em] 2xl:top-[11em] xl:top-[10em] lg:top-[8em]">
            <div className="4xl:text-[52px] 3xl:text-[42px] 2xl:text-[38px] xl:text-[35px] lg:text-[26px] font-[700]">
                <div className="flex flex-row ">
                    <div>
                        Top
                    </div>
                    <div className="text-green2 ml-2">
                        Medical Professionals
                    </div>
                </div>
                <div className=""> 
                    at Your Service
                </div>
            </div>
            <div className="4xl:text-[22px] 3xl:text-[18px] 2xl:text-[15px] xl:text-[14px] lg:text-[11.2px] text-text-dark mt-2">
                <div>
                    Delivering Exceptional Care and Specialized Expertise to 
                </div>
                <div>
                    Enhance Your Health and Well-being
                </div>
            </div>
        </div>

        {/* Buttons */}
        <div className="absolute 
            flex 
            flex-row 
            justify-center 
            xl:gap-x-6 
            lg:gap-x-4 
            4xl:top-[25em]
            2xl:top-[23.5em] 
            xl:top-[21.5em] 
            lg:top-[16.7em] 
            left-20"
        >
            <button className="
                xl:w-[13em] 
                lg:w-[12em] 
                h-[3em] 
                bg-buttonColor 
                text-white 
                4xl:text-[20px]
                3xl:text-[18px]
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
                Book Appointment
            </button>
            <button className="
                xl:w-[13em] 
                lg:w-[12em] 
                h-[3em] 
                border-2 
                border-buttonColor
                4xl:text-[20px] 
                3xl:text-[18px]
                2xl:text-[15px] 
                xl:text-[14px] 
                lg:text-[11px] 
                font-[Poppins] 
                font-[700] 
                text-buttonColor 
                rounded-lg 
                flex 
                justify-center 
                items-center"
            >
                Find Best Doctors
            </button>
        </div>

        <div className="z-10 absolute xl:right-[5em] lg:right-[4em] 2xl:top-[10em] xl:top-[9em] lg:top-[7em] 4xl:w-[55em] 3xl:w-[50em] 2xl:w-[45em] xl:w-[40em] lg:w-[33em]">
          <Slider {...settings} className="">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className={`w-[10em] ${
                  index === currentSlide ? 'scale-95' : 'scale-[85%]'
                } transition-transform duration-300 ease-in-out`}
              >
                <MedicalProfessionalsCard
                  imageSrc={doctor.imageSrc}
                  name={doctor.title}
                  specialization={doctor.department}
                />
              </div>
            ))}
          </Slider>
        </div>
        
        <img src="./circle-element.svg" className="absolute 2xl:w-[7em] xl:w-[6em] lg:w-[5em] right-0 2xl:top-[23em] xl:top-[21em] lg:top-[16em]" />
        <img src="./dotted.svg" className="2xl:w-[15em] xl:w-[12em] lg:w-[10em] absolute 2xl:top-28 xl:top-[7em] lg:top-[5em] 4xl:left-[49em] 3xl:left-[40em] 2xl:left-[35em] xl:left-[32em] lg:left-[26em]"/>
        <img src="./doctors_bg.svg" className="3xl:w-[50em] 2xl:w-[47em] xl:w-[42em] lg:w-[34em] absolute 2xl:top-[15em] xl:top-[13em] lg:top-[10.5em] right-0"/>
    </div>
  )
}
