import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { TreatmentBySymptomsCard } from './TreatmentBySymptomsCard';
import axios from 'axios';

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
  };

  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint and token
    const apiUrl = 'https://api.development.easyheals.com/lookups/symptoms';
    const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJhcGk6Ly81NjNhMTgzNS1iMjRlLTQwYjUtOTdiNC1lMDhjYjViODk0MTMiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iZTkxYjNiYy1mYWE3LTRjNTQtODU4Mi0wYzVmZjU5OTYyYTkvIiwiaWF0IjoxNjk1MzkwMjA1LCJuYmYiOjE2OTUzOTAyMDUsImV4cCI6MTY5NTM5NDEwNSwiYWlvIjoiRTJGZ1lNaEozTDh4UlpCdHd0MXZTcGV1Zk5OT0J3QT0iLCJhcHBpZCI6ImQxODdhZmQyLTc4NWEtNDk2YS1hMDk2LTc2NTg4ZmQ5MWM3OCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2JlOTFiM2JjLWZhYTctNGM1NC04NTgyLTBjNWZmNTk5NjJhOS8iLCJvaWQiOiIyMzYwNDE2NS1lNzViLTQyYTktODNhYi0yNzgyMzUzZGVmNTQiLCJyaCI6IjAuQVZZQXZMT1J2cWY2VkV5RmdneGY5WmxpcVRVWU9sWk9zclZBbDdUZ2pMVzRsQk9mQUFBLiIsInN1YiI6IjIzNjA0MTY1LWU3NWItNDJhOS04M2FiLTI3ODIzNTNkZWY1NCIsInRpZCI6ImJlOTFiM2JjLWZhYTctNGM1NC04NTgyLTBjNWZmNTk5NjJhOSIsInV0aSI6Ik0xNWRNT1V5UTBtczRGN0JvX0ZZQUEiLCJ2ZXIiOiIxLjAifQ.PPhEfcpP3drTs4tItcryK7I82zGnILuw6oiVcDOXkHd2cUlJw9ct8ZOrFg2uImJcUsIIMYoKqgS9MRepMOcmVdZDd7yKaRuegbzoZJ9qGraImeyvL-J5-mC4BLgXzxSoFodMbmXHo8T1SUOD07Ea_x72KYr0w6jePzllOBJyoa-8rRMSMJtUyaYWegGrTclWplPdRWTlx47-jPPLyY1K2LJMwXzILDPDiDBk-Xu3L7Hk9sAogGCRfCC1sNBT3mNmpY1J4zPq-IYliD7_6IA6ofun98JJy1tAZQzLZxxou6i_qtMfopXMEqyIHdueWiNR5wq5424Y5Kbb0c-n_sK_Rw';

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .then((response) => {
        const data = response.data.data.filter((item) => item.image !== null);
        console.log(data);
        setSymptoms(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="relative w-screen 2xl:h-[40em] xl:h-[38em] lg:h-[34em] flex justify-center">
        {/* Heading */}
        <div className="flex items-center justify-center absolute top-20">
            <span className="2xl:w-[460px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins font-semibold 2xl:text-[27px] xl:text-[23px] lg:text-[22px] mx-2">
                Treatment By Symptoms
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="2xl:w-[460px] xl:w-[430px] lg:w-[320px] h-[1px] bg-text-light"></span>
        </div>

        {/* Carousel */}
        <div className="2xl:h-[20em] xl:h-[18em] lg:h-[14em] w-[90vw] absolute xl:top-40 lg:top-36">
          <Slider {...settings} className="">
            <div className="">
            <TreatmentBySymptomsCard imageSrc="doctor.png" title="Headache" />
            </div>
            <div className="">
            <TreatmentBySymptomsCard imageSrc="doctor.png" title="Headache" />
            </div>
            <div className="">
            <TreatmentBySymptomsCard imageSrc="doctor.png" title="Headache" />
            </div>
            <div className="">
            <TreatmentBySymptomsCard imageSrc="doctor.png" title="Headache" />
            </div>
            <div className="">
            <TreatmentBySymptomsCard imageSrc="doctor.png" title="Headache" />
            </div>
            <div className="">
            <TreatmentBySymptomsCard imageSrc="doctor.png" title="Headache" />
            </div>
            <div className="">
            <TreatmentBySymptomsCard imageSrc="doctor.png" title="Headache" />
            </div>
            <div className="">
            <TreatmentBySymptomsCard imageSrc="doctor.png" title="Headache" />
            </div>
          </Slider>
        </div>

        {/* Buttons */}
        <div className="
            absolute 
            flex 
            flex-row 
            justify-center 
            gap-x-10 
            2xl:top-[26em] 
            xl:top-[24.5em] 
            lg:top-[21em]"
        >
            <button className="
                lg:w-[14em] 
                h-[3em] 
                bg-buttonColor 
                text-white 
                2xl:text-[16px] 
                xl:text-[14px] 
                lg:text-[12px] 
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
                lg:w-[14em] 
                h-[3em] border-2 
                border-buttonColor 
                2xl:text-[16px] 
                xl:text-[14px] 
                lg:text-[12px] 
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
