import React, { useState, useEffect } from 'react'
import { useAuth } from '../AuthContext';
import { LabTestCardMediumScreen } from './LabTestCardMediumScreen'
import axios from 'axios';

export const LabTestMediumScreen = () => {
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

  return (
    <div className="relative flex flex-col h-[29em]">
        {/* Heading */}
        <div className="flex flex-row justify-center items-center">
            <div className="w-[30vw] h-[1px] bg-text-light"></div>
            <img src="./plus_icon.svg" />
            <div className="text-[22px] mx-6 font-[700] font-[Raleway]">Lab Tests</div>
            <img src="./plus_icon.svg" />
            <div className="w-[30vw] h-[1px] bg-text-light"></div>
        </div>

        {/* Cards */}
        <div className="flex flex-row gap-x-4 mx-8 font-[Poppins] mt-10">
             {labTests.map((labTest, index) => (
                <LabTestCardMediumScreen key={index} {...labTest} />
              ))}
        </div>

        {/* Buttons */}
        <div className="
            flex 
            flex-row 
            justify-center
            mt-10
            gap-x-10"
        >
            <button className="
                w-[15em]
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
            <button className="
                w-[15em]
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
        </div>
    </div>
  )
}
