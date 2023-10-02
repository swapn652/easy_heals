import React, { useEffect } from 'react';
import { MostSearchedDiseasesButton } from './MostSearchedDiseasesButton'
import PriceFilterSlider from './PriceFilterSlider'
import noUiSlider from 'nouislider';
// Import the CSS file directly from the package
import 'nouislider/dist/nouislider.css';
import "./PriceFilterSlider.css";
import StarRatings from 'react-star-ratings';

export const FilterTreatment = () => {

    useEffect(() => {
        // Initialize the slider
        const priceSlider = document.getElementById('price-slider');
        const minPriceValueElement = document.getElementById('min-price-value');
        const maxPriceValueElement = document.getElementById('max-price-value');
    
        const pSlider = noUiSlider.create(priceSlider, {
          start: [250, 500000], // Initial range
          connect: true, // Connect the handles
          step: 10, // Increment value
          range: {
            min: 250,
            max: 500000,
          },
        });

        pSlider.on('update', (values) => {
            // values[0] is the left handle value
            // values[1] is the right handle value
            minPriceValueElement.textContent = `₹${Math.round(values[0])}`;
            maxPriceValueElement.textContent = `₹${Math.round(values[1])}`;
        });

        const distanceSlider = document.getElementById('distance-slider');
    
        const dSlider = noUiSlider.create(distanceSlider, {
          start: [1, 80], // Initial range
          connect: true, // Connect the handles
          step: 10, // Increment value
          range: {
            min: 1,
            max: 200,
          },
        });

        const minDistanceValueElement = document.getElementById('min-distance-value');
        const maxDistanceValueElement = document.getElementById('max-distance-value');

        dSlider.on('update', (values) => {
            // values[0] is the left handle value
            // values[1] is the right handle value
            minDistanceValueElement.textContent = `${Math.round(values[0])} km`;
            maxDistanceValueElement.textContent = `${Math.round(values[1])} km`;
        });

        // Add event listeners or custom logic as needed
    
        // Cleanup when the component unmounts
        return () => {
          priceSlider.noUiSlider.destroy();
          distanceSlider.noUiSlider.destroy();
        };
      }, []);

  return (
    <div className="flex flex-col w-[20vw] font-[Raleway] relative">
        {/* First section */}
        <div className="flex flex-col absolute left-[1em] top-[1em]">
            {/* Heading */}
            <div className="font-[700] 2xl:text-[18px] xl:text-[16px] lg:text-[13px]">
                See Results by
            </div>
            <div className="2xl:text-[18px] xl:text-[16px] lg:text-[13px]">
                most searched diseases
            </div>
            
            {/* The buttons that will be used to filter */}
            <div className="flex flex-row flex-wrap gap-2 mt-4">
                <MostSearchedDiseasesButton disease="Headaches"/>
                <MostSearchedDiseasesButton disease="PCOD"/>
                <MostSearchedDiseasesButton disease="Asthama"/>
                <MostSearchedDiseasesButton disease="Bladder Cancer"/>
            </div>
        </div>

        {/* Divider - 1 */}
        <div className="h-[1px] w-[100%] bg-text-light absolute 2xl:top-[12em] xl:top-[11em] lg:top-[10em]"></div>

        <div className="flex flex-col absolute 2xl:top-[13em] xl:top-[12em] lg:top-[11em] left-[1em]">
            <div className="text-buttonColor 2xl:text-[18px] xl:text-[16px] lg:text-[13px] font-[700]">Sort by</div>

            <div className="flex flex-col 2xl:text-[16px] xl:text-[14px] lg:text-[11px] gap-y-2 mt-[0.8em]">
                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    name="sorting"
                    className="h-[1.2em] w-[1.2em] accent-buttonColor"
                    />
                    <span className="ml-2">Alphabetically</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    name="sorting"
                    className="h-[1.2em] w-[1.2em] accent-buttonColor"
                    />
                    <span className="ml-2">Price: Low to High</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    name="sorting"
                    className="h-[1.2em] w-[1.2em] accent-buttonColor"
                    />
                    <span className="ml-2">Price: High to Low</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    name="sorting"
                    className="h-[1.2em] w-[1.2em] accent-buttonColor"
                    />
                    <span className="ml-2">Customer Rating</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    name="sorting"
                    className="h-[1.2em] w-[1.2em] accent-buttonColor"
                    />
                    <span className="ml-2">Distance: Nearest to Farthest</span>
                </label>
            </div>
        </div>

        {/* Divider 2 */}
        <div className="h-[1px] w-[100%] bg-text-light absolute 2xl:top-[26em] xl:top-[24em] lg:top-[21.5em]"></div>

        <div className="flex flex-col absolute 2xl:top-[27em] xl:top-[25em] lg:top-[22.5em] left-[1em]">
            <div className="text-buttonColor 2xl:text-[18px] xl:text-[16px] lg:text-[13px] font-[700]">Filter</div>
            <div className="2xl:text-[16px] xl:text-[14px] lg:text-[11px] mt-2 font-[600]">Price</div>
            <div id="price-slider" className="2xl:w-[14.5em] xl:w-[13em] lg:w-[10em] mt-4 left-[0.5em]"></div>
            <div className="flex justify-between relative text-[14px] mt-2">
                <div id="min-price-value">₹250</div>
                <div className="" id="max-price-value">₹5 lakh</div>
            </div>

            <div className="mt-2 font-[600] 2xl:text-[16px] xl:text-[14px] lg:text-[12px]">
                Distance
            </div>
            <div id="distance-slider" className="2xl:w-[14.5em] xl:w-[13em] lg:w-[10em] mt-4 left-[0.5em]"></div>
            <div className="flex justify-between 2xl:text-[14px] xl:text-[12px] lg:text-[10px] mt-2">
                <div id="min-distance-value">1 km</div>
                <div className="" id="max-distance-value">200 km</div>
            </div>
        </div>

        <div className="flex flex-col absolute 2xl:top-[40em] xl:top-[38em] lg:top-[34em] left-[1em]">
            <div className="2xl:text-[16px] xl:text-[14px] lg:text-[12px] font-[600]">Rating</div>
            <div className="mt-2">
                <StarRatings
                    rating={2.403}
                    starDimension="26px"
                    starSpacing="4px"
                />
            </div>
        </div>
    </div>
  )
}
