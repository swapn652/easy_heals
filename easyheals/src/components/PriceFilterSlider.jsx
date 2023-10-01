import React, { useEffect } from 'react';
import noUiSlider from 'nouislider';
// Import the CSS file directly from the package
import 'nouislider/dist/nouislider.css';
import "./PriceFilterSlider.css";

const PriceFilterSlider = () => {
  useEffect(() => {
    // Initialize the slider
    const priceSlider = document.getElementById('price-slider');

    noUiSlider.create(priceSlider, {
      start: [250, 500000], // Initial range
      connect: true, // Connect the handles
      step: 10, // Increment value
      range: {
        min: 250,
        max: 500000,
      },
    });

    // Add event listeners or custom logic as needed

    // Cleanup when the component unmounts
    return () => {
      priceSlider.noUiSlider.destroy();
    };
  }, []);

  return (
    <div>
      <div id="price-slider" className="ml-10 w-[20em]"></div>
    </div>
  );
};

export default PriceFilterSlider;
