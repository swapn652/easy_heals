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
    <div className="flex flex-col w-[20vw] font-[Raleway]">
        {/* First section */}
        <div className="flex flex-col ml-[1vw] mt-[1vw]">
            {/* Heading */}
            <div className="font-[700] text-[1.1vw]">
                See Results by
            </div>
            <div className="text-[1.1vw]">
                most searched diseases
            </div>
            
            {/* The buttons that will be used to filter */}
            <div className="flex flex-row flex-wrap gap-[0.7vw] mt-[1vh] w-[90%]">
                <MostSearchedDiseasesButton disease="Headaches"/>
                <MostSearchedDiseasesButton disease="PCOD"/>
                <MostSearchedDiseasesButton disease="Asthama"/>
                <MostSearchedDiseasesButton disease="Bladder Cancer"/>
            </div>
        </div>

        {/* Divider - 1 */}
        <div className="
            h-[1px] 
            w-[20vw] 
            bg-text-light 
            mt-[2vh]">
            </div>


        {/* Sort by section */}
        <div className="flex flex-col mt-[2vh] ml-[1vw]">
            <div className="text-buttonColor 2xl:text-[16px] xl:text-[14px] lg:text-[11px] font-[700]">Sort by</div>

            <div className="flex flex-col text-[1vw] gap-y-[0.8vh] mt-[0.8em]">
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
        <div className="
            h-[1px] 
            w-[20vw] 
            bg-text-light 
            mt-[2vh]">
            </div>

        {/* Filter Section */}
        <div className="flex flex-col mt-[2vh] ml-[1vw]">
            <div className="text-buttonColor text-[1.1vw] font-[700]">Filter</div>
            <div className="text-[1vw] mt-2 font-[600]">
                Price
            </div>

            {/* Price slider */}
            <div id="price-slider" className="w-[15.8vw] mt-4 left-[0.5em]"></div>

            <div className="flex justify-between text-[0.9vw] mt-2">
                <div id="min-price-value">₹250</div>
                <div className="mr-[1vw]" id="max-price-value">₹5 lakh</div>
            </div>

            <div className="mt-2 font-[600] text-[1vw]">
                Distance
            </div>

            {/* Distance slider */}
            <div id="distance-slider" className="w-[15.8vw] mt-4 left-[0.5em]"></div>

            <div className="flex justify-between text-[0.9vw] mt-2">
                <div id="min-distance-value">1 km</div>
                <div className="mr-[1vw]" id="max-distance-value">200 km</div>
            </div>
        </div>

        {/* Rating section */}
        <div className="flex flex-col mt-[2vh] ml-[1vw]">
            <div className="2xl:text-[14px] xl:text-[12px] lg:text-[11px] font-[600]">Rating</div>
            <div className="mt-2">
                <StarRatings
                    rating={2.403}
                    starDimension="2vw"
                    starSpacing="0.2vw"
                />
            </div>
        </div>
    </div>
  )
}
