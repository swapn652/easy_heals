import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import Slider from 'react-slick';
import { LabTestCardMediumScreen } from './LabTestCardMediumScreen';

export const LabTestMobile = () => {
    const extractAddress = (address) => {
        const addressTerms = address.split(',').map((term) => term.trim());
        if (addressTerms.length >= 3) {
          const secondTerm = addressTerms[1];
          const thirdLastTerm = addressTerms[addressTerms.length - 3];
          const mergedAddress = `${secondTerm}, ${thirdLastTerm}`;
          if (mergedAddress.length > 25) {
            return thirdLastTerm;
          } else {
            return mergedAddress;
          }
        }
        return address;
      };
    
    const bearerToken = useAuth();
    const [labTests, setLabTests] = useState([]);
    
    useEffect(() => {
    const apiUrl = 'https://api.development.easyheals.com/Search/featuredDiagnostics';
    
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
    
        const labTestInfo = data.map((labTest) => ({
          title: labTest.title.length > 20 ? `${labTest.title.substring(0, 20)}...` : labTest.title,
          preparation:
            labTest.fasting_required === 'No'
              ? 'No Special Preparation Required'
              : `At least ${labTest.fasting_hours} hours fasting required`,
          hospitalName1: labTest.available_labs[0]?.title.length > 16
                ? `${labTest.available_labs[0]?.title.substring(0, 16)}...`
                : labTest.available_labs[0]?.title || '',
          hospitalAddress1: extractAddress(labTest.available_labs[0]?.address || ''),
          hospitalPrice1: labTest.available_labs[0]?.price || '',
          hospitalOfferPrice1: labTest.available_labs[0]?.offer_price || '',
          hospitalName2: labTest.available_labs[1]?.title.length > 17
                ? `${labTest.available_labs[1]?.title.substring(0, 17)}...`
                : labTest.available_labs[1]?.title || '',
          hospitalAddress2: extractAddress(labTest.available_labs[1]?.address || ''),
          hospitalPrice2: labTest.available_labs[1]?.price || '',
          hospitalOfferPrice2: labTest.available_labs[1]?.offer_price || '',
        }));
    
        setLabTests(labTestInfo.slice(0, 3));
      })
      .catch((error) => {
        console.error('Error fetching lab tests:', error);
      });
    }, [bearerToken]);


    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: null, // Custom previous arrow component
        nextArrow: null, // Custom next arrow component
    };

  return (
    <div className="flex flex-col relative sm:h-[30em] 2xs:h-[29em] 3xs:h-[28.5em]">
        <img src="./plus_bg_1.svg" className="absolute w-[4em]"/>
         <div className="flex flex-row items-center justify-center">
            <div className="h-[1px] 3xs:w-[29.2vw] 2xs:w-[30.2vw] xs:w-[30.3vw] sm:w-[31vw] bg-text-light"></div>
            <img src="./plus_icon.svg" />
            <div className="mx-4 font-[700] 3xs:text-[18px] xs:text-[19px] sm:text-[20px]">Lab Tests</div>
            <img src="./plus_icon.svg" />
            <div className="h-[1px] 3xs:w-[29.2vw] 2xs:w-[30.2vw] xs:w-[30.3vw] sm:w-[31vw] bg-text-light"></div>
        </div>

        <Slider {...settings} className="mx-6 mt-6">
            {labTests.map((labTest, index) => (
                <LabTestCardMediumScreen key={index} {...labTest} />
              ))}
        </Slider>

        {/* Buttons */}
        <div className="
            flex 
            flex-row 
            justify-center
            mt-8
            gap-x-4"
        >
            <button className="
                w-[12em]
                h-[3em] 
                border-2 
                border-buttonColor 
                text-[13px]
                font-[Poppins] 
                font-[700] 
                text-buttonColor 
                rounded-lg 
                flex 
                justify-center 
                items-center"
            >
                View all Lab Tests
            </button>

            <button className="
                w-[12em]
                h-[3em] 
                bg-buttonColor 
                text-white 
                text-[13px]
                font-[Poppins] 
                font-[700] 
                rounded-lg 
                flex 
                justify-center 
                items-center"
            >
                Book Lab Tests
            </button>
        </div>
    </div>
  )
}
