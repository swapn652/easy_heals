import React, { useState, useEffect } from 'react'
import { LabTestCard } from './LabTestCard';
import { useAuth } from '../../AuthContext';
import axios from 'axios';

export const LabTests = () => {
    const divStyle = {
        backgroundImage: `url('./FeaturedServices_bg.svg')`,
        backgroundSize: 'cover', // You can adjust this based on your image requirements
        backgroundRepeat: 'no-repeat'
    };

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
          title: labTest.title,
          preparation:
            labTest.fasting_required === 'No'
              ? 'No Special Preparation Required'
              : `At least ${labTest.fasting_hours} hours fasting required`,
          hospitalName1: labTest.available_labs[0]?.title || '',
          hospitalAddress1: extractAddress(labTest.available_labs[0]?.address || ''),
          hospitalPrice1: labTest.available_labs[0]?.price || '',
          hospitalOfferPrice1: labTest.available_labs[0]?.offer_price || '',
          hospitalName2: labTest.available_labs[1]?.title || '',
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


  return (
    <div className="relative w-screen 4xl:h-[48em] 3xl:h-[45em] 2xl:h-[44em] xl:h-[42em] lg:h-[36em] flex flex-row justify-center font-[Raleway]">
        {/* Heading */}
        <div className="flex items-center justify-center absolute top-44">
            <span className="3xl:w-[37vw] 2xl:w-[540px] xl:w-[38vw] lg:w-[380px] md:w-[31.5vw] h-[1px] bg-text-light"></span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="px-4 font-Poppins 4xl:text-[34px] 3xl:text-[30px] 2xl:text-[27px] xl:text-[23px] md:text-[22px] font-[700] mx-2">
                Lab Tests
            </span>
            <img src="./plus_icon.svg" alt="plus_icon" className="w-4"/>
            <span className="3xl:w-[37vw] 2xl:w-[540px] xl:w-[38vw] lg:w-[380px] md:w-[31.5vw] h-[1px] bg-text-light"></span>
        </div>
        
        {/* Cards */}
        <div style={divStyle} className="absolute w-screen 4xl:h-[30em] 3xl:h-[28em] 2xl:h-[27em] xl:h-[25em] lg:h-[21em] flex flex-row justify-center xl:top-[17em] lg:top-[15em]">
            <div className="absolute flex flex-row top-12 gap-x-4">
              {labTests.map((labTest, index) => (
                <LabTestCard key={index} {...labTest} />
              ))}
            </div>



            <div className="
            absolute 
            flex 
            flex-row 
            justify-center 
            gap-x-10 
            4xl:top-[24em]
            2xl:top-[22em] 
            xl:top-[19.5em] 
            lg:top-[16.5em]"
        >
            <button className="
                lg:w-[12em] 
                h-[3em] 
                bg-buttonColor 
                text-white 
                4xl:text-[20px]
                3xl:text-[18px]
                2xl:text-[14px] 
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
                lg:w-[12em] 
                h-[3em] border-2 
                border-buttonColor 
                4xl:text-[20px]
                3xl:text-[18px]
                2xl:text-[14px] 
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
    
    </div>
  )
}
